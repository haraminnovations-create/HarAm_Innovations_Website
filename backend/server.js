import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
config({ path: join(dirname(fileURLToPath(import.meta.url)), '.env') })
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { apiLimiter } from './middleware/rateLimiter.js'
import errorHandler from './middleware/errorHandler.js'

import contactRoutes    from './routes/contact.routes.js'
import newsletterRoutes from './routes/newsletter.routes.js'
import productsRoutes   from './routes/products.routes.js'
import blogRoutes       from './routes/blog.routes.js'

const app  = express()
const PORT = process.env.PORT || 5001

// Security
app.use(helmet())
app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true)
    const allowed = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(',').map(o => o.trim())
    const isDev = process.env.NODE_ENV !== 'production'
    const isLocalNetwork = /^http:\/\/(localhost|127\.0\.0\.1|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+)(:\d+)?$/.test(origin)
    if (allowed.includes(origin) || (isDev && isLocalNetwork)) return cb(null, true)
    cb(new Error('Not allowed by CORS'))
  },
  credentials: true,
}))

// Body parsing
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Global rate limit
app.use('/api/', apiLimiter)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'HarAm Innovations API is running', timestamp: new Date().toISOString() })
})

// Routes
app.use('/api/contact',    contactRoutes)
app.use('/api/newsletter', newsletterRoutes)
app.use('/api/products',   productsRoutes)
app.use('/api/blog',       blogRoutes)

// 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.method} ${req.path} not found` })
})

// Error handler
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`\n🚀 HarAm Innovations API running on port ${PORT}`)
  console.log(`   Health: http://localhost:${PORT}/api/health`)
  console.log(`   Env:    ${process.env.NODE_ENV || 'development'}\n`)
})
