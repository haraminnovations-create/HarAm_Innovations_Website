import { Router } from 'express'
import { query, param } from 'express-validator'
import { validate } from '../middleware/validator.js'
import { getProducts, getProductById } from '../controllers/products.controller.js'

const router = Router()

router.get(
  '/',
  [query('category').optional().isIn(['games', 'agriculture', 'education'])],
  validate,
  getProducts,
)

router.get(
  '/:id',
  [param('id').isUUID()],
  validate,
  getProductById,
)

export default router
