import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('heram-cookies-accepted')
    if (!accepted) setTimeout(() => setShow(true), 1500)
  }, [])

  const accept = () => {
    localStorage.setItem('heram-cookies-accepted', 'true')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-charcoal rounded-2xl shadow-2xl p-5 border border-white/10"
        >
          <p className="text-white/80 text-sm mb-4">
            We use cookies to improve your experience.{' '}
            <Link to="/privacy-policy" className="text-teal underline">Learn more</Link>.
          </p>
          <div className="flex gap-3">
            <button
              onClick={accept}
              className="flex-1 py-2 bg-teal text-navy font-semibold rounded-lg text-sm hover:bg-teal/90 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={() => setShow(false)}
              className="flex-1 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
