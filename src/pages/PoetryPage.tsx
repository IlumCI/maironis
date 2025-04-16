"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Book, Filter, Search } from "lucide-react"
import PageTransition from "../components/PageTransition"
import { poems, poemCategories } from "../data/poems"

export default function PoetryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPoems = poems.filter((poem) => {
    const matchesCategory = selectedCategory ? poem.category === selectedCategory : true
    const matchesSearch = searchQuery
      ? poem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        poem.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

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
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">Poezija</h1>
              <p className="text-xl text-stone-200 max-w-2xl mx-auto">
                Mano eilėraščiai, kuriuose atsispindi meilė Lietuvai, jos gamtai ir istorijai
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Filters and Search */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-lt-green" />
                <h2 className="text-xl font-bold">Kategorijos</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === null
                      ? "bg-lt-green text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  Visos
                </button>
                {poemCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? `bg-${category.color} text-white`
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-lt-green" />
                <h2 className="text-xl font-bold">Paieška</h2>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ieškoti eilėraščių..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lt-green"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
              </div>
            </div>
          </div>

          {/* Selected Category Description */}
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-stone-100 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">{poemCategories.find((c) => c.id === selectedCategory)?.name}</h3>
              <p className="text-stone-600">{poemCategories.find((c) => c.id === selectedCategory)?.description}</p>
            </motion.div>
          )}

          {/* Poems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPoems.map((poem, index) => {
              const category = poemCategories.find((c) => c.id === poem.category)
              return (
                <motion.article
                  key={poem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4"
                  style={{ borderColor: `var(--${category?.color})` }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-${category?.color}/10 text-${category?.color}`}
                      >
                        {category?.name}
                      </span>
                      <span className="text-sm text-stone-500">{poem.year}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 font-serif">{poem.title}</h2>
                    <p className="text-stone-600 mb-4">{poem.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-stone-500 italic">Iš rinkinio "{poem.collection}"</span>
                      <Link
                        to={`/poezija/${poem.id}`}
                        className="inline-flex items-center text-lt-green hover:text-lt-green/80 transition-colors"
                      >
                        <Book className="w-4 h-4 mr-1" />
                        Skaityti
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* No Results */}
          {filteredPoems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">Eilėraščių nerasta</h3>
              <p className="text-stone-600">
                Pabandykite pakeisti paieškos kriterijus arba{" "}
                <button
                  onClick={() => {
                    setSelectedCategory(null)
                    setSearchQuery("")
                  }}
                  className="text-lt-green hover:underline"
                >
                  peržiūrėti visus eilėraščius
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}
