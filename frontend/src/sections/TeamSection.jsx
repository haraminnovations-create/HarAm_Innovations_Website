import { motion } from 'framer-motion'
import { TEAM } from '../utils/constants'

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="badge-teal mb-3 inline-block">Our People</span>
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle mx-auto text-center">
            Passionate innovators building technology that matters.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card p-6 text-center group"
            >
              {member.avatar ? (
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover object-top mx-auto mb-4 border-2 border-silver shadow-md"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-navy to-teal mx-auto mb-4 flex items-center justify-center text-3xl">
                  👤
                </div>
              )}
              <h3 className="font-heading font-bold text-navy text-lg">{member.name}</h3>
              <p className="text-blue text-sm font-medium mt-1 mb-3">{member.role}</p>
              <p className="text-gray text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
