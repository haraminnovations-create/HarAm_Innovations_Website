import { Router } from 'express'
import { body } from 'express-validator'
import { contactLimiter } from '../middleware/rateLimiter.js'
import { validate } from '../middleware/validator.js'
import { submitContact } from '../controllers/contact.controller.js'

const router = Router()

const contactValidation = [
  body('name').trim().isLength({ min: 2, max: 100 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('mobile').trim().matches(/^[6-9]\d{9}$/),
  body('subject').trim().isLength({ min: 3, max: 200 }).escape(),
  body('message').trim().isLength({ min: 10, max: 5000 }).escape(),
]

router.post('/', contactLimiter, contactValidation, validate, submitContact)

export default router
