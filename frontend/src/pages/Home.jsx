import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEOHead'
import HeroSection from '../sections/HeroSection'
import VerticalsSection from '../sections/VerticalsSection'
import StatsSection from '../sections/StatsSection'

export default function Home() {
  return (
    <>
      <SEOHead />
      <HeroSection />
      <VerticalsSection />
      <StatsSection />

      {/* Mission Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <span className="badge-gold mb-4 inline-block">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy leading-tight">
            Technology that serves{' '}
            <span className="text-gold">people, not just profit</span>
          </h2>
          <p className="text-gray mt-6 text-lg leading-relaxed">
            We believe innovation should reach everyone — from a child in a rural school to a farmer in a remote village.
            That's why every product we build starts with a real human problem.
          </p>
          <Link to="/about" className="btn-primary mt-8 inline-flex">
            Read Our Story
          </Link>
        </div>
      </section>


    </>
  )
}
