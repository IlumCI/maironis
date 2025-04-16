"use client"

import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import PageTransition from "../components/PageTransition"
import { createSafeHTML } from "../utils/security"

// Import full blog posts data
// We'll reuse the same data structure from BlogPage to keep consistency
export interface BlogPost {
  id: string
  date: string
  title: string
  excerpt: string
  image: string
  category: string
  content?: string
}

// This imports the blog posts from BlogPage
// In a real application, you might want to move this to a separate file
// that both components can import
import { blogPosts } from "./BlogPage"

export default function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>()
  const post = blogPosts.find((post) => post.id === postId)

  if (!post) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-3xl font-bold">Įrašas nerastas</h1>
        <Link to="/blog" className="text-lt-green hover:underline mt-4 inline-block">
          Grįžti į dienoraštį
        </Link>
      </div>
    )
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <div className="relative h-[50vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${post.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block px-4 py-1 bg-lt-yellow/80 text-white rounded-full mb-4">{post.category}</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">{post.title}</h1>
              <p className="text-lg text-stone-200 italic">{post.date}</p>
            </motion.div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Link
            to="/blog"
            className="inline-flex items-center text-lt-green hover:text-lt-green/80 transition-colors mb-8"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Grįžti į dienoraštį
          </Link>

          <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-stone-900 prose-p:text-stone-600 prose-strong:text-stone-800">
            {post.content ? (
              <div dangerouslySetInnerHTML={createSafeHTML(post.content)} />
            ) : (
              <p className="text-lg text-stone-600">{post.excerpt}</p>
            )}
          </article>

          <div className="mt-12 pt-8 border-t border-stone-200">
            <h3 className="text-xl font-bold mb-4">Skaitykite daugiau</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="group flex gap-4 items-start">
                    <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-lt-green transition-colors">{relatedPost.title}</h4>
                      <p className="text-sm text-stone-500">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
