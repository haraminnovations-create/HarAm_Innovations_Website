import getClient from '../config/supabase.js'

export const getProducts = async (req, res, next) => {
  try {
    const { category } = req.query
    const supabase = getClient()
    let query = supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false })

    if (category) query = query.eq('category', category)

    const { data, error } = await query
    if (error) throw error

    res.json({ success: true, data })
  } catch (err) {
    next(err)
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const supabase = getClient()
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', req.params.id)
      .eq('is_active', true)
      .single()

    if (error || !data) {
      return res.status(404).json({ success: false, message: 'Product not found' })
    }

    res.json({ success: true, data })
  } catch (err) {
    next(err)
  }
}
