import { motion } from 'framer-motion'

export default function Card({ className = '', children, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      transition={{ duration: 0.2 }}
      className={`card ${className}`}
    >
      {children}
    </motion.div>
  )
}
