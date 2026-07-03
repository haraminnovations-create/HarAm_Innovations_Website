import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import TeamSection from '../sections/TeamSection'

/* ─────────────── static data ──────────────────────────── */
const VALUES = [
  { icon: '💡', title: 'Innovation First',   desc: 'We challenge conventions and build what has never been built before.' },
  { icon: '🤝', title: 'Community Driven',   desc: 'Every product is co-created with the communities it serves.' },
  { icon: '🌱', title: 'Sustainable Impact', desc: 'Technology that creates lasting value for people and the planet.' },
  { icon: '🔒', title: 'Trust & Integrity',  desc: 'We build with transparency, and earn trust through every interaction.' },
]

const TIMELINE = [
  { date: 'May 16, 2023', title: 'HarAm Innovations Founded', icon: '🚀', color: '#2563EB', desc: 'The journey began on May 16, 2023 — born from a bold vision to build technology that truly reaches every corner of India.' },
  { date: '2024',         title: 'AI Notes Launched',          icon: '🧠', color: '#14B8A6', desc: 'Our first product — an AI-powered notes app helping students and professionals capture, organise, and access their ideas smarter.' },
  { date: '2024',         title: 'LMS Portal Launched',        icon: '📖', color: '#7C3AED', desc: 'A full Learning Management System launched — empowering educators and students with structured, accessible digital learning.' },
  { date: 'Coming Soon',  title: 'Race Portal',                icon: '🏁', color: '#F2C94C', desc: 'Our next big milestone — the Race Portal is on its way, bringing a new dimension of competitive and engaging digital experiences.' },
]

/* ─────────────── Timeline card ────────────────────────── */
function TCard({ event, side }) {
  return (
    <motion.div
      className="w-full max-w-xs"
      initial={{ opacity: 0, x: side === 'left' ? -48 : 48 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div
        className="bg-white rounded-2xl p-5 cursor-default"
        style={{
          boxShadow: `0 6px 28px rgba(0,0,0,0.07), inset 4px 0 0 ${event.color}`,
          border: '1px solid #F1F5F9',
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
            style={{ background: `${event.color}18` }}
          >
            {event.icon}
          </span>
          <span
            className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
            style={{ background: `${event.color}15`, color: event.color }}
          >
            {event.date}
          </span>
        </div>
        <h3 className="font-heading font-bold text-navy text-sm mb-1">{event.title}</h3>
        <p className="text-gray text-xs leading-relaxed">{event.desc}</p>
      </div>
    </motion.div>
  )
}

/* ─────────────── Milestone node ────────────────────────── */
function MilestoneNode({ color, icon, i }) {
  return (
    // outer: pop-in on scroll
    <motion.div
      className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center z-10"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 14, delay: i * 0.05 }}
    >
      {/* inner: continuous jive float — separate from whileInView */}
      <motion.div
        className="relative w-12 h-12 flex items-center justify-center"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
      >
        {/* pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: color }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
        />
        {/* orb */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-lg border-4 border-white shadow-xl relative z-10"
          style={{
            background: `linear-gradient(135deg, ${color}ee, ${color}88)`,
            boxShadow: `0 0 20px ${color}55, 0 4px 14px rgba(0,0,0,0.13)`,
          }}
        >
          {icon}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────── About page ────────────────────────────── */
export default function About() {
  return (
    <>
      <SEOHead title="About Us" description="Learn about HarAm Innovations — our story, mission, values, and the passionate team building products across Games, Research, and Education." />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge-teal mb-4 inline-block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              We Build Technology for the{' '}
              <span className="text-gold">Many, Not the Few</span>
            </h1>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Founded with a belief that technology should be accessible, purposeful, and transformative,
              HarAm Innovations creates products that touch millions of lives across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="badge-blue mb-3 inline-block">Mission</span>
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">Why We Exist</h2>
            <p className="text-gray leading-relaxed text-lg">
              Our mission is to harness the power of technology to solve pressing challenges in games, research,
              and education — making meaningful innovation available to every Indian, regardless of geography or economic background.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="badge-teal mb-3 inline-block">Vision</span>
            <h2 className="text-3xl font-heading font-bold text-navy mb-4">Where We're Going</h2>
            <p className="text-gray leading-relaxed text-lg">
              To be India's most trusted multi-domain technology company — where the best minds come to build
              products that shape the future of how people play, grow, and learn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-silver">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <span className="badge-gold mb-3 inline-block">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Journey ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="badge-blue mb-3 inline-block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              How We Got{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg,#2563EB,#14B8A6)' }}
              >
                Here
              </span>
            </h2>
            <p className="text-gray/50 mt-2 text-sm">From a dream to a growing movement</p>
          </div>

          <div className="relative" style={{ minHeight: '750px' }}>

            {/* gradient road */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5 rounded-full"
              style={{ background: 'linear-gradient(to bottom,#2563EB,#14B8A6 50%,#F2C94C)' }}
            />
            {/* dashes */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
              style={{
                background: 'repeating-linear-gradient(to bottom,rgba(255,255,255,0.75) 0,rgba(255,255,255,0.75) 12px,transparent 12px,transparent 26px)',
              }}
            />

            {/* milestone rows */}
            {TIMELINE.map((event, i) => {
              const topPct = (i / (TIMELINE.length - 1)) * 87
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className="absolute w-full flex items-center"
                  style={{ top: `${topPct}%` }}
                >
                  <div className="flex-1 flex justify-end pr-10">
                    {isLeft && <TCard event={event} side="left" />}
                  </div>

                  <MilestoneNode color={event.color} icon={event.icon} i={i} />

                  <div className="flex-1 flex justify-start pl-10">
                    {!isLeft && <TCard event={event} side="right" />}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Want to be Part of Our Story?</h2>
          <p className="text-white/60 mb-8">Join the team or partner with us to build something meaningful.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/careers" className="btn-secondary">View Open Roles</Link>
            <Link to="/contact" className="btn-ghost">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
