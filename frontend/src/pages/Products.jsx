import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEOHead'

const VERTICALS = [
  {
    number:   '01',
    emoji:    '🎮',
    title:    'Games',
    tagline:  'Play. Learn. Grow.',
    desc:     'Immersive, educational games that make learning fun for all ages — from farming simulations to competitive quiz platforms.',
    features: ['Multiplayer Support', 'Offline Mode', 'Age-appropriate Content', 'Progress Analytics'],
    path:     '/products/games',
    gradient: 'from-blue to-navy',
    border:   'hover:border-blue',
    badgeCls: 'bg-blue/10 text-blue',
    btnCls:   'bg-blue hover:bg-navy text-white',
    checkCls: 'bg-blue/10 text-blue',
    topBar:   'bg-blue',
  },
  {
    number:   '02',
    emoji:    '📄',
    title:    'Research Papers',
    tagline:  'Knowledge. Insights. Impact.',
    desc:     'Cutting-edge research publications covering AI, AgriTech, EdTech, and gaming — driving innovation through evidence-based insights.',
    features: ['Peer-reviewed Publications', 'Open Access', 'Cross-domain Research', 'Industry Collaborations'],
    path:     '/products/agriculture',
    gradient: 'from-teal to-navy',
    border:   'hover:border-teal',
    badgeCls: 'bg-teal/10 text-teal',
    btnCls:   'bg-teal hover:bg-navy text-navy hover:text-white',
    checkCls: 'bg-teal/10 text-teal',
    topBar:   'bg-teal',
  },
  {
    number:   '03',
    emoji:    '📚',
    title:    'Education',
    tagline:  'Every Student. Every Classroom.',
    desc:     'EdTech platforms that deliver quality learning to every student — from urban classrooms to rural learning centres.',
    features: ['AI Notes App', 'LMS Platform', 'Offline-first', 'Multi-language'],
    path:     '/products/education',
    gradient: 'from-gold to-yellow-400',
    border:   'hover:border-gold',
    badgeCls: 'bg-gold/20 text-yellow-700',
    btnCls:   'bg-gold hover:bg-yellow-400 text-navy',
    checkCls: 'bg-gold/20 text-yellow-700',
    topBar:   'bg-gold',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const cardAnim = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Products() {
  return (
    <>
      <SEOHead
        title="Products"
        description="Explore HarAm Innovations' product portfolio — Games, Research Papers, and Education. All coming soon."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-teal/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="badge-teal mb-5 inline-block">Our Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Three Verticals, <span className="text-teal">One Mission</span>
            </h1>
            <p className="mt-5 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              We build technology that creates real impact — in gaming, research, and education.
              Every product is in active development.
            </p>
            <div className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              All products launching soon
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cards — exact same design as home page */}
      <section className="relative py-24 bg-gradient-to-b from-silver to-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto container-padding">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {VERTICALS.map((v) => (
              <motion.div
                key={v.title}
                variants={cardAnim}
                className={`group relative bg-white rounded-3xl border-2 border-silver ${v.border} p-8 flex flex-col shadow-sm hover:shadow-2xl transition-all duration-300`}
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-xs font-bold text-silver font-mono tracking-widest">
                  {v.number}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {v.emoji}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-navy mb-2">{v.title}</h3>

                {/* Tagline pill */}
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4 ${v.badgeCls}`}>
                  {v.tagline}
                </span>

                {/* Description */}
                <p className="text-gray leading-relaxed mb-6 flex-1">{v.desc}</p>

                {/* Features checklist */}
                <ul className="space-y-2.5 mb-8">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-charcoal">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${v.checkCls}`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Coming Soon badge */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold px-3 py-1 bg-gold/10 text-yellow-700 border border-gold/30 rounded-full uppercase tracking-widest">
                    Coming Soon
                  </span>
                </div>

                {/* CTA */}
                <Link
                  to={v.path}
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${v.btnCls}`}
                >
                  Explore {v.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="badge-gold mb-4 inline-block">Early Access</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Want to Be First in Line?
            </h2>
            <p className="text-white/55 text-lg mb-8 leading-relaxed">
              Register your interest and we'll reach out the moment our products go live.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-secondary">Get Early Access</Link>
              <Link to="/about" className="btn-ghost">Learn About Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
