import getClient from '../config/supabase.js'

export const subscribe = async (req, res, next) => {
  try {
    const { email } = req.body
    const supabase = getClient()

    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('id, is_active')
      .eq('email', email)
      .single()

    if (existing?.is_active) {
      return res.status(200).json({ success: true, message: 'You are already subscribed!' })
    }

    if (existing && !existing.is_active) {
      await supabase
        .from('newsletter_subscribers')
        .update({ is_active: true })
        .eq('email', email)
      return res.status(200).json({ success: true, message: 'Welcome back! You\'ve been re-subscribed.' })
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])

    if (error) throw error

    res.status(201).json({ success: true, message: 'Thanks for subscribing! Stay tuned for updates.' })
  } catch (err) {
    next(err)
  }
}
