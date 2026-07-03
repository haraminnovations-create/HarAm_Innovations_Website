import getClient from '../config/supabase.js'
import { sendMail } from '../config/mailer.js'

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, mobile, subject, message } = req.body

    // Honeypot check
    if (req.body._hp) return res.status(200).json({ success: true })

    // Save to Supabase only if configured
    try {
      const supabase = getClient()
      await supabase.from('contacts').insert([{ name, email, mobile, subject, message }])
    } catch (dbErr) {
      console.warn('Supabase not configured or insert failed — skipping DB save:', dbErr.message)
    }

    await sendMail({
      to: 'haraminnovations@gmail.com',
      subject: `[HarAm Website] New Inquiry: ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#0D1B2A,#14B8A6);padding:24px;">
            <h2 style="color:#fff;margin:0;font-size:20px;">📬 New Contact Form Submission</h2>
            <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px;">HarAm Innovations Website</p>
          </div>
          <div style="padding:24px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:120px;font-weight:600;">Name</td><td style="padding:8px 0;color:#0D1B2A;font-size:14px;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px;font-weight:600;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#14B8A6;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px;font-weight:600;">Mobile</td><td style="padding:8px 0;"><a href="tel:${mobile}" style="color:#14B8A6;">+91 ${mobile}</a></td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px;font-weight:600;">Subject</td><td style="padding:8px 0;color:#0D1B2A;font-size:14px;">${subject}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
            <p style="color:#64748b;font-size:13px;font-weight:600;margin:0 0 8px;">Message</p>
            <p style="color:#1e293b;font-size:14px;line-height:1.7;margin:0;">${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <div style="padding:16px 24px;background:#f8fafc;text-align:center;">
            <p style="color:#94a3b8;font-size:12px;margin:0;">Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      `,
    })

    res.status(201).json({ success: true, message: 'Your message has been received. We\'ll be in touch soon!' })
  } catch (err) {
    next(err)
  }
}
