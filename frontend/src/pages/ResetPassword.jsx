import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import BrandLogo from '../components/BrandLogo'
import SEOHead from '../components/SEOHead'

const schema = z.object({
  password:        z.string().min(6, 'At least 6 characters'),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: 'Passwords do not match',
  path:    ['confirmPassword'],
})

export default function ResetPassword() {
  const [searchParams]        = useSearchParams()
  const token                 = searchParams.get('token')
  const navigate              = useNavigate()
  const [status, setStatus]   = useState(null) // null | 'success' | 'error'
  const [errMsg, setErrMsg]   = useState('')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async ({ password }) => {
    setLoading(true)
    setErrMsg('')
    try {
      const res  = await fetch('/api/auth/reset-password', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ token, password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Reset failed')
      setStatus('success')
      setTimeout(() => navigate('/auth'), 3000)
    } catch (err) {
      setErrMsg(err.message)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEOHead title="Reset Password" />
      <div className="min-h-screen flex">

        {/* Left branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-navy flex-col justify-between p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
          <Link to="/" className="flex items-center gap-3 relative z-10">
            <BrandLogo size={52} />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-white text-xl tracking-tight">HarAm</span>
              <span className="text-teal text-xs font-semibold tracking-widest uppercase">Innovations</span>
            </div>
          </Link>
          <div className="relative z-10">
            <div className="w-14 h-1 bg-teal rounded-full mb-8" />
            <h2 className="text-4xl font-heading font-bold text-white leading-tight mb-4">
              Secure your<br /><span className="text-teal">account.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-sm">
              Choose a strong password to protect your HarAm Innovations account.
            </p>
          </div>
          <p className="text-white/25 text-xs relative z-10">© {new Date().getFullYear()} HarAm Innovations</p>
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-silver px-6 py-12">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <Link to="/" className="flex items-center gap-2 mb-8 lg:hidden">
              <BrandLogo size={40} />
              <span className="font-heading font-bold text-navy text-lg">HarAm <span className="text-teal">Innovations</span></span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              {!token ? (
                <div className="text-center py-4">
                  <div className="text-5xl mb-4">🔗</div>
                  <h2 className="font-heading font-bold text-navy text-xl mb-2">Invalid Link</h2>
                  <p className="text-gray text-sm mb-6">This reset link is missing or invalid. Please request a new one.</p>
                  <Link to="/auth" className="btn-primary text-sm">Back to Login</Link>
                </div>
              ) : status === 'success' ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-heading font-bold text-navy text-xl mb-2">Password Updated!</h2>
                  <p className="text-gray text-sm mb-2">Your password has been changed successfully.</p>
                  <p className="text-gray/60 text-xs">Redirecting to login in 3 seconds...</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h1 className="font-heading font-bold text-navy text-2xl">Set New Password</h1>
                    <p className="text-gray text-sm mt-1">Choose a strong password for your account.</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-wider mb-1.5">New Password</label>
                      <input {...register('password')} type="password" placeholder="••••••••" className="input-field rounded-xl" />
                      {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-charcoal/50 uppercase tracking-wider mb-1.5">Confirm Password</label>
                      <input {...register('confirmPassword')} type="password" placeholder="••••••••" className="input-field rounded-xl" />
                      {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                    </div>
                    {errMsg && <p className="text-red-500 text-sm bg-red-50 rounded-xl p-3 border border-red-100">{errMsg}</p>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-teal text-navy font-semibold rounded-xl hover:bg-teal/90 transition-all duration-200 disabled:opacity-60 text-sm shadow-md"
                    >
                      {loading
                        ? <span className="flex items-center justify-center gap-2"><span className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin" />Updating...</span>
                        : 'Update Password'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            <p className="text-center mt-6">
              <Link to="/auth" className="text-gray/60 text-sm hover:text-navy transition-colors flex items-center justify-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
