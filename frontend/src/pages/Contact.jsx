import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import SEOHead from '../components/SEOHead'
import { COMPANY_INFO, SOCIAL_LINKS } from '../utils/constants'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email'),
  mobile:  z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CONTACT_ITEMS = [
  { Icon: EmailIcon,    label: 'Email Us',  value: COMPANY_INFO.email,   color: 'bg-teal/20 text-teal' },
  { Icon: PhoneIcon,    label: 'Call Us',   value: COMPANY_INFO.phone,   color: 'bg-blue/20 text-blue-300' },
  { Icon: LocationIcon, label: 'Visit Us',  value: COMPANY_INFO.address, color: 'bg-yellow-400/20 text-yellow-300' },
]

function SocialIcon({ type }) {
  if (type === 'instagram') return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
  if (type === 'telegram') return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2}/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}

export default function Contact() {
  const [status, setStatus] = useState(null)
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data) => {
    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...data,
      }).toString()
      const res = await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      if (!res.ok) throw new Error('Submit failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with HarAm Innovations — for partnerships, demos, careers, or general inquiries."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="badge-teal mb-5 inline-block">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Let's <span className="text-teal">Start a</span>
              <br className="hidden sm:block" /> Conversation
            </h1>
            <p className="mt-5 text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
              Whether you're a partner, investor, customer, or just curious — we'd love to hear from you.
            </p>

            {/* Quick-contact pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors border border-white/10"
              >
                <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors border border-white/10"
              >
                <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 bg-silver">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Info panel */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-3xl bg-navy p-8 text-white relative overflow-hidden h-full">
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-teal/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-40 h-40 bg-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />

                <div className="relative">
                  <h2 className="text-2xl font-heading font-bold mb-1">Contact Information</h2>
                  <p className="text-white/45 text-sm mb-8">We're here to help. Reach out anytime.</p>

                  <div className="space-y-6">
                    {CONTACT_ITEMS.map(({ Icon, label, value, color }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                          <Icon />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">{label}</p>
                          <p className="text-white/85 text-sm leading-relaxed">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 my-8" />

                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4">Connect With Us</p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.icon}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-11 h-11 rounded-xl bg-white/10 text-white/70 flex items-center justify-center hover:bg-teal hover:text-white transition-all duration-200 hover:scale-110"
                      >
                        <SocialIcon type={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl shadow-lg p-12 text-center"
                >
                  <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-10 h-10 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-2xl mb-2">Message Sent!</h3>
                  <p className="text-gray mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus(null)} className="btn-primary">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="font-heading font-bold text-navy text-2xl">Send Us a Message</h2>
                    <p className="text-gray text-sm mt-1">Fill in the form below and we'll respond shortly.</p>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal/60 uppercase tracking-wider mb-2">Your Name *</label>
                        <input {...register('name')} className="input-field rounded-xl" placeholder="Full name" />
                        {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal/60 uppercase tracking-wider mb-2">Email Address *</label>
                        <input {...register('email')} type="email" className="input-field rounded-xl" placeholder="you@email.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-charcoal/60 uppercase tracking-wider mb-2">Mobile Number *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray text-sm font-semibold select-none">+91</span>
                        <input {...register('mobile')} type="tel" maxLength={10} className="input-field rounded-xl pl-12" placeholder="10-digit mobile number" />
                      </div>
                      {errors.mobile && <p className="text-red-500 text-xs mt-1.5">{errors.mobile.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-charcoal/60 uppercase tracking-wider mb-2">Subject *</label>
                      <select {...register('subject')} className="input-field rounded-xl">
                        <option value="">Select a subject</option>
                        <option value="Product Demo">Product Demo Request</option>
                        <option value="Partnership">Partnership Opportunity</option>
                        <option value="Investment">Investment Inquiry</option>
                        <option value="Support">Technical Support</option>
                        <option value="General">General Inquiry</option>
                      </select>
                      {errors.subject && <p className="text-red-500 text-xs mt-1.5">{errors.subject.message}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-charcoal/60 uppercase tracking-wider mb-2">Message *</label>
                      <textarea {...register('message')} rows={6} className="input-field rounded-xl resize-none" placeholder="Tell us what's on your mind..." />
                      {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
                    </div>

                    <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

                    {status === 'error' && (
                      <p className="text-red-500 text-sm bg-red-50 rounded-xl p-3 border border-red-100">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-navy text-white font-semibold rounded-xl hover:bg-blue transition-all duration-200 shadow-md hover:shadow-xl active:scale-[0.98] disabled:opacity-60 text-base"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
