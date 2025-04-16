"use client"

import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronLeft, Calendar, BookOpen, Quote } from "lucide-react"
import PageTransition from "../components/PageTransition"
import { poems, poemCategories } from "../data/poems"

export default function PoemPage() {
  const { poemId } = useParams<{ poemId: string }>()
  const poem = poems.find((p) => p.id === poemId)
  const category = poem ? poemCategories.find((c) => c.id === poem.category) : null

  if (!poem) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-3xl font-bold">Eilėraštis nerastas</h1>
        <Link to="/poezija" className="text-lt-green hover:underline mt-4 inline-block">
          Grįžti į poezijos skyrių
        </Link>
      </div>
    )
  }

  // Format poem content with line breaks
  const formattedContent = poem.content.split("\n").map((line, index) => (
    <p key={index} className={line.trim() === "" ? "h-4" : ""}>
      {line}
    </p>
  ))

  // Get related poems (same category, excluding current)
  const relatedPoems = poems.filter((p) => p.category === poem.category && p.id !== poem.id).slice(0, 3)

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <div className="relative h-[40vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block px-4 py-1 bg-lt-green/80 text-white rounded-full mb-4">
                {category?.name || "Poezija"}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">{poem.title}</h1>
              <div className="flex items-center justify-center gap-4 text-stone-200">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {poem.year}
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {poem.collection}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Poem Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Link
            to="/poezija"
            className="inline-flex items-center text-lt-green hover:text-lt-green/80 transition-colors mb-8"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Grįžti į poezijos skyrių
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Poem Text */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="poem-text space-y-4">{formattedContent}</div>
              </div>

              {/* Poem Background */}
              {poem.background && (
                <div className="bg-stone-50 rounded-lg p-8 border border-stone-200">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-lt-green flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-4 font-serif">Apie eilėraštį</h3>
                      <div className="text-stone-600 space-y-4">
                        {poem.background.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Category Info */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-3 font-serif">Kategorija</h3>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium inline-block mb-3 bg-${category?.color}/10 text-${category?.color}`}
                >
                  {category?.name}
                </div>
                <p className="text-stone-600 text-sm">{category?.description}</p>
              </div>

              {/* Related Poems */}
              {relatedPoems.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold mb-4 font-serif">Panašūs eilėraščiai</h3>
                  <div className="space-y-4">
                    {relatedPoems.map((relatedPoem) => (
                      <Link key={relatedPoem.id} to={`/poezija/${relatedPoem.id}`} className="block group">
                        <h4 className="font-bold group-hover:text-lt-green transition-colors">{relatedPoem.title}</h4>
                        <p className="text-sm text-stone-500">{relatedPoem.year}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Collection Info */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold mb-3 font-serif">Rinkinys</h3>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-lt-green" />
                  <span className="font-medium">{poem.collection}</span>
                </div>
                <p className="text-stone-600 text-sm">
                  Šis eilėraštis buvo išspausdintas mano poezijos rinkinyje "{poem.collection}", kuris yra vienas
                  svarbiausių lietuvių literatūros kūrinių.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
