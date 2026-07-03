import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '../context/AuthContext'
import BrandLogo from '../components/BrandLogo'

// ── Schemas ──────────────────────────────────────────────────────────────────
const loginSchema = z.object({
  email:    z.string().email('Enter a valid email'),
  password: z.string().min(6, 'At least 6 characters'),
})

const signupSchema = z.object({
  name:            z.string().min(2, 'At least 2 characters'),
  email:           z.string().email('Enter a valid email'),
  password:        z.string().min(6, 'At least 6 characters'),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: 'Passwords do not match',
  path:    ['confirmPassword'],
})

// ── Login Form ────────────────────────────────────────────────────────────────
function LoginForm({ onSuccess }) {
  const [error, setError]   = useState(null)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })

  const onSubmit = async ({ email, password }) => {
    setError(null)
    setLoading(true)
    try {
      const res  = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')
      login(data.user)
      onSuccess()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-wider mb-1.5">Email Address</label>
        <input {...register('email')} type="email" placeholder="you@email.com" className="input-field rounded-xl" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-wider mb-1.5">Password</label>
        <input {...register('password')} type="password" placeholder="••••••••" className="input-field rounded-xl" />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>
      {error && <p className="text-red-500 text-sm bg-red-50 rounded-xl p-3 border border-red-100">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-blue transition-all duration-200 disabled:opacity-60 text-sm shadow-md"
      >
        {loading
          ? <span className="flex items-center justify-center gap-2"><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Signing in...</span>
          : 'Sign In'}
      </button>
    </form>
  )
}

// ── Signup Form ───────────────────────────────────────────────────────────────
function SignupForm({ onSuccess }) {
  const [error, setError]   = useState(null)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(signupSchema) })

  const onSubmit = async ({ name, email, password }) => {
    setError(null)
    setLoading(true)
    try {
      const res  = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Registration failed')
      login(data.user)
      onSuccess()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-wider mb-1.5">Full Name</label>
        <input {...register('name')} placeholder="Your full name" className="input-field rounded-xl" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-wider mb-1.5">Email Address</label>
        <input {...register('email')} type="email" placeholder="you@email.com" className="input-field rounded-xl" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-wider mb-1.5">Password</label>
          <input {...register('password')} type="password" placeholder="••••••••" className="input-field rounded-xl" />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>
        <div>
          <label className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-wider mb-1.5">Confirm</label>
          <input {...register('confirmPassword')} type="password" placeholder="••••••••" className="input-field rounded-xl" />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
        </div>
      </div>
      {error && <p className="text-red-500 text-sm bg-red-50 rounded-xl p-3 border border-red-100">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-teal text-navy font-semibold rounded-xl hover:bg-teal/90 transition-all duration-200 disabled:opacity-60 text-sm shadow-md"
      >
        {loading
          ? <span className="flex items-center justify-center gap-2"><span className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin" />Creating account...</span>
          : 'Create Account'}
      </button>
    </form>
  )
}

// ── Main Auth Page ────────────────────────────────────────────────────────────
export default function Auth() {
  const [tab, setTab]     = useState('login')
  const navigate          = useNavigate()
  const onSuccess         = () => navigate('/')

  return (
    <div className="min-h-screen flex">

      {/* ── Left branding panel ── */}
      <div className="hidden lg:flex lg:w-1/2 bg-navy flex-col justify-between p-12 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 relative z-10">
          <BrandLogo size={52} />
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold text-white text-xl tracking-tight">HarAm</span>
            <span className="text-teal text-xs font-semibold tracking-widest uppercase">Innovations</span>
          </div>
        </Link>

        {/* Centre content */}
        <div className="relative z-10">
          <div className="w-14 h-1 bg-teal rounded-full mb-8" />
          <h2 className="text-4xl font-heading font-bold text-white leading-tight mb-5">
            Build. Learn.<br />
            <span className="text-teal">Innovate.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-sm">
            Join HarAm Innovations and be part of a movement building the future
            of Games, Research Papers, and Education in India.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[['🎮', 'Games'], ['📄', 'Research'], ['📚', 'Education']].map(([emoji, label]) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 bg-white/8 rounded-full border border-white/10">
                <span>{emoji}</span>
                <span className="text-white/70 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer quote */}
        <p className="text-white/25 text-xs relative z-10">
          © {new Date().getFullYear()} HarAm Innovations. All rights reserved.
        </p>
      </div>

      {/* ── Right form panel ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-silver px-6 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <Link to="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <BrandLogo size={40} />
            <span className="font-heading font-bold text-navy text-lg">HarAm <span className="text-teal">Innovations</span></span>
          </Link>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            {/* Tabs */}
            <div className="flex bg-silver rounded-2xl p-1 mb-8">
              {[['login', 'Sign In'], ['signup', 'Sign Up']].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    tab === key
                      ? 'bg-white text-navy shadow-sm'
                      : 'text-gray hover:text-charcoal'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Heading */}
            <div className="mb-6">
              <h1 className="font-heading font-bold text-navy text-2xl">
                {tab === 'login' ? 'Welcome back' : 'Create account'}
              </h1>
              <p className="text-gray text-sm mt-1">
                {tab === 'login'
                  ? 'Sign in to access your HarAm account.'
                  : 'Join HarAm Innovations today — it\'s free.'}
              </p>
            </div>

            {/* Form with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, x: tab === 'login' ? -12 : 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: tab === 'login' ? 12 : -12 }}
                transition={{ duration: 0.2 }}
              >
                {tab === 'login'
                  ? <LoginForm onSuccess={onSuccess} />
                  : <SignupForm onSuccess={onSuccess} />
                }
              </motion.div>
            </AnimatePresence>

            {/* Switch tab hint */}
            <p className="text-center text-gray text-sm mt-6">
              {tab === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setTab(tab === 'login' ? 'signup' : 'login')}
                className="text-teal font-semibold hover:underline"
              >
                {tab === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </motion.div>

          {/* Back to site */}
          <p className="text-center mt-6">
            <Link to="/" className="text-gray/60 text-sm hover:text-navy transition-colors flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to website
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
