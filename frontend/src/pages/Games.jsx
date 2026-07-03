import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const COMING = [
  { title: 'FarmQuest',   emoji: '🚜', desc: 'An immersive farming simulation that teaches real agricultural concepts through fun gameplay.', tags: ['Simulation', 'Strategy', 'Educational'] },
  { title: 'BrainBattle', emoji: '🧠', desc: 'A competitive quiz game covering science, mathematics, and general knowledge for all ages.', tags: ['Quiz', 'Multiplayer', 'Learning'] },
  { title: 'EcoBuilder',  emoji: '🌿', desc: 'Build and manage sustainable ecosystems while learning about environmental conservation.', tags: ['Puzzle', 'Strategy', 'Environment'] },
]

const WHY = [
  { label: 'Educational Focus',   desc: 'Every game is built around a real learning objective — skills, not just entertainment.' },
  { label: 'Cross-Platform',      desc: 'Play on mobile, tablet, or desktop. iOS and Android ready from day one.' },
  { label: 'Progress Tracking',   desc: 'Parents and teachers get real-time insight into learning outcomes.' },
  { label: 'Safe for All Ages',   desc: 'Age-appropriate content, parental controls, and completely ad-free.' },
]

export default function Games() {
  return (
    <>
      <SEOHead
        title="Games – Coming Soon"
        description="HarAm Innovations is building immersive, educational games. Stay tuned for our launch."
      />

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-blue/20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-blue/15 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            {/* Blue top accent bar */}
            <div className="w-16 h-1.5 bg-blue rounded-full mx-auto mb-6" />
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue/15 text-blue text-xs font-bold uppercase tracking-widest rounded-full border border-blue/30 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
              Coming Soon
            </span>
            <div className="text-5xl mb-3">🎮</div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Games That <span className="text-blue">Teach</span> &{' '}
              <span className="text-gold">Inspire</span>
            </h1>
            <p className="mt-5 text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
              We believe play is the most powerful vehicle for learning. Our games are in active
              development — genuinely fun and secretly educational.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <Link to="/contact" className="btn-primary">Notify Me at Launch</Link>
              <Link to="/products" className="btn-ghost">All Products</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming games */}
      <section className="py-20 bg-silver">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-blue rounded-full mx-auto mb-4" />
            <span className="badge-blue mb-3 inline-block">In Development</span>
            <h2 className="section-title">What's Coming</h2>
            <p className="section-subtitle mx-auto mt-2">
              A sneak peek at the games we're actively building right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMING.map((game, i) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Blue top band */}
                <div className="h-1.5 bg-blue w-full" />
                <div className="bg-navy/5 h-44 flex items-center justify-center relative">
                  <span className="text-7xl opacity-25">{game.emoji}</span>
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-3 py-1 bg-blue/10 text-blue border border-blue/25 rounded-full uppercase tracking-widest">
                    Coming Soon
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">{game.title}</h3>
                  <p className="text-gray text-sm leading-relaxed mb-4">{game.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <span key={tag} className="badge bg-blue/8 text-blue border border-blue/20 text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
            <h2 className="section-title">Why Our Games Will Stand Out</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY.map((w, i) => (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-2xl border border-silver hover:border-blue/20 hover:bg-blue/3 transition-all duration-200"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-blue mt-1.5 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-navy mb-1">{w.label}</h3>
                  <p className="text-gray text-sm leading-relaxed">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue/15 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto container-padding text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Want to Know When We Launch?
            </h2>
            <p className="text-white/55 mb-8">
              Drop us a message and we'll reach out as soon as our first game goes live.
            </p>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
