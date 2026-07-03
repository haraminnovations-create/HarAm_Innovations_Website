import client from './client'

export const submitContact = (data) => client.post('/api/contact', data)
