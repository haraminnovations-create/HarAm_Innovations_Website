import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEOHead'
import { BLOG_POSTS } from '../utils/constants'

const CATEGORIES = ['All', 'Research Papers', 'Education', 'Games', 'News']

function BlogCard({ post }) {
  const icon = post.category === 'Research Papers' ? '📄' : post.category === 'Education' ? '📚' : post.category === 'Games' ? '🎮' : '📰'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card group overflow-hidden flex flex-col"
    >
      <div className="h-44 bg-gradient-to-br from-navy to-charcoal flex items-center justify-center">
        <span className="text-6xl">{icon}</span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge-blue">{post.category}</span>
          <span className="text-gray/60 text-xs">
            {new Date(post.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>
        <h2 className="font-heading font-bold text-navy text-lg leading-snug group-hover:text-blue transition-colors mb-2">
          {post.title}
        </h2>
        <p className="text-gray text-sm leading-relaxed flex-1">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 mt-4 text-blue font-semibold text-sm hover:gap-3 transition-all"
        >
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory)

  return (
    <>
      <SEOHead
        title="Blog & News"
        description="Insights, announcements, and stories from HarAm Innovations across games, research, and education."
      />

      <section className="pt-32 pb-16 bg-navy">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <span className="badge-teal mb-4 inline-block">Blog & News</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Stories, Insights & <span className="text-teal">Announcements</span>
          </h1>
          <p className="mt-4 text-white/60 text-lg">
            Stay updated with what's happening at HarAm Innovations and across our three verticals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-silver">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue text-white shadow-md'
                    : 'bg-white text-charcoal border border-gray/20 hover:border-blue hover:text-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray">No posts found in this category yet.</div>
          )}
        </div>
      </section>
    </>
  )
}
