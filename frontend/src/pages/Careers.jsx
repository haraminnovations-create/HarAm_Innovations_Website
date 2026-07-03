import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEOHead'

const PILLARS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    color: 'bg-blue/10 text-blue',
    label: 'Games',
    desc: 'Immersive and educational gaming experiences that entertain while building real-world skills.',
    to: '/products/games',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-teal/10 text-teal',
    label: 'Research Papers',
    desc: 'Cutting-edge research publications covering AI, EdTech, gaming, and more.',
    to: '/products/agriculture',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'bg-yellow-400/10 text-yellow-500',
    label: 'Education',
    desc: 'AI-powered learning tools that make quality education accessible for every student and professional.',
    to: '/products/education',
  },
]

const VALUES = [
  { label: 'User-First',      desc: 'Every product decision starts and ends with the people who use it.' },
  { label: 'Real Impact',     desc: "We build for India's most underserved sectors — not just for profit." },
  { label: 'Crafted Quality', desc: 'We ship products that are polished, reliable, and genuinely useful.' },
  { label: 'Continuous Innovation', desc: 'We keep improving — every release is better than the last.' },
]

export default function Careers() {
  return (
    <>
      <SEOHead
        title="Our Mission"
        description="HarAm Innovations is focused on delivering innovative products across Games, Research, and Education."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-teal/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="badge-teal mb-5 inline-block">Our Focus</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              We're Here to <span className="text-teal">Deliver</span>,<br className="hidden sm:block" /> Not Just Promise
            </h1>
            <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              HarAm Innovations is a product company. Our entire energy goes into building and delivering
              meaningful products to people across Games, Research, and Education.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link to="/products" className="btn-primary">
                Explore Our Products
              </Link>
              <Link to="/contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-silver">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-14">
            <span className="badge-blue mb-3 inline-block">What We Do</span>
            <h2 className="section-title">Products Built for Real People</h2>
            <p className="section-subtitle mx-auto mt-3">
              We don't build for investors or awards — we build for the farmer, the student, and the player.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={p.to} className="card p-8 flex flex-col gap-5 h-full group hover:shadow-2xl transition-shadow duration-300">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${p.color}`}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-xl mb-2 group-hover:text-blue transition-colors">{p.label}</h3>
                    <p className="text-gray text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-blue text-sm font-semibold">
                    See Products
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="text-center mb-14">
            <span className="badge-teal mb-3 inline-block">Our Values</span>
            <h2 className="section-title">How We Think & Build</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-2xl border border-gray/15 hover:border-teal/30 hover:bg-teal/5 transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-teal mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-navy mb-1">{v.label}</h3>
                  <p className="text-gray text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-blue/20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge-gold mb-4 inline-block">Stay Tuned</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Want to Be Part of <span className="text-teal">Our Journey?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              We're currently focused on delivering our products. When we grow our team in the future,
              we'll announce it here. In the meantime, explore what we've built.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products" className="btn-secondary">
                Explore Products
              </Link>
              <Link to="/contact" className="btn-ghost">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
