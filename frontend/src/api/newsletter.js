import client from './client'

export const subscribeNewsletter = (email) => client.post('/api/newsletter', { email })
