import client from './client'

export const getBlogPosts = () => client.get('/api/blog')
export const getBlogPost  = (slug) => client.get(`/api/blog/${slug}`)
