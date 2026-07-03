import { useParams, Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { BLOG_POSTS } from '../utils/constants'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-heading font-bold text-navy mb-4">Post Not Found</h1>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    )
  }

  const icon = post.category === 'Research Papers' ? '📄' : post.category === 'Education' ? '📚' : post.category === 'Games' ? '🎮' : '📰'

  return (
    <>
      <SEOHead title={post.title} description={post.excerpt} />

      <section className="pt-32 pb-12 bg-navy">
        <div className="max-w-3xl mx-auto container-padding">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-teal text-sm mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>
          <span className="badge-teal mb-4 inline-block">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 mt-4 text-white/50 text-sm">
            <span>By {post.author}</span>
            <span>·</span>
            <span>{new Date(post.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto container-padding">
          <div className="h-64 bg-gradient-to-br from-navy to-charcoal rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">{icon}</span>
          </div>
          <div className="prose prose-lg max-w-none text-charcoal">
            <p className="text-xl text-gray leading-relaxed mb-6">{post.excerpt}</p>
            <p className="leading-relaxed mb-4">
              This is placeholder content for the blog post. In the full implementation, this content
              will be fetched from the Supabase database using the blog API endpoint.
            </p>
            <p className="leading-relaxed mb-4">
              The content supports full Markdown formatting, enabling rich text with headers, lists,
              images, code blocks, and more. Editors can create and manage posts through the admin dashboard.
            </p>
            <h2 className="text-2xl font-heading font-bold text-navy mt-8 mb-4">Key Takeaways</h2>
            <ul className="space-y-2 text-gray">
              <li className="flex items-start gap-2"><span className="text-teal mt-1">✓</span> Technology is transforming this sector rapidly</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-1">✓</span> HarAm Innovations is at the forefront of this change</li>
              <li className="flex items-start gap-2"><span className="text-teal mt-1">✓</span> Real impact is being measured on the ground</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="py-12 bg-silver">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <h2 className="text-2xl font-heading font-bold text-navy mb-4">Stay Updated</h2>
          <p className="text-gray mb-6">Get the latest news and insights delivered to your inbox.</p>
          <Link to="/contact" className="btn-primary">Subscribe to Newsletter</Link>
        </div>
      </section>
    </>
  )
}
