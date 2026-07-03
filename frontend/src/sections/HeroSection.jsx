import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero3D from './Hero3D'
import BrandLogo from '../components/BrandLogo'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

const verticals = [
  { icon: '🎮', label: 'Games',          sub: 'Mobile & Web',   border: 'border-blue/30', bg: 'bg-blue/10' },
  { icon: '📄', label: 'Research Papers', sub: 'IEEE & Journals', border: 'border-teal/30', bg: 'bg-teal/10' },
  { icon: '📚', label: 'Education',       sub: 'LMS & AI Notes', border: 'border-gold/30', bg: 'bg-gold/10' },
]

function ShowcaseCard() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
    >
      {/* glow behind the card */}
      <div className="absolute inset-0 -m-6 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

      {/* main card */}
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-72 shadow-2xl">

        {/* card header */}
        <div className="flex items-center gap-3 mb-5">
          <BrandLogo size={36} />
          <div>
            <p className="text-white text-sm font-semibold">HarAm Platform</p>
            <p className="text-white/40 text-xs">3 Active Verticals</p>
          </div>
          <span className="ml-auto px-2 py-0.5 bg-teal/20 text-teal text-xs rounded-full font-medium">Live</span>
        </div>

        {/* verticals list */}
        <div className="flex flex-col gap-2.5 mb-5">
          {verticals.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12 }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${v.border} ${v.bg}`}
            >
              <span className="text-lg">{v.icon}</span>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{v.label}</p>
                <p className="text-white/40 text-xs">{v.sub}</p>
              </div>
              <svg className="w-3.5 h-3.5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* stats row */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
          {[
            { val: '100+', lbl: 'Users'    },
            { val: '3',    lbl: 'Products' },
            { val: '3',    lbl: 'Domains'  },
          ].map((s) => (
            <div key={s.lbl} className="flex flex-col items-center">
              <span className="text-gold font-heading font-bold text-base">{s.val}</span>
              <span className="text-white/30 text-[10px] mt-0.5">{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* floating badge — top right */}
      <motion.div
        className="absolute -top-3 -right-3 px-3 py-1 bg-teal text-white text-[11px] font-semibold rounded-full shadow-lg"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✦ Growing Fast
      </motion.div>

      {/* floating badge — bottom left */}
      <motion.div
        className="absolute -bottom-3 -left-3 px-3 py-1 bg-gold text-navy text-[11px] font-bold rounded-full shadow-lg"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        🚀 India-First
      </motion.div>
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ background: '#030a12', height: '90vh' }}
    >
      {/* 3D particle wave — full background */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* gradient: heavy left so text is clear, fades to transparent right */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* content: left text + right card */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 sm:px-12 flex items-center justify-between gap-12">

        {/* ── LEFT: text ── */}
        <div className="flex flex-col gap-5 max-w-lg">

          <motion.span
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="w-fit px-4 py-1.5 rounded-full border border-teal/40 bg-teal/10 text-teal text-xs font-semibold tracking-widest uppercase"
          >
            HarAm Innovations
          </motion.span>

          <motion.h1
            variants={fadeUp(0.12)}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight"
          >
            Building Intelligent<br />
            Solutions for a{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #F2C94C, #14B8A6)' }}
            >
              Better Tomorrow
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.22)}
            initial="hidden"
            animate="show"
            className="text-white/55 text-base leading-relaxed"
          >
            From immersive games and publication-ready research papers to smart education platforms —
            HarAm Innovations is building the future of digital India.
          </motion.p>

          <motion.div
            variants={fadeUp(0.32)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 mt-1"
          >
            <Link to="/products" className="btn-primary px-7 py-3 text-sm">
              Explore Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="px-7 py-3 text-sm border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

      </div>

      {/* scroll cue */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/30 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
