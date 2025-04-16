import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Feather, Book, Heart, Music, Quote, Trees as Tree, Globe, Scroll, MapPin, Leaf, BookOpen } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section with Parallax */}
        <div className="relative h-screen overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center parallax-bg"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
              transform: `translateY(${scrollPosition * 0.5}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative h-full flex items-center justify-center text-center px-4"
          >
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-serif">Maironis</h1>
              <p className="text-xl md:text-2xl text-stone-200 italic">
                "Lietuva brangi, mano tėvyne"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16 space-y-32">
          {/* Intro Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Feather className="w-8 h-8 text-lt-green" />
                <h2 className="section-title">Apie Poetą</h2>
              </div>
              <p className="text-lg text-stone-600 leading-relaxed">
                Jonas Mačiulis-Maironis (1862-1932) - lietuvių tautos dainius, 
                kurio kūryba tapo mūsų kultūros ir tapatybės pagrindu. Šiandien 
                jo žodžiai skamba dar aktualiau, kviesdami mus saugoti gamtą, 
                puoselėti kultūrą ir stiprinti tautinę savimonę.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-lt-yellow/10 rounded-lg transform rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Lietuvos gamta"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </motion.section>

          {/* Themes Grid */}
          <section className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-nature-100 to-heritage-100 -skew-y-3" />
            <div className="relative grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <Globe className="w-12 h-12 mb-4 text-lt-red" />
                <h3 className="text-xl font-bold mb-3">Tautiškumas</h3>
                <p className="text-stone-600">
                  Maironio poezija - tai tiltas tarp praeities ir dabarties, 
                  jungianti lietuvių tautos istorinę atmintį su šiandienos iššūkiais.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <Tree className="w-12 h-12 mb-4 text-lt-green" />
                <h3 className="text-xl font-bold mb-3">Gamtosauga</h3>
                <p className="text-stone-600">
                  Poeto meilė Lietuvos gamtai šiandien įkvepia mus saugoti 
                  ir puoselėti mūsų krašto gamtos grožį bei biologinę įvairovę.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <Scroll className="w-12 h-12 mb-4 text-heritage-500" />
                <h3 className="text-xl font-bold mb-3">Kultūros Išsaugojimas</h3>
                <p className="text-stone-600">
                  Maironio kūryba - tai kvietimas išsaugoti ir puoselėti 
                  lietuvių kalbą, tradicijas ir kultūrinį paveldą.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Poetry Section */}
          <section className="space-y-12">
            <h2 className="section-title text-center">Eilėraščiai</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="card bg-nature-100"
              >
                <Quote className="w-8 h-8 mb-4 text-nature-500" />
                <div className="poem-text">
                  <p>Lietuva brangi, mano tėvyne,</p>
                  <p>Šalis, kur miega kapuos didvyriai;</p>
                  <p>Graži tu savo dangaus mėlyne!</p>
                  <p>Brangi: tiek vargo, kančių prityrei.</p>
                </div>
                <p className="mt-4 text-sm text-nature-900">- Lietuva brangi</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="card bg-heritage-100"
              >
                <Quote className="w-8 h-8 mb-4 text-heritage-500" />
                <div className="poem-text">
                  <p>Jau slaviai sukilo. Nuo Juodmarių krašto</p>
                  <p>Pavasaris eina Karpatų kalnais.</p>
                  <p>Po Lietuvą žiema. Nei žodžio, nei rašto</p>
                  <p>Neleidžia erelis, suspaudęs sparnais.</p>
                </div>
                <p className="mt-4 text-sm text-heritage-900">- Jau slaviai sukilo</p>
              </motion.div>
            </div>
          </section>

          {/* Interactive Map Section */}
          <section className="relative">
            <h2 className="section-title text-center mb-12">Maironio Vietos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <MapPin className="w-8 h-8 mb-4 text-lt-red" />
                <h3 className="font-bold mb-2">Maironio namai Kaune</h3>
                <p className="text-stone-600">
                  Rotušės a. 13, Kaunas - muziejus, kuriame poetas gyveno ir kūrė.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <Leaf className="w-8 h-8 mb-4 text-lt-green" />
                <h3 className="font-bold mb-2">Betygalos apylinkės</h3>
                <p className="text-stone-600">
                  Poeto gimtinė, įkvėpusi daugelį jo gamtos aprašymų.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <BookOpen className="w-8 h-8 mb-4 text-heritage-500" />
                <h3 className="font-bold mb-2">Kauno kunigų seminarija</h3>
                <p className="text-stone-600">
                  Vieta, kur Maironis dėstė ir vadovavo būsimiems kunigams.
                </p>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-stone-900 text-stone-400 py-12 mt-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="mb-4">Skirta Jono Mačiulio-Maironio (1862-1932) atminimui</p>
            <p className="text-sm">
              © 2024 | Puoselėkime lietuvių kalbą, kultūrą ir gamtą
            </p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}