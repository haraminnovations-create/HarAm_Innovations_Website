import { Router } from 'express'
import { body } from 'express-validator'
import { validate } from '../middleware/validator.js'
import { register, login, forgotPassword, resetPassword } from '../controllers/auth.controller.js'

const router = Router()

router.post('/register',
  [body('name').trim().isLength({ min: 2 }), body('email').isEmail().normalizeEmail(), body('password').isLength({ min: 6 })],
  validate, register
)

router.post('/login',
  [body('email').isEmail().normalizeEmail(), body('password').notEmpty()],
  validate, login
)

router.post('/forgot-password',
  [body('email').isEmail().normalizeEmail()],
  validate, forgotPassword
)

router.post('/reset-password',
  [body('token').notEmpty(), body('password').isLength({ min: 6 })],
  validate, resetPassword
)

export default router
