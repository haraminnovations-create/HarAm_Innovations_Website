import { Router } from 'express'
import { body } from 'express-validator'
import { newsletterLimiter } from '../middleware/rateLimiter.js'
import { validate } from '../middleware/validator.js'
import { subscribe } from '../controllers/newsletter.controller.js'

const router = Router()

router.post(
  '/',
  newsletterLimiter,
  [body('email').isEmail().normalizeEmail()],
  validate,
  subscribe,
)

export default router
