import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" />
      <div className="min-h-screen bg-silver flex items-center justify-center container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="text-8xl mb-6">🔍</div>
          <h1 className="text-6xl font-heading font-bold text-navy mb-4">404</h1>
          <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">Page Not Found</h2>
          <p className="text-gray mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">Go Home</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </motion.div>
      </div>
    </>
  )
}
