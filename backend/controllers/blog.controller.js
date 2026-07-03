import getClient from '../config/supabase.js'

export const getBlogPosts = async (req, res, next) => {
  try {
    const supabase = getClient()
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, category, author, published_at, thumbnail_url')
      .eq('is_published', true)
      .order('published_at', { ascending: false })

    if (error) throw error
    res.json({ success: true, data })
  } catch (err) {
    next(err)
  }
}

export const getBlogPost = async (req, res, next) => {
  try {
    const supabase = getClient()
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', req.params.slug)
      .eq('is_published', true)
      .single()

    if (error || !data) {
      return res.status(404).json({ success: false, message: 'Post not found' })
    }

    res.json({ success: true, data })
  } catch (err) {
    next(err)
  }
}
