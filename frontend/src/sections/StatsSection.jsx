import { motion } from 'framer-motion'
import { STATS } from '../utils/constants'

export default function StatsSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-5xl font-heading font-bold text-gold">{stat.value}</p>
              <p className="text-white/60 mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
