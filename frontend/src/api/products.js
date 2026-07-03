import client from './client'

export const getProducts    = (category) => client.get('/api/products', { params: category ? { category } : {} })
export const getProductById = (id)       => client.get(`/api/products/${id}`)
