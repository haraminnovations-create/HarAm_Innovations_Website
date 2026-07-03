import crypto from 'crypto'
import { sendMail } from '../config/mailer.js'

// In-memory stores (replace with Supabase/DB when ready)
const users  = new Map() // email → { name, email, passwordHash }
const tokens = new Map() // token → { email, expires }

function hash(password) {
  return crypto.createHash('sha256').update(password + process.env.SECRET_SALT || 'haram-salt').digest('hex')
}

// POST /api/auth/register
export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) return res.status(400).json({ message: 'All fields required' })
    if (users.has(email)) return res.status(409).json({ message: 'Email already registered' })
    users.set(email, { name, email, passwordHash: hash(password) })
    const user = { name, email }
    res.status(201).json({ success: true, user })
  } catch (err) { next(err) }
}

// POST /api/auth/login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' })
    const stored = users.get(email)
    if (!stored || stored.passwordHash !== hash(password)) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
    const user = { name: stored.name, email: stored.email }
    res.json({ success: true, user })
  } catch (err) { next(err) }
}

// POST /api/auth/forgot-password
export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body
    if (!email) return res.status(400).json({ message: 'Email is required' })

    // Always respond with success to avoid email enumeration
    if (!users.has(email)) {
      return res.json({ success: true, message: 'If that email is registered, a reset link has been sent.' })
    }

    const token   = crypto.randomBytes(32).toString('hex')
    const expires = Date.now() + 1000 * 60 * 30 // 30 minutes
    tokens.set(token, { email, expires })

    const resetUrl  = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${token}`
    const user      = users.get(email)

    await sendMail({
      to:      email,
      subject: 'Reset your HarAm Innovations password',
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#0D1B2A,#14B8A6);padding:28px 24px;">
            <h2 style="color:#fff;margin:0;font-size:20px;">🔐 Password Reset Request</h2>
            <p style="color:rgba(255,255,255,0.65);margin:6px 0 0;font-size:13px;">HarAm Innovations</p>
          </div>
          <div style="padding:28px 24px;background:#fff;">
            <p style="color:#1e293b;font-size:15px;">Hi <strong>${user.name}</strong>,</p>
            <p style="color:#64748b;font-size:14px;line-height:1.6;">
              We received a request to reset your password. Click the button below to set a new password.
              This link will expire in <strong>30 minutes</strong>.
            </p>
            <div style="text-align:center;margin:32px 0;">
              <a href="${resetUrl}" style="display:inline-block;padding:14px 32px;background:#14B8A6;color:#0D1B2A;font-weight:700;font-size:15px;border-radius:10px;text-decoration:none;">
                Reset Password
              </a>
            </div>
            <p style="color:#94a3b8;font-size:12px;">
              If you didn't request this, you can safely ignore this email. Your password won't change.
            </p>
          </div>
          <div style="padding:14px 24px;background:#f8fafc;text-align:center;">
            <p style="color:#cbd5e1;font-size:11px;margin:0;">© ${new Date().getFullYear()} HarAm Innovations</p>
          </div>
        </div>
      `,
    })

    res.json({ success: true, message: 'If that email is registered, a reset link has been sent.' })
  } catch (err) { next(err) }
}

// POST /api/auth/reset-password
export const resetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body
    if (!token || !password) return res.status(400).json({ message: 'Token and password required' })

    const entry = tokens.get(token)
    if (!entry) return res.status(400).json({ message: 'Invalid or expired reset link' })
    if (Date.now() > entry.expires) {
      tokens.delete(token)
      return res.status(400).json({ message: 'Reset link has expired. Please request a new one.' })
    }

    const user = users.get(entry.email)
    if (!user) return res.status(400).json({ message: 'User not found' })

    user.passwordHash = hash(password)
    tokens.delete(token)

    res.json({ success: true, message: 'Password updated successfully.' })
  } catch (err) { next(err) }
}
