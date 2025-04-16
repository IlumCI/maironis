import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'jaunyste-betygaloje',
    date: '1875',
    title: 'Jaunystė Betygaloje',
    excerpt: 'Mano pirmieji žingsniai poezijos link ir vaikystės prisiminimai iš Betygalos apylinkių...',
    image: 'https://images.unsplash.com/photo-1565139441127-f5d6a6c1f764?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Jaunystė'
  },
  {
    id: 'kauno-seminarija',
    date: '1888',
    title: 'Studijos ir dėstymas Kauno seminarijoje',
    excerpt: 'Mano kelias nuo studento iki profesoriaus, mokant būsimus kunigus ir literatus...',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Akademija'
  },
  {
    id: 'pavasario-balsai',
    date: '1895',
    title: '"Pavasario balsai" - pirmasis rinkinys',
    excerpt: 'Kaip gimė mano pirmasis poezijos rinkinys ir kokią įtaką jis turėjo lietuvių literatūrai...',
    image: 'https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Kūryba'
  },
  {
    id: 'tautinis-atgimimas',
    date: '1905',
    title: 'Tautinio atgimimo banga',
    excerpt: 'Mano įsitraukimas į tautinį judėjimą ir kova už lietuvių kalbos teises...',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Istorija'
  },
  {
    id: 'paskutiniai-metai',
    date: '1930',
    title: 'Paskutinieji gyvenimo metai',
    excerpt: 'Apmąstymai apie nueitą kelią ir lietuvių tautos ateitį...',
    image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Atsiminimai'
  }
];

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <div className="relative h-[40vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
                Dienoraštis
              </h1>
              <p className="text-xl text-stone-200 max-w-2xl mx-auto">
                Mano gyvenimo ir kūrybos kelias
              </p>
            </motion.div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-stone-500 mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-stone-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-lt-green hover:text-lt-green/80 transition-colors"
                  >
                    Skaityti daugiau
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}