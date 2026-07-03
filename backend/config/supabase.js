import { createClient } from '@supabase/supabase-js'

let _client = null

function getClient() {
  if (!_client) {
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_KEY
    if (!url || url === 'https://your-project.supabase.co') {
      throw new Error('SUPABASE_URL not configured in .env')
    }
    if (!key || key === 'your-service-role-key') {
      throw new Error('SUPABASE_SERVICE_KEY not configured in .env')
    }
    _client = createClient(url, key, { auth: { persistSession: false } })
  }
  return _client
}

export default getClient
