import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Pen } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function AboutPage() {
  const achievements = [
    {
      year: '1883',
      title: 'Pirmasis eilėraštis',
      description: 'Išspausdintas pirmasis eilėraštis "Lietuvos vargas"',
    },
    {
      year: '1888',
      title: 'Studijos Kijeve',
      description: 'Baigė Kijevo dvasinę akademiją',
    },
    {
      year: '1892',
      title: 'Profesoriaus pareigos',
      description: 'Tapo Kauno kunigų seminarijos profesoriumi',
    },
    {
      year: '1895',
      title: '"Pavasario balsai"',
      description: 'Išleido pirmąjį poezijos rinkinį "Pavasario balsai"',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
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
                Apie Mane
              </h1>
              <p className="text-xl text-stone-200 max-w-2xl mx-auto">
                Poetas, profesorius, lietuvių literatūros klasikas
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-serif">Biografija</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Gimiau 1862 m. spalio 21 d. Pasandravio dvare, netoli Betygalos. 
                Nuo pat jaunystės jaučiau stiprų ryšį su lietuvių kalba ir kultūra, 
                nepaisant to meto rusifikacijos politikos.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Mano kūryba tapo lietuvių tautinio atgimimo simboliu, o eilėraščiai - 
                tautos himnu. Šiandien džiaugiuosi matydamas, kaip mano žodžiai 
                įkvepia naujas kartas.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-lt-yellow/10 rounded-lg transform -rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1583795484071-eeb1596c7de7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Lietuvos peizažas"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </motion.section>

          {/* Timeline */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold font-serif mb-12 text-center">
              Gyvenimo kelias
            </h2>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-24 text-lt-green font-bold">
                    {achievement.year}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl mb-2">{achievement.title}</h3>
                    <p className="text-stone-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills & Interests */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <Pen className="w-12 h-12 mb-4 text-lt-red" />
              <h3 className="font-bold mb-2">Poezija</h3>
              <p className="text-stone-600">
                Lyrikos meistras, sukūręs nemirtingus eilėraščius
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <BookOpen className="w-12 h-12 mb-4 text-lt-green" />
              <h3 className="font-bold mb-2">Edukacija</h3>
              <p className="text-stone-600">
                Profesorius, mokęs būsimus kunigus ir literatus
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <Users className="w-12 h-12 mb-4 text-heritage-500" />
              <h3 className="font-bold mb-2">Visuomenės veikla</h3>
              <p className="text-stone-600">
                Aktyvus tautinio atgimimo dalyvis
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <Award className="w-12 h-12 mb-4 text-lt-yellow" />
              <h3 className="font-bold mb-2">Apdovanojimai</h3>
              <p className="text-stone-600">
                Pripažintas lietuvių literatūros klasikas
              </p>
            </motion.div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}