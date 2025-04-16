"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import PageTransition from "../components/PageTransition"

interface BlogPost {
  id: string
  date: string
  title: string
  excerpt: string
  image: string
  category: string
  content?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "jaunyste-betygaloje",
    date: "1875-03-15",
    title: "Jaunystė Betygaloje",
    excerpt: "Mano pirmieji žingsniai poezijos link ir vaikystės prisiminimai iš Betygalos apylinkių...",
    image:
      "https://images.unsplash.com/photo-1565139441127-f5d6a6c1f764?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Jaunystė",
    content: `
      <h3>Pirmieji prisiminimai iš Pasandravyje</h3>
      <p>
        Gimiau 1862 metų spalio 21 dieną Pasandravio dvare, netoli Betygalos. Mano tėvas Aleksandras Mačiulis buvo laisvas valstietis, vėliau tapęs dvaro ūkvedžiu, o motina Ona Kurmauskaitė – kilusi iš bajorų. Nuo pat mažens augau apsuptas Dubysos slėnio grožio, kuris vėliau įkvėpė daugybę mano eilių.
      </p>
      <p>
        Prisimenu, kaip vaikystėje dažnai klajodavau po apylinkes, stebėdamas gamtos pasikeitimus ir klausydamasis kaimo žmonių pasakojimų apie Lietuvos praeitį. Mano motina, mokėjusi skaityti ir rašyti, anksti mane supažindino su lietuvių tautosakos lobiais.
      </p>
      <p>
        Dar būdamas vaikas, pradėjau domėtis literatūra, ypač poezija. Namų bibliotekoje buvo keletas knygų lenkų kalba, bet mane visada labiau traukė lietuviški žodžiai ir melodijos, kurios skambėjo iš kaimo žmonių lūpų. Prisimenu, kaip vakarais prie žvakės šviesos bandydavau užrašyti pirmąsias eiles, kurios, deja, neišliko iki šių dienų.
      </p>
      <h3>Žydrasis Dubysos slėnis</h3>
      <p>
        Dubysos slėnis, kuriame praleidau savo vaikystę, tapo neatskiriama mano poezijos dalimi. "Kur bėga Šešupė, kur Nemunas teka" – šios eilutės išaugo iš tų vaikystės potyrių, kai stovėdavau ant Dubysos kranto ir svajodavau apie Lietuvos praeitį ir ateitį.
      </p>
      <p>
        Prisimenu, kaip kiekvieną pavasarį stebėdavau, kaip atgimsta gamta, kaip iš po žiemos patalų bunda pievos ir miškai. Tie vaizdai vėliau persikėlė į mano "Pavasario balsus", kuriuose bandžiau perteikti tą nepakartojamą gimtinės grožį.
      </p>
      <p>
        Betygala man visada liks ta vieta, kur prasidėjo mano kelias – tiek kaip žmogaus, tiek kaip poeto. Nors vėliau likimas mane nubloškė į kitus miestus ir kraštus, širdimi visada likau ištikimas savo gimtinei.
      </p>
    `,
  },
  {
    id: "kauno-seminarija",
    date: "1888-09-05",
    title: "Studijos ir dėstymas Kauno seminarijoje",
    excerpt: "Mano kelias nuo studento iki profesoriaus, mokant būsimus kunigus ir literatus...",
    image:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Akademija",
    content: `
      <h3>Pirmieji žingsniai dvasininkystės kelyje</h3>
      <p>
        Baigęs Kauno gimnaziją, kurioje mokiausi 1873-1883 metais, pasirinkau dvasininko kelią ir įstojau į Kauno kunigų seminariją. Tai buvo sudėtingas laikotarpis – rusų valdžia draudė lietuvišką spaudą, persekiojo tautiškai nusiteikusius žmones. Seminarijoje taip pat jautėsi rusifikacijos įtaka, tačiau būtent čia sustiprėjo mano tautinė savimonė.
      </p>
      <p>
        1888 metais baigiau Peterburgo dvasinę akademiją, kur įgijau teologijos magistro laipsnį. Akademijoje turėjau galimybę susipažinti su Europos literatūra, filosofija, istorija. Šios studijos praplėtė mano akiratį ir padėjo suformuoti literatūrinį skonį.
      </p>
      <h3>Profesoriaus pareigos</h3>
      <p>
        Grįžęs iš Peterburgo, 1892 metais tapau Kauno kunigų seminarijos profesoriumi. Seminarijoje dėsčiau moralinę teologiją, bet visada rasdavau progų kalbėti ir apie lietuvių kalbą, literatūrą, istoriją. Bandžiau įkvėpti savo studentams meilę gimtajai kalbai ir kultūrai.
      </p>
      <p>
        Kaip dėstytojas, visada stengiausi būti ne tik žinių perdavėjas, bet ir jaunų protų ugdytojas. Mano tikslas buvo paruošti ne tik dvasininkus, bet ir išsilavinusius, tautiškai susipratusius Lietuvos piliečius. Nelengva tai buvo daryti carinės priespaudos sąlygomis, bet visada tikėjau, kad švietimas yra kelias į tautos atgimimą.
      </p>
      <p>
        Tuo metu, kai dėsčiau seminarijoje, slapta rašiau eilėraščius, kurie vėliau tapo "Pavasario balsų" rinkinio pagrindu. Nors ir būdamas kunigas ir profesorius, negalėjau nutildyti poeto balso savyje – jis prasiveržė eilėmis, kurios, tikėjausi, pažadins tautinę dvasią mano tautiečių širdyse.
      </p>
      <p>
        Seminarijoje sutikau daug talentingų jaunuolių, kurių kai kurie vėliau tapo žymiais lietuvių kultūros veikėjais. Džiaugiuosi, kad galėjau prisidėti prie jų ugdymo ir galbūt įkvėpti juos dirbti Lietuvos labui.
      </p>
    `,
  },
  {
    id: "pavasario-balsai",
    date: "1895-11-20",
    title: '"Pavasario balsai" - pirmasis rinkinys',
    excerpt: "Kaip gimė mano pirmasis poezijos rinkinys ir kokią įtaką jis turėjo lietuvių literatūrai...",
    image:
      "https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Kūryba",
    content: `
      <h3>Rinkinio gimimas</h3>
      <p>
        "Pavasario balsai" – mano pirmasis poezijos rinkinys, išleistas 1895 metais Tilžėje Maironio slapyvardžiu. Tuo metu Lietuvoje galiojo spaudos draudimas, todėl knyga buvo spausdinama Mažojoje Lietuvoje ir slapta platinama Didžiojoje Lietuvoje.
      </p>
      <p>
        Rinkinį sudarė eilėraščiai, kuriuos rašiau dar studijų metais ir vėliau, dėstydamas seminarijoje. Juose atsispindėjo mano meilė Lietuvai, jos gamtai, istorijai, taip pat nerimas dėl tautos ateities ir viltis, kad ji atgims iš priespaudos.
      </p>
      <p>
        Prieš išleidžiant rinkinį, ilgai svarsčiau, kokiu vardu jį pasirašyti. Negalėjau naudoti savo tikrosios pavardės, nes buvau dvasininkas ir seminarijos profesorius – tokia veikla galėjo sukelti nemalonumų tiek man, tiek seminarijai. Todėl pasirinkau Maironio slapyvardį, kuris vėliau tapo neatskiriama mano tapatybės dalimi.
      </p>
      <h3>Rinkinio reikšmė</h3>
      <p>
        "Pavasario balsai" tapo lūžio tašku lietuvių poezijoje. Iki tol lietuvių literatūroje dominavo didaktiniai, moralizuojantys kūriniai, o lyrikos buvo nedaug. Savo rinkiniu siekiau parodyti, kad lietuvių kalba gali būti ne tik buitinė, bet ir meninė, poetinė kalba.
      </p>
      <p>
        Rinkinys sulaukė didelio populiarumo – jis buvo skaitomas, deklamuojamas, jo eilėraščiai virto dainomis. "Lietuva brangi", "Kur bėga Šešupė", "Trakų pilis" – šie kūriniai tapo lietuvių tautos himnais, žadinančiais tautinę savimonę.
      </p>
      <p>
        "Pavasario balsai" buvo išleisti dar kelis kartus, paskutinį kartą 1927 metais, jau nepriklausomoje Lietuvoje. Kiekvieną leidimą papildydavau naujais eilėraščiais, tobulindavau senus. Šis rinkinys tapo mano gyvenimo darbu, atspindinčiu mano poetinį kelią.
      </p>
      <p>
        Didžiuojuosi, kad mano poezija pasiekė paprastų žmonių širdis, kad ji padėjo išsaugoti lietuvybę sunkiais laikais ir prisidėjo prie tautos atgimimo. Nors esu kunigas ir profesorius, bet būtent kaip poetas, manau, labiausiai pasitarnavau savo tėvynei.
      </p>
    `,
  },
  {
    id: "tautinis-atgimimas",
    date: "1905-12-10",
    title: "Tautinio atgimimo banga",
    excerpt: "Mano įsitraukimas į tautinį judėjimą ir kova už lietuvių kalbos teises...",
    image:
      "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Istorija",
    content: `
      <h3>Didieji Vilniaus Seimo metai</h3>
      <p>
        1905 metai buvo ypatingi Lietuvos istorijoje – po Rusijos revoliucijos carinė valdžia buvo priversta padaryti tam tikrų nuolaidų. Tų metų gruodžio 4-5 dienomis Vilniuje įvyko Didysis Vilniaus Seimas, kuriame dalyvavo apie 2000 lietuvių atstovų iš visos Lietuvos. Tai buvo pirmasis toks didelis lietuvių susirinkimas nuo spaudos draudimo pradžios.
      </p>
      <p>
        Nors pats negalėjau aktyviai dalyvauti Seime dėl savo, kaip dvasininko, padėties, bet visomis išgalėmis rėmiau jo idėjas. Seimo nutarimai – reikalauti Lietuvai autonomijos, įvesti lietuvių kalbą mokyklose ir valstybinėse įstaigose – atspindėjo tas idėjas, kurias aš skleidžiau savo poezijoje.
      </p>
      <h3>Lietuvių kalbos teisės</h3>
      <p>
        1904 metais pagaliau buvo panaikintas lietuviškos spaudos draudimas. Tai buvo didelė pergalė, prie kurios prisidėjo visi, kas tik galėjo – knygnešiai, rašytojai, inteligentai. Šis įvykis atvėrė naujus kelius lietuvių kultūrai ir literatūrai.
      </p>
      <p>
        Po spaudos draudimo panaikinimo ėmė kurtis lietuviškos organizacijos, mokyklos, laikraščiai. Lietuvių kalba pagaliau galėjo išeiti iš pogrindžio ir užimti deramą vietą viešajame gyvenime. Tai buvo tas laikas, apie kurį svajojau rašydamas "Jau slaviai sukilo..." – lietuvių tautos pavasaris.
      </p>
      <h3>Mano indėlis į tautinį atgimimą</h3>
      <p>
        Kaip dvasininkas, negalėjau atvirai dalyvauti politinėje veikloje, bet savo poezija ir pedagogine veikla stengiausi prisidėti prie tautinio atgimimo. Mano eilėraščiai "Lietuva brangi", "Kur bėga Šešupė", "Trakų pilis" tapo šio judėjimo himnais, žadinančiais tautinę savimonę.
      </p>
      <p>
        Seminarijoje, kur dėsčiau, visada stengiausi skiepyti savo studentams meilę lietuvių kalbai ir kultūrai. Tikiuosi, kad daugelis mano mokinių, tapę kunigais ir veikdami įvairiose Lietuvos parapijose, tęsė šį darbą, skleisdami tautines idėjas tarp paprastų žmonių.
      </p>
      <p>
        Tautinis atgimimas – tai ilgas ir sudėtingas procesas, kuriame dalyvauja visa tauta. Mano vaidmuo jame buvo kuklus, bet jaučiu, kad prisidėjau prie to, kad lietuviai neprarastų savo tapatybės ir išsaugotų viltį atgauti laisvę.
      </p>
    `,
  },
  {
    id: "paskutiniai-metai",
    date: "1930-06-18",
    title: "Paskutinieji gyvenimo metai",
    excerpt: "Apmąstymai apie nueitą kelią ir lietuvių tautos ateitį...",
    image:
      "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Atsiminimai",
    content: `
      <h3>Nepriklausomoje Lietuvoje</h3>
      <p>
        1918 metų vasario 16 dieną buvo paskelbta Lietuvos nepriklausomybė. Tai buvo tas tikslas, apie kurį svajojome, dėl kurio dirbome. Pagaliau mūsų tauta galėjo laisvai kurti savo ateitį. Nors pirmieji nepriklausomybės metai buvo sunkūs – kovos su bolševikais, bermontininkais, lenkais – bet lietuvių tauta įrodė, kad sugeba ginti savo laisvę.
      </p>
      <p>
        Nepriklausomoje Lietuvoje tęsiau savo darbą Kauno kunigų seminarijoje, vėliau – Lietuvos universitete. 1922 metais buvau išrinktas universiteto rektoriumi. Tai buvo didelė garbė, bet ir atsakomybė – vadovauti mūsų tautos aukštojo mokslo šventovei.
      </p>
      <h3>Žvilgsnis atgal</h3>
      <p>
        Dabar, kai mano gyvenimas eina į pabaigą, dažnai mąstau apie nueitą kelią. Ar padariau viską, ką galėjau, savo tautai? Ar mano poezija padėjo išsaugoti lietuvybę sunkiais laikais? Ar mano darbas seminarijoje ir universitete prisidėjo prie tautinės inteligentijos ugdymo?
      </p>
      <p>
        Kai žvelgiu į šiandienos Lietuvą, matau, kad ji dar tik pradeda savo kelią kaip nepriklausoma valstybė. Dar daug iššūkių ir sunkumų jos laukia. Bet tikiu, kad lietuvių tauta, ištvėrusi šimtmečius priespaudos, sugebės įveikti visus sunkumus ir sukurti klestinčią valstybę.
      </p>
      <p>
        Mano poezija visada buvo persmelkta meilės Lietuvai, jos gamtai, istorijai. Tikiuosi, kad ji ir toliau įkvėps lietuvius mylėti savo tėvynę, puoselėti jos kalbą ir kultūrą, dirbti jos labui. Tikiuosi, kad "Lietuva brangi" skambės lietuvių lūpose ir tada, kai manęs jau nebebus.
      </p>
      <h3>Palikimas</h3>
      <p>
        Ką paliksiu po savęs? Poeziją, kuri, tikiuosi, gyvuos ilgiau nei aš. Studentus, kuriuos mokiau ir kurie, tikiuosi, tęs mano darbą. Meilę Lietuvai, kurią stengiausi įžiebti savo tautiečių širdyse.
      </p>
      <p>
        Mano gyvenimas artėja prie pabaigos, bet lietuvių tautos kelias tęsiasi. Tikiuosi, kad jis ves į šviesesnę ateitį, kad Lietuva išliks laisva ir nepriklausoma, kad lietuvių kalba ir kultūra klestės.
      </p>
      <p>
        Mano paskutinis prašymas būsimosioms kartoms – nepamirškite savo šaknų, savo kalbos, savo istorijos. Nes tauta, kuri pamiršta savo praeitį, neturi ateities.
      </p>
    `,
  },
]

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <div className="relative h-[40vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">Dienoraštis</h1>
              <p className="text-xl text-stone-200 max-w-2xl mx-auto">Mano gyvenimo ir kūrybos kelias</p>
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
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">{post.category}</span>
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
  )
}
