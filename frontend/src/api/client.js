import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
})

client.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err.response?.data || { message: 'Network error. Please try again.' }),
)

export default client
