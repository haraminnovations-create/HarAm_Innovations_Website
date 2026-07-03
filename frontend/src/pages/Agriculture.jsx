import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const SERVICES = [
  {
    number: '01',
    emoji: '📖',
    title: 'Book Chapter',
    desc: 'Well-structured, academically written book chapters tailored to your research domain and university guidelines.',
    color: 'bg-teal/10 text-teal border-teal/20',
    dot: 'bg-teal',
  },
  {
    number: '02',
    emoji: '📝',
    title: 'Report / Thesis',
    desc: 'Complete project reports and thesis documents written with proper formatting, references, and analysis.',
    color: 'bg-blue/10 text-blue border-blue/20',
    dot: 'bg-blue',
  },
  {
    number: '03',
    emoji: '🎓',
    title: 'Conference Paper',
    desc: 'Research papers ready for submission to conferences — properly structured with abstract, methodology, and results.',
    color: 'bg-teal/10 text-teal border-teal/20',
    dot: 'bg-teal',
  },
  {
    number: '04',
    emoji: '✅',
    title: 'Plagiarism Report',
    desc: 'Detailed plagiarism check report ensuring your work is 100% original and ready for academic submission.',
    color: 'bg-blue/10 text-blue border-blue/20',
    dot: 'bg-blue',
  },
  {
    number: '05',
    emoji: '💡',
    title: 'Project Explanation',
    desc: 'Clear, step-by-step walkthrough of your project — how to run, configure, and present it with full confidence.',
    color: 'bg-teal/10 text-teal border-teal/20',
    dot: 'bg-teal',
  },
]

const PROMISES = [
  { emoji: '💯', label: '100% Genuine',    desc: 'Every project we deliver is authentic, original, and built from scratch.' },
  { emoji: '⏰', label: 'On-Time Delivery', desc: 'We respect your deadlines — your project is delivered when promised, every time.' },
  { emoji: '🔒', label: 'Plagiarism-Free',  desc: 'All documents are checked and certified original before delivery.' },
  { emoji: '🤝', label: 'Full Support',     desc: 'We guide you through the project from start to final presentation.' },
]

export default function ResearchPapers() {
  return (
    <>
      <SEOHead
        title="Research Papers & Project Delivery"
        description="HarAm Innovations provides final year project delivery — book chapters, reports, thesis, conference papers, and plagiarism reports."
      />

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-teal/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-teal/15 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="w-16 h-1.5 bg-teal rounded-full mx-auto mb-6" />
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal/15 text-teal text-xs font-bold uppercase tracking-widest rounded-full border border-teal/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Final Year Project Delivery
            </span>
            <div className="text-5xl mb-3">📄</div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Knowledge. <span className="text-teal">Insights.</span> Impact.
            </h1>
            <p className="mt-5 text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
              We deliver complete final year project documentation — from book chapters to conference papers —
              with <span className="text-gold font-semibold">100% genuine work</span> and on-time delivery, guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-navy font-semibold rounded-lg hover:bg-teal/90 transition-all duration-200 shadow-md">
                Get Your Project Done
              </Link>
              <Link to="/products" className="btn-ghost">All Products</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-gold py-4">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-navy text-sm font-bold">
            <span className="flex items-center gap-2">✅ 100% Genuine Projects</span>
            <span className="hidden sm:block w-px h-5 bg-navy/20" />
            <span className="flex items-center gap-2">⏰ Delivered On Time</span>
            <span className="hidden sm:block w-px h-5 bg-navy/20" />
            <span className="flex items-center gap-2">🔒 Plagiarism Free</span>
            <span className="hidden sm:block w-px h-5 bg-navy/20" />
            <span className="flex items-center gap-2">💡 Full Project Explanation</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-silver">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-teal rounded-full mx-auto mb-4" />
            <span className="badge-teal mb-3 inline-block">What We Provide</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto mt-2">
              Everything you need for your final year project — delivered with quality and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-1.5 bg-teal w-full" />
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{s.emoji}</div>
                    <span className="text-xs font-bold text-gray/40 font-mono tracking-widest">{s.number}</span>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-2 group-hover:text-teal transition-colors">{s.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-navy rounded-2xl shadow-md p-7 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
              <div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-heading font-bold text-white text-xl mb-2">Ready to Get Started?</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Contact us now and get your final year project delivered with full documentation and explanation.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center justify-center gap-2 py-3 px-5 bg-teal text-navy font-bold rounded-xl hover:bg-teal/90 transition-all text-sm"
              >
                Contact Us Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our promises */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROMISES.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-silver rounded-2xl p-6 text-center hover:border-teal/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {p.emoji}
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{p.label}</h3>
                <p className="text-gray text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/15 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Need Your Project Delivered?
            </h2>
            <p className="text-white/55 mb-8">
              Reach out today and we'll get your final year project done — on time, every time.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-navy font-semibold rounded-lg hover:bg-teal/90 transition-all duration-200 shadow-md">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
