import rateLimit from 'express-rate-limit'

export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many submissions. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
})

export const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message: { success: false, message: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

export const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: { success: false, message: 'Rate limit exceeded.' },
  standardHeaders: true,
  legacyHeaders: false,
})
