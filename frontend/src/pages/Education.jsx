import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const PRODUCTS = [
  {
    title: 'AI Notes',
    tagline: 'Your AI-Powered Notes Companion',
    desc: 'Smarter notes powered by AI — capture ideas, extract text, and sync everywhere. Built for students, professionals, and curious minds.',
    tags: ['Android', 'iOS', 'Windows', 'Web'],
    accentHex: '#2563EB',
    accentClass: 'bg-blue',
    accentLight: 'bg-blue/10',
    accentBorder: 'border-blue/30',
    accentText: 'text-blue',
    features: [
      { emoji: '🧠', label: 'AI Powered',  desc: 'Smart AI assistance for your thoughts and ideas.' },
      { emoji: '🎤', label: 'Voice Notes', desc: 'Capture ideas instantly with voice-to-text.' },
      { emoji: '🔍', label: 'OCR',         desc: 'Extract text from images and documents.' },
      { emoji: '☁️', label: 'Cloud Sync',  desc: 'Access your notes anywhere on any device.' },
      { emoji: '✏️', label: 'Rich Text',   desc: 'Format and organize your notes beautifully.' },
    ],
  },
  {
    title: 'LMS',
    tagline: 'Learning Management System for Everyone',
    desc: 'A powerful yet simple LMS for schools, coaching centers, and online educators across India — making quality education accessible anywhere.',
    tags: ['Web', 'Android', 'iOS'],
    accentHex: '#14B8A6',
    accentClass: 'bg-teal',
    accentLight: 'bg-teal/10',
    accentBorder: 'border-teal/30',
    accentText: 'text-teal',
    features: [
      { emoji: '📚', label: 'Course Builder',    desc: 'Create and manage courses with ease.' },
      { emoji: '📊', label: 'Progress Tracking', desc: 'Monitor student performance in real-time.' },
      { emoji: '🎥', label: 'Video Lessons',     desc: 'Upload and stream lessons to students.' },
      { emoji: '📝', label: 'Assessments',       desc: 'Quizzes, assignments, and grading tools.' },
      { emoji: '🏆', label: 'Certificates',      desc: 'Auto-generate completion certificates.' },
    ],
  },
]

export default function Education() {
  return (
    <>
      <SEOHead
        title="Education – Coming Soon"
        description="HarAm Innovations is building AI Notes and an LMS for learners across India. Launching soon."
      />

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-gold/10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-gold/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="w-16 h-1.5 bg-gold rounded-full mx-auto mb-6" />
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/15 text-gold text-xs font-bold uppercase tracking-widest rounded-full border border-gold/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Coming Soon
            </span>
            <div className="text-5xl mb-3">📚</div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Learning Without <span className="text-gold">Limits</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
              Two powerful EdTech products are on their way — designed to reach every learner,
              from metro schools to rural communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <Link to="/contact" className="btn-secondary">Get Early Access</Link>
              <Link to="/products" className="btn-ghost">All Products</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product showcase cards */}
      <section className="py-20 bg-silver">
        <div className="max-w-6xl mx-auto container-padding space-y-10">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
            <span className="badge-gold mb-3 inline-block">In Development</span>
            <h2 className="section-title">What's Coming</h2>
            <p className="section-subtitle mx-auto mt-2">Two products built to transform how people learn and teach.</p>
          </div>

          {PRODUCTS.map((product, pi) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pi * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-silver"
            >
              {/* Colored top band */}
              <div className={`h-2 w-full ${product.accentClass}`} />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h2 className="font-heading font-extrabold text-navy text-4xl md:text-5xl leading-tight">
                      {product.title}
                    </h2>
                    <p className={`text-sm font-medium mt-1 ${product.accentText}`}>{product.tagline}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <span className="text-xs font-extrabold px-4 py-2 bg-gold/10 text-yellow-700 border-2 border-gold/40 rounded-lg uppercase tracking-widest">
                      Coming Soon
                    </span>
                    <div className="flex gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className={`text-[10px] px-2 py-1 rounded border font-medium ${product.accentLight} ${product.accentText} ${product.accentBorder}`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray text-base leading-relaxed mb-8 max-w-2xl">{product.desc}</p>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.features.map((f, fi) => (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fi * 0.07 }}
                      className={`flex items-start gap-3 p-4 rounded-xl ${product.accentLight} border ${product.accentBorder}`}
                    >
                      <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                      <div>
                        <p className={`font-bold text-sm ${product.accentText}`}>{f.label}</p>
                        <p className="text-gray text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-8 pt-6 border-t border-silver">
                  <Link
                    to="/contact"
                    className="btn-secondary"
                  >
                    Get Early Access
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Be the First to Experience It
            </h2>
            <p className="text-white/55 mb-8">
              Register your interest and we'll notify you the moment AI Notes and LMS go live.
            </p>
            <Link to="/contact" className="btn-secondary">Get Early Access</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
