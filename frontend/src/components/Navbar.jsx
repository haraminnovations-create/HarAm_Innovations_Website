import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../utils/constants'
import BrandLogo from './BrandLogo'

function ChevronDown() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isHome = location.pathname === '/'
  const navBg = scrolled || !isHome
    ? 'bg-navy/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <BrandLogo size={70} />
            <div className="hidden sm:flex flex-col leading-none gap-0.5">
              <span className="font-heading font-bold text-white text-base tracking-tight">HarAm</span>
              <span className="text-teal text-[10px] font-semibold tracking-widest uppercase">Innovations</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((o) => !o)}
                    className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all"
                  >
                    {link.label} <ChevronDown />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-2 left-0 w-48 bg-white rounded-xl shadow-xl border border-silver overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              `block px-4 py-3 text-charcoal hover:bg-silver hover:text-blue font-medium transition-colors ${isActive ? 'text-blue bg-silver' : ''}`
                            }
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 font-medium rounded-lg transition-all ${
                      isActive
                        ? 'text-teal bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="inline-flex items-center px-5 py-2.5 bg-gold text-navy font-semibold rounded-lg text-sm hover:bg-gold/90 transition-all duration-200 shadow-md">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <div className="container-padding py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-4 py-2 text-gray text-xs font-semibold uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-6 py-2 rounded-lg font-medium transition-colors ${
                            isActive ? 'text-teal bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg font-medium transition-colors ${
                        isActive ? 'text-teal bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <Link to="/contact" className="mt-3 flex justify-center py-2.5 bg-gold text-navy font-semibold rounded-lg text-sm hover:bg-gold/90 transition-colors">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
