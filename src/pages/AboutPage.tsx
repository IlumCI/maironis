"use client"

import { motion } from "framer-motion"
import { BookOpen, Award, Users, Pen, MapPin, Scroll, Book, GraduationCap } from "lucide-react"
import PageTransition from "../components/PageTransition"

export default function AboutPage() {
  const achievements = [
    {
      year: "1862",
      title: "Gimimas",
      description: "Gimiau spalio 21 d. Pasandravio dvare, netoli Betygalos (Raseinių apskritis)",
    },
    {
      year: "1873",
      title: "Pradinis išsilavinimas",
      description: "Pradėjau mokytis Kauno gimnazijoje",
    },
    {
      year: "1883",
      title: "Pirmasis eilėraštis",
      description: 'Išspausdintas pirmasis eilėraštis "Lietuvos vargas" laikraštyje "Aušra"',
    },
    {
      year: "1884",
      title: "Kunigų seminarija",
      description: "Įstojau į Kauno kunigų seminariją, pasirinkdamas dvasininko kelią",
    },
    {
      year: "1888",
      title: "Studijos Peterburge",
      description: "Baigiau Peterburgo dvasinę akademiją teologijos magistro laipsniu",
    },
    {
      year: "1892",
      title: "Profesoriaus pareigos",
      description: "Tapau Kauno kunigų seminarijos profesoriumi, dėsčiau moralinę teologiją",
    },
    {
      year: "1895",
      title: '"Pavasario balsai"',
      description: 'Išleidau pirmąjį poezijos rinkinį "Pavasario balsai" Tilžėje',
    },
    {
      year: "1909",
      title: "Poema 'Jaunoji Lietuva'",
      description: "Parašiau poemą 'Jaunoji Lietuva', skirtą studentijai ir tautiniam atgimimui",
    },
    {
      year: "1922",
      title: "Lietuvos universitetas",
      description: "Tapau Lietuvos universiteto (vėliau - Vytauto Didžiojo universiteto) rektoriumi",
    },
    {
      year: "1926",
      title: "Prelato titulas",
      description: "Už nuopelnus Bažnyčiai suteiktas prelato titulas",
    },
    {
      year: "1932",
      title: "Išėjimas Anapilin",
      description: "Miriau birželio 28 d. Kaune, palaidotas Kauno arkikatedros bazilikos kriptoje",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">Apie Mane</h1>
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
                Gimiau 1862 m. spalio 21 d. Pasandravio dvare, netoli Betygalos. Nuo pat jaunystės jaučiau stiprų ryšį
                su lietuvių kalba ir kultūra, nepaisant to meto rusifikacijos politikos. Mokiausi Kauno gimnazijoje,
                vėliau Kauno kunigų seminarijoje ir Peterburgo dvasinėje akademijoje, kur įgijau teologijos magistro
                laipsnį.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Esu žinomas kaip lietuvių tautinio atgimimo poetas, literatūros klasikas, pedagogas ir dvasininkas. Mano
                poezija tapo tautiniu šaukliu rusifikacijos laikotarpiu, skatinanti lietuvius didžiuotis savo istorija
                ir kalba. Rašydamas slapyvardžiu Maironis (tikroji pavardė – Jonas Mačiulis), sukūriau nemirtingus
                kūrinius, tokius kaip "Pavasario balsai", "Mūsų vargai", poemas "Jaunoji Lietuva", "Mūsų praeitis".
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                1892 metais tapau Kauno kunigų seminarijos profesoriumi, dėsčiau moralinę teologiją. Vėliau, jau
                nepriklausomoje Lietuvoje, buvau Lietuvos universiteto profesorius, 1922 metais išrinktas rektoriumi.
                Visą gyvenimą paskyriau lietuvių kultūros, kalbos ir nacionalinės savimonės puoselėjimui.
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

          {/* Historical Context Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">Istorinis kontekstas</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-lt-green">Lietuva carinės Rusijos valdžioje</h3>
                <p className="text-stone-600 leading-relaxed">
                  Gimiau ir augau sudėtingu Lietuvos istorijos laikotarpiu – po 1863 metų sukilimo, kai carinė Rusija
                  ypač sustiprino lietuvių tautos priespaudą. 1864 metais buvo įvestas lietuviškos spaudos draudimas,
                  uždaromos lietuviškos mokyklos, skatinama rusifikacija. Šiame kontekste formavosi mano tautinė
                  savimonė ir pasipriešinimas kultūrinei priespaudai.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Studijuodamas Peterburge, susipažinau su Europos romantizmo literatūra, kuri darė įtaką mano poezijai.
                  Taip pat mane palietė to meto tautinio atgimimo idėjos, sklindančios iš Čekijos, Lenkijos ir kitų
                  šalių. Grįžęs į Lietuvą, šias idėjas stengiausi perteikti savo kūryboje.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-lt-red">Lietuvių tautinis atgimimas</h3>
                <p className="text-stone-600 leading-relaxed">
                  XIX amžiaus pabaigoje – XX amžiaus pradžioje Lietuvoje vyko tautinis atgimimas, kurio dalimi tapau ir
                  aš. 1883 metais pradėjo eiti pirmasis lietuviškas laikraštis "Aušra" (lotyniškomis raidėmis
                  spausdinamas Mažojoje Lietuvoje), 1889 m. – "Varpas". Šie leidiniai žadino tautinę savimonę, kvietė
                  priešintis rusifikacijai, puoselėti lietuvių kalbą ir kultūrą.
                </p>
                <p className="text-stone-600 leading-relaxed">
                  1904 metais buvo panaikintas lietuviškos spaudos draudimas, o po 1905 metų revoliucijos carinėje
                  Rusijoje atsirado daugiau laisvių. 1905 m. Vilniuje įvyko Didysis Vilniaus Seimas, kuriame buvo
                  reikalaujama Lietuvai autonomijos. Visi šie įvykiai formavo kontekstą, kuriame gimė ir brendo mano
                  poezija, skelbianti meilę Lietuvai ir viltį atgauti laisvę.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Timeline */}
          <section className="mb-24">
            <h2 className="text-3xl font-bold font-serif mb-12 text-center">Gyvenimo kelias</h2>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-24 text-lt-green font-bold">{achievement.year}</div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl mb-2">{achievement.title}</h3>
                    <p className="text-stone-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Literary Legacy Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">Literatūrinis palikimas</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card bg-heritage-100">
                <Book className="w-10 h-10 mb-4 text-heritage-500" />
                <h3 className="text-xl font-bold mb-3">Poezijos rinkiniai</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• "Pavasario balsai" (1895, 1905, 1913, 1920, 1927)</li>
                  <li>• "Jaunoji Lietuva" (1907)</li>
                  <li>• "Raseinių Magdė" (1909)</li>
                  <li>• "Mūsų vargai" (1920)</li>
                  <li>• "Kęstučio mirtis" (1921)</li>
                </ul>
              </div>
              <div className="card bg-nature-100">
                <Scroll className="w-10 h-10 mb-4 text-nature-500" />
                <h3 className="text-xl font-bold mb-3">Istoriniai veikalai</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• "Apsakymai apie Lietuvos praeigą" (1891)</li>
                  <li>• "Lietuvos istorija" (1906)</li>
                  <li>• "Trumpa lietuvių rašliavos apžvalga" (1906)</li>
                  <li>• "Trumpa visuotinės literatūros istorija" (1926)</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Literatūrinė reikšmė</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Pen className="w-6 h-6 text-lt-green flex-shrink-0 mt-1" />
                    <p className="text-stone-600">
                      Esu laikomas lietuvių romantizmo ir neoromantizmo pradininku, mano poetika pakeitė lietuvių
                      literatūros kryptį, atverdama kelią moderniai poetinei raiškai.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-lt-red flex-shrink-0 mt-1" />
                    <p className="text-stone-600">
                      Mano istoriniai veikalai padėjo formuoti lietuvių tautos istorinę savimonę, skatino domėtis
                      Lietuvos praeitimi ir didžiuotis ja.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-lt-yellow flex-shrink-0 mt-1" />
                    <p className="text-stone-600">
                      Gamtos vaizdai mano poezijoje tapo lietuviškos tapatybės simboliais, o Lietuvos peizažo
                      poetizavimas – viena iš tautinės savimonės formų.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-heritage-500 flex-shrink-0 mt-1" />
                    <p className="text-stone-600">
                      Mano eilėraščiai, virtę dainomis ("Lietuva brangi", "Kur bėga Šešupė"), tapo neoficialiais
                      lietuvių tautos himnais, jungiančiais lietuvius visame pasaulyje.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Skills & Interests */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="card">
              <Pen className="w-12 h-12 mb-4 text-lt-red" />
              <h3 className="font-bold mb-2">Poezija</h3>
              <p className="text-stone-600">
                Lyrikos meistras, sukūręs nemirtingus eilėraščius, tapusius lietuvių kultūros dalimi
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="card">
              <BookOpen className="w-12 h-12 mb-4 text-lt-green" />
              <h3 className="font-bold mb-2">Edukacija</h3>
              <p className="text-stone-600">Profesorius, seminarijos rektorius, ugdęs būsimus kunigus ir literatus</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="card">
              <Users className="w-12 h-12 mb-4 text-heritage-500" />
              <h3 className="font-bold mb-2">Visuomenės veikla</h3>
              <p className="text-stone-600">Aktyvus tautinio atgimimo dalyvis, rūpinęsis lietuvių tautos ateitimi</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="card">
              <Award className="w-12 h-12 mb-4 text-lt-yellow" />
              <h3 className="font-bold mb-2">Apdovanojimai</h3>
              <p className="text-stone-600">
                Pripažintas lietuvių literatūros klasikas, prelatas, universiteto rektorius
              </p>
            </motion.div>
          </section>
        </div>
      </div>
    </PageTransition>
  )
}
