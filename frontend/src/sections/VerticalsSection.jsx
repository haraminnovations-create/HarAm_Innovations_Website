import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ─── EDIT YOUR CONTENT HERE ──────────────────────────────────────────────────
const SECTION = {
  badge:   'What We Build',
  heading: 'Three Verticals, One Mission',
  subtext: 'We build technology that creates real impact — in gaming, research, and education.',
}

const VERTICALS = [
  {
    number:      '01',
    emoji:       '🎮',
    title:       'Games',
    heading:     'Games',
    tagline:     'Play. Learn. Grow.',
    description: 'We design and develop engaging, high-performance games for mobile, web, and desktop platforms. From educational and simulation games to multiplayer and AI-powered experiences, we transform innovative ideas into immersive gaming solutions.',
    highlights:  ['Cross-Platform Games', 'Multiplayer Experiences', 'AI-Powered Gameplay', 'Performance & Analytics'],
    path:        '/products/games',
    gradient:    'from-blue to-navy',
    border:      'hover:border-blue',
    badgeCls:    'bg-blue/10 text-blue',
    btnCls:      'bg-blue hover:bg-navy text-white',
    checkCls:    'bg-blue/10 text-blue',
  },
  {
    number:      '02',
    emoji:       '📄',
    title:       'Research Papers',
    heading:     'Research Paper',
    tagline:     'Research • Innovation • Publication',
    description: 'We help students, researchers, and professionals convert innovative ideas into publication-ready research papers. From topic selection and implementation to documentation and journal formatting — complete research support aligned with international publishing standards.',
    highlights:  ['IEEE Conference Papers', 'Taylor & Francis Journal Format', 'Plagiarism-Free Research', 'Publication Guidance'],
    path:        '/products/agriculture',
    gradient:    'from-teal to-navy',
    border:      'hover:border-teal',
    badgeCls:    'bg-teal/10 text-teal',
    btnCls:      'bg-teal hover:bg-navy text-white',
    checkCls:    'bg-teal/10 text-teal',
  },
  {
    number:      '03',
    emoji:       '📚',
    title:       'Education',
    heading:     'Education',
    tagline:     'Every Student. Every Classroom.',
    description: 'We are building modern educational solutions that make learning simpler, more engaging, and accessible. Our platforms focus on interactive learning, assessments, student management, and AI-powered educational tools for learners and educators.',
    highlights:  ['Learning Management Systems', 'AI Study Assistant', 'Online Assessments', 'Student Progress Tracking'],
    path:        '/products/education',
    gradient:    'from-gold to-yellow-400',
    border:      'hover:border-gold',
    badgeCls:    'bg-gold/20 text-yellow-700',
    btnCls:      'bg-gold hover:bg-yellow-400 text-navy',
    checkCls:    'bg-gold/20 text-yellow-700',
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function VerticalsSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-silver to-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue text-sm font-semibold tracking-wide mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            {SECTION.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-5">
            {SECTION.heading}
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto leading-relaxed">
            {SECTION.subtext}
          </p>
        </motion.div>

        {/* Cards */}
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
              <h3 className="text-2xl font-extrabold text-navy mb-2">{v.heading}</h3>

              {/* Tagline pill */}
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4 ${v.badgeCls}`}>
                {v.tagline}
              </span>

              {/* Description */}
              <p className="text-gray leading-relaxed mb-6 flex-1">{v.description}</p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-8">
                {v.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-sm text-charcoal">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${v.checkCls}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
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
  )
}
