import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from '../context/AuthContext'
import SEOHead from '../components/SEOHead'
import BrandLogo from '../components/BrandLogo'

const schema = z.object({
  name:            z.string().min(2, 'Name must be at least 2 characters'),
  email:           z.string().email('Enter a valid email'),
  password:        z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((d) => d.password === d.confirmPassword, {
  message: 'Passwords do not match',
  path:    ['confirmPassword'],
})

export default function Signup() {
  const { login }  = useAuth()
  const navigate   = useNavigate()
  const [error, setError]     = useState(null)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async ({ name, email, password }) => {
    setError(null)
    setLoading(true)
    try {
      const res  = await fetch('/api/auth/register', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name, email, password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Registration failed')
      login(data.user)
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEOHead title="Sign Up" description="Create your HarAm Innovations account." />

      <div className="min-h-screen bg-silver flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Top bar */}
            <div className="bg-navy px-8 py-8 text-center">
              <Link to="/" className="inline-flex flex-col items-center gap-2">
                <BrandLogo size={56} />
                <span className="font-heading font-bold text-white text-xl tracking-tight">HarAm <span className="text-teal">Innovations</span></span>
              </Link>
              <p className="text-white/50 text-sm mt-2">Create your account to get started.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5">
              <div>
                <label className="block text-[11px] font-bold text-charcoal/60 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  {...register('name')}
                  placeholder="Your full name"
                  className="input-field rounded-xl"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-charcoal/60 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="you@email.com"
                  className="input-field rounded-xl"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-charcoal/60 uppercase tracking-wider mb-2">Password</label>
                  <input
                    {...register('password')}
                    type="password"
                    placeholder="••••••••"
                    className="input-field rounded-xl"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1.5">{errors.password.message}</p>}
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-charcoal/60 uppercase tracking-wider mb-2">Confirm</label>
                  <input
                    {...register('confirmPassword')}
                    type="password"
                    placeholder="••••••••"
                    className="input-field rounded-xl"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1.5">{errors.confirmPassword.message}</p>}
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 rounded-xl p-3 border border-red-100">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-teal text-navy font-semibold rounded-xl hover:bg-teal/90 transition-all duration-200 shadow-md disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                    Creating account...
                  </span>
                ) : 'Create Account'}
              </button>

              <p className="text-center text-gray text-sm pt-2">
                Already have an account?{' '}
                <Link to="/login" className="text-teal font-semibold hover:underline">Sign in</Link>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  )
}
