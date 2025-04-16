export interface Poem {
  id: string
  title: string
  year: string
  category: string
  excerpt: string
  content: string
  collection: string
  background?: string
}

export const poemCategories = [
  {
    id: "tevyne",
    name: "Tėvynė",
    description: "Eilėraščiai apie Lietuvą, jos gamtą ir istoriją",
    color: "lt-green",
  },
  {
    id: "gamta",
    name: "Gamta",
    description: "Lietuvos peizažai ir metų laikai",
    color: "nature-500",
  },
  {
    id: "istorija",
    name: "Istorija",
    description: "Lietuvos praeitis ir didvyriai",
    color: "heritage-500",
  },
  {
    id: "jausmai",
    name: "Jausmai",
    description: "Asmeniniai išgyvenimai ir apmąstymai",
    color: "lt-red",
  },
  {
    id: "religija",
    name: "Religija",
    description: "Dvasiniai apmąstymai",
    color: "lt-yellow",
  },
]

export const poems: Poem[] = [
  {
    id: "lietuva-brangi",
    title: "Lietuva brangi",
    year: "1891",
    category: "tevyne",
    excerpt: "Vienas populiariausių mano eilėraščių, tapęs neoficialiu Lietuvos himnu",
    collection: "Pavasario balsai",
    content: `Lietuva brangi, mano tėvyne,
Šalis, kur miega kapuos didvyriai;
Graži tu savo dangaus mėlyne!
Brangi: tiek vargo, kančių prityrei.

Kaip puikūs slėniai sraunios Dubysos,
Miškais lyg rūta kalnai žaliuoja;
O po tuos kalnus sesutės visos
Griaudžiai malonias dainas ringuoja.

Ten susimąstęs tamsus Nevėžis
Kaip juosta juosia žaliąsias pievas;
Banguoja, vagą giliai išrėžęs;
Jo gilią mintį težino Dievas.

Kaip linksma sodžiuos, kai vyturėlis
Jaukiai pragysta, aukštai iškilęs;
Ar saulė leidžias, ir vakarėlis
Ramumą neša, saldžiai nutilęs.

Bažnyčios bokštus kai saulė šviečia,
Ir girios ūžia gaudžia aplinkui,
Ir kalnas pilis aukštas paliečia:
Oi, tėva, tėva! Koks tu gražus, miškais!

Ar atsiminsi tuos didžius laikus,
Kad ta galybė mūsų žydėjo?
Kad Vytautas didis garsiai viešpatavo,
Kad Lietuva plačiai garsėjo?

Kiek atminimų, atsitikimų
Iš amžių glūdumos išsineria!
Lyg tartum šmėklos iš kapų kilimų
Senovės karžygiai vaidenasi.

Graži tu, mano brangi tėvyne,
Šalis, kur miega kapuos didvyriai!
Ne veltui bočiai tave taip gynė,
Ne veltui dainiai plačiai išgyrė!`,
    background: `"Lietuva brangi" – vienas iš mano ankstyviausių ir labiausiai mylimų eilėraščių. Jį parašiau 1891 metais, kai Lietuva buvo carinės Rusijos valdžioje, o lietuviška spauda uždrausta. Šiame eilėraštyje norėjau išreikšti savo meilę Lietuvai, jos gamtai ir istorijai.

Eilėraštis tapo ypač populiarus – jis buvo deklamuojamas slaptuose lietuvių susirinkimuose, vėliau kompozitorius Juozas Naujalis sukūrė jam melodiją, ir jis tapo daina, kurią lietuviai dainuoja iki šiol. Daugeliui lietuvių ši daina yra tarsi antrasis himnas.

Rašydamas šį eilėraštį, įkvėpimo sėmiausi iš savo vaikystės prisiminimų apie Dubysos slėnį, taip pat iš Lietuvos istorijos. Norėjau priminti tautiečiams apie didingą Lietuvos praeitį, apie Vytauto laikus, kai Lietuva buvo galinga valstybė. Tikėjausi, kad tai įkvėps juos nepamiršti savo šaknų ir kovoti už Lietuvos laisvę.`,
  },
  {
    id: "kur-bega-sesupe",
    title: "Kur bėga Šešupė",
    year: "1895",
    category: "tevyne",
    excerpt: "Eilėraštis apie Lietuvos upes ir kalnus, tapęs populiaria daina",
    collection: "Pavasario balsai",
    content: `Kur bėga Šešupė, kur Nemunas teka,
Tai mūsų tėvynė, graži Lietuva;
Čia broliai artojai lietuviškai šneka,
Čia skamba po kaimus Birutės daina.

Bėkit, bėkit, mūsų upės, į marias giliausias!
Skambėk, skambėk, mūsų daina, po šalis plačiausias!

Kur rausta žemčiūgai, kur rūtos žaliuoja
Ir mūsų sesučių dabina kasas,
Kur sode raiboji gegutė kukuoja,
Ten mūsų sodybas keleivis atras.

Kur žemčiūgai, žalios rūtos, kur raiba gegutė,
Ten tėvynė, ten sodybos, ten sena močiutė.

Ar šviesios, kaip saulė, mums švies kada dienos?
Ar atgims tėvynė jauna ir tvirta?
Ar Dievas, užstojęs už dvasią teisinga,
Palaimintos rankos palies kada ją?

Palaiminki, Viešpatie galingas, tą mylimą šalį,
Juk tėviška Tavo malonė daug gali!

Kur bėga Šešupė, kur Nemunas teka,
Tai mūsų tėvynė, graži Lietuva;
Čia broliai artojai lietuviškai šneka,
Čia skamba po kaimus Birutės daina.`,
    background: `Šį eilėraštį parašiau 1895 metais, jis buvo įtrauktas į pirmąjį "Pavasario balsų" leidimą. Eilėraštyje minimi Lietuvos upių vardai – Šešupė, Nemunas – kurie simbolizuoja Lietuvos žemę ir jos grožį. 

Rašydamas šį eilėraštį, norėjau pabrėžti lietuvių kalbos ir kultūros svarbą – "čia broliai artojai lietuviškai šneka". Tai buvo ypač svarbu spaudos draudimo laikotarpiu, kai lietuvių kalba buvo persekiojama.

Eilėraštyje taip pat išreiškiau viltį, kad Lietuva atgims – "ar atgims tėvynė jauna ir tvirta?" Ši viltis buvo labai svarbi tuo metu, kai Lietuva buvo pavergta, o lietuviai kovojo už savo teises.

Kompozitorius Česlovas Sasnauskas sukūrė šiam eilėraščiui melodiją, ir jis tapo populiaria daina, kuri iki šiol dainuojama Lietuvoje. Ši daina tapo vienu iš lietuvių tautinio identiteto simbolių.`,
  },
  {
    id: "traku-pilis",
    title: "Trakų pilis",
    year: "1892",
    category: "istorija",
    excerpt: "Eilėraštis apie Trakų pilį, simbolizuojantis Lietuvos didingą praeitį",
    collection: "Pavasario balsai",
    content: `Pelėsiais ir kerpėm apaugus aukštai
Trakų štai garbinga pilis!
Jos aukštus valdovus užmigdė kapai,
O ji tebestovi dar vis.
Bet amžiai bėga, ir griūvančios sienos
Kas dieną nyksta, apleistos ir vienos!..

Kai vėjas pakyla ir drumzdžias vanduo,
Ir ežeras veržias platyn, –
Banga gena bangą, ir bokšto akmuo
Paplautas nuvirsta žemyn.
Taip griūva sienos, liūdnesnės kas dieną,
Griaudindamos jautrią širdį ne vieną.

Pilis! Tu tiek amžių praleidai garsiai!
Ir tiek mums davei milžinų!
Tu Vytauto didžio galybę matei,
Kad jojo tarp savo pulkų!
Kur tavo galia, garsi padavimais?
Kur ta senovė, brangi atminimais?

Nutilusios sienos, apleistos visų,
Be sargo, ginklų ir žmogaus!
Kiek primenat jūs man brangiausių laikų
Ant vieškelio amžių plataus!
Laikai brangiausi! Ar mums dar sugrįšit?
Ar vien minėsime, kaip savo vilty?

Kada tik keliu važiavau pro Trakus,
Man verkė iš skausmo širdis;
Gaili ašarėlė beplovė skruostus
Ir mėlynas temdė akis!
Ir veltui dvasią raminti norėjau,
Aplinkui vien tamsią naktį regėjau.

Ir bokšto akmuo paplautas vanduo
Paplautas nuvirsta žemyn!
Taip griūva sienos, liūdnesnės kas dieną,
Griaudindamos jautrią širdį ne vieną.`,
    background: `"Trakų pilis" – vienas iš mano eilėraščių, kuriame apmąstau Lietuvos praeitį ir dabartį. Jį parašiau 1892 metais, kai Lietuva buvo carinės Rusijos valdžioje, o lietuvių tauta kovojo už savo teises.

Trakų pilis šiame eilėraštyje simbolizuoja Lietuvos didingą praeitį – Vytauto laikus, kai Lietuva buvo galinga valstybė. Tačiau dabar pilis griūva, kaip ir Lietuvos valstybingumas. Tai sukelia liūdesį ir ilgesį – "Man verkė iš skausmo širdis".

Rašydamas šį eilėraštį, norėjau priminti tautiečiams apie didingą Lietuvos praeitį ir paskatinti juos kovoti už jos ateitį. Norėjau, kad jie didžiuotųsi savo istorija ir siektų atkurti Lietuvos valstybingumą.

Eilėraštis tapo labai populiarus – jis buvo deklamuojamas lietuvių susirinkimuose, vėliau tapo daina. Jis tapo vienu iš lietuvių tautinio atgimimo simbolių.`,
  },
  {
    id: "vasaros-naktys",
    title: "Vasaros naktys",
    year: "1895",
    category: "gamta",
    excerpt: "Eilėraštis apie vasaros naktų grožį Lietuvoje",
    collection: "Pavasario balsai",
    content: `Ramios, malonios vasaros naktys;
Medžių, pavėsy, nuo saulės kaitros
Taip gaivinančiai, maloniai kvepia
Žolynai, žiedai rasoti nakties.

Ramios, malonios vasaros naktys!
Balto rūko pilnos pievos daubos;
Nei šiurena lapas ant šakelės,
Nei paukštelis krūmuose čiulba.

Viskas nutilo, viskas nurimo,
Vienos tik žvaigždės mirkčioja, dega;
Tarp jųjų šviesi, didžioji žvaigždė
Kaip perlas dangaus mėlynėj žiba.

Ramios, malonios vasaros naktys!
Sidabru rasa vilgo žolynus;
Medžių šakos, supamos vėjo,
Švelniai šlama, tartum lopšinę.

Tokiąnakt ramią, giedrią, žvaigždėtą
Taip lengva svajoti, taip lengva mylėt!
Širdis taip pilna, taip laimės trokšta,
Taip ieško, ko trūksta, taip veržias aukštyn!

Ramios, malonios vasaros naktys!
Miega, nutilo paukščiai ir žvėrys;
Tik širdis nemiega, tik ji nenurimsta,
Tik ji vien svajoja, ilgisi, tiki.`,
    background: `"Vasaros naktys" – vienas iš mano eilėraščių, kuriame apdainuoju Lietuvos gamtos grožį. Jį parašiau 1895 metais, jis buvo įtrauktas į pirmąjį "Pavasario balsų" leidimą.

Šiame eilėraštyje aprašau vasaros naktį Lietuvoje – ramią, malonią, pilną kvapų ir garsų. Tai tarsi atsvara politiniams eilėraščiams, kuriuose kalbu apie Lietuvos priespaudą ir kovą už laisvę. Čia noriu parodyti, kad Lietuva yra ne tik istorija ir politika, bet ir gamta, kuri teikia grožį ir ramybę.

Eilėraštyje taip pat išreiškiu mintį, kad gamtos grožis žadina žmogaus dvasią – "Tokiąnakt ramią, giedrią, žvaigždėtą / Taip lengva svajoti, taip lengva mylėt!" Tai tarsi kvietimas tautiečiams pakilti virš kasdienybės, svajoti apie geresnę ateitį ir siekti jos.

Šis eilėraštis tapo vienu iš mano populiariausių gamtos lyrikos kūrinių. Jis buvo deklamuojamas, vėliau tapo daina. Jis padėjo formuoti lietuvių santykį su gamta kaip su tapatybės dalimi.`,
  },
  {
    id: "uztrauksme-nauja-giesme",
    title: "Užtrauksme naują giesmę",
    year: "1895",
    category: "tevyne",
    excerpt: "Eilėraštis-himnas, kviečiantis lietuvius vienytis ir kovoti už savo teises",
    collection: "Pavasario balsai",
    content: `Užtrauksme naują giesmę, broliai,
Kurią jaunimas tesupras!
Ne taip giedosme, kaip lig šiolei,
Kitas mąstysme jau dumas!

Drąsiai, aukštai
Pakils balsai,
Išauš kita gadynė.
Užžvis kita
Šviesa, kita,
Užgims darbai, ne vien žodžiai,
Pakils jauna tėvynė.

Aušra naujos gadynės teka;
Nušvis ir saulės spinduliai;
Jau išsipildo, ką ji šneka,
Ir žydi jos visi keliai.

Drąsiai, aukštai
Pakils balsai,
Išauš kita gadynė.
Užžvis kita
Šviesa, kita,
Užgims darbai, ne vien žodžiai,
Pakils jauna tėvynė.

Prikelkime Lietuvą mūsų!
Ir švieskime tamsius takus!
Paverskime šviesiais keliais
Lietuvos dvasios milžinus!

Drąsiai, aukštai
Pakils balsai,
Išauš kita gadynė.
Užžvis kita
Šviesa, kita,
Užgims darbai, ne vien žodžiai,
Pakils jauna tėvynė.`,
    background: `"Užtrauksme naują giesmę" – vienas iš mano eilėraščių, kuriame kviečiu lietuvius vienytis ir kovoti už savo teises. Jį parašiau 1895 metais, jis buvo įtrauktas į pirmąjį "Pavasario balsų" leidimą.

Šis eilėraštis yra tarsi himnas, kviečiantis lietuvius į naują kovą – "Užtrauksme naują giesmę, broliai, / Kurią jaunimas tesupras!" Jame išreiškiu viltį, kad ateis nauji laikai – "Išauš kita gadynė", kad Lietuva pakils iš priespaudos.

Rašydamas šį eilėraštį, norėjau įkvėpti tautiečius, ypač jaunimą, aktyviai veikti, ne tik kalbėti – "Užgims darbai, ne vien žodžiai". Norėjau, kad jie tikėtų Lietuvos ateitimi ir dirbtų jos labui.

Eilėraštis tapo labai populiarus – jis buvo deklamuojamas lietuvių susirinkimuose, vėliau tapo daina. Jis tapo vienu iš lietuvių tautinio atgimimo simbolių, skatinančių aktyvią veiklą, ne tik pasyvų pasipriešinimą.`,
  },
  {
    id: "jau-slaviai-sukilo",
    title: "Jau slaviai sukilo",
    year: "1892",
    category: "istorija",
    excerpt: "Eilėraštis apie slavų tautų išsilaisvinimą ir viltį, kad ir Lietuva išsilaisvins",
    collection: "Pavasario balsai",
    content: `Jau slaviai sukilo. Nuo Juodmarių krašto
Pavasaris eina Karpatų kalnais.
Po Lietuvą žiema. Nei žodžio, nei rašto
Neleidžia erelis, suspaudęs sparnais.

Petys gi į petį, na, vyrai, kas gali,
Sustoję į darbą už mylimą šalį,
Prikelkime Lietuvą mūsų!

Jau laikas iš miego, tautieti, pabusti,
Jau laikas, lietuvi, vaduotis iš pančių!
Gana svetimiesiems po kojų parpusti,
Gana apkvaitumo, gana neramumo,
Gana to sapningo, tuščiausio garbumo!

Tik į darbą greičiau,
Tik mylėkim karščiau,
Tik, vyrai, pajudinkim žemę!

Daugel metų buvai
Lyg apmiręs visai,
Lyg kalinio pančiuos.
Bet dabar jau gana,
Tavo laisvės diena
Jau artinas, jau netoli.

Petys gi į petį, na, vyrai, kas gali,
Sustoję į darbą už mylimą šalį,
Prikelkime Lietuvą mūsų!`,
    background: `"Jau slaviai sukilo" – vienas iš mano eilėraščių, kuriame kalbu apie slavų tautų išsilaisvinimą ir viltį, kad ir Lietuva išsilaisvins. Jį parašiau 1892 metais, jis buvo įtrauktas į "Pavasario balsų" rinkinį.

Šiame eilėraštyje lyginu slavų tautų padėtį, kurios jau pradėjo išsilaisvinti iš priespaudos – "Jau slaviai sukilo. Nuo Juodmarių krašto / Pavasaris eina Karpatų kalnais", su Lietuvos padėtimi, kuri vis dar yra priespaudoje – "Po Lietuvą žiema. Nei žodžio, nei rašto / Neleidžia erelis, suspaudęs sparnais".

Eilėraštyje kviečiu lietuvius vienytis ir kovoti už savo teises – "Petys gi į petį, na, vyrai, kas gali, / Sustoję į darbą už mylimą šalį, / Prikelkime Lietuvą mūsų!" Tai buvo labai aktualu tuo metu, kai Lietuva buvo carinės Rusijos valdžioje, o lietuvių tauta kovojo už savo teises.

Šis eilėraštis tapo vienu iš lietuvių tautinio atgimimo simbolių, skatinančių aktyvią veiklą, ne tik pasyvų pasipriešinimą. Jis buvo deklamuojamas lietuvių susirinkimuose, vėliau tapo daina.`,
  },
  {
    id: "miskais-ateina-ruduo",
    title: "Miškais ateina ruduo",
    year: "1920",
    category: "gamta",
    excerpt: "Eilėraštis apie rudens grožį Lietuvos miškuose",
    collection: "Pavasario balsai",
    content: `Miškais ateina ruduo,
Geltonuoja lapai, krinta;
Vėjas šiaurės pradeda pūsti,
Ir gamtužė visa vysta.

Apsiniaukęs dangus verkia,
Lyg našlaitis, susitraukęs;
Šaltą lietų žemėn merkia,
Tartum kūdikis, apsiblausęs.

Oi, nuliūdo dūšia mano,
Lyg kad rūkas ją apsupo!
Veltui ieško, ko ji trokšta,
Veltui veržias, kur jai rūpi.

Oi, nurimki, dūšia mano!
Kam gi liūsti, kam raudoti?
Juk ne amžiais gyvename,
Reiks ir žemę mums atstoti.

Miškais ateina ruduo,
Geltonuoja lapai, krinta;
Širdis ilgis, rauda, gelia,
Tartum lapas, vėjo skintas.`,
    background: `"Miškais ateina ruduo" – vienas iš mano vėlyvesnių eilėraščių, kuriame apdainuoju rudens grožį Lietuvos miškuose. Jį parašiau 1920 metais, jis buvo įtrauktas į vėlesnius "Pavasario balsų" leidimus.

Šiame eilė  Jį parašiau 1920 metais, jis buvo įtrauktas į vėlesnius "Pavasario balsų" leidimus.

Šiame eilėraštyje aprašau rudens nuotaiką – gelstančius lapus, šiaurės vėją, apsiniaukusį dangų. Ruduo čia simbolizuoja ne tik metų laiką, bet ir žmogaus gyvenimo rudenį, artėjančią senatvę ir mirtį – "Juk ne amžiais gyvename, / Reiks ir žemę mums atstoti".

Rašydamas šį eilėraštį, jau buvau vyresnio amžiaus, todėl jame atsispindi ir mano asmeniniai išgyvenimai, apmąstymai apie gyvenimo prasmę ir mirtį. Tačiau eilėraštyje taip pat yra ir susitaikymo, ramybės – "Oi, nurimki, dūšia mano!"

Šis eilėraštis yra vienas iš mano brandžiausių gamtos lyrikos kūrinių, kuriame gamta ir žmogaus vidinis pasaulis susilieja į vieną visumą. Jis parodo, kad gamta man buvo ne tik grožio šaltinis, bet ir filosofinių apmąstymų įkvėpėja.`,
  },
  {
    id: "nebeuztvenksi-upes",
    title: "Nebeužtvenksi upės",
    year: "1895",
    category: "tevyne",
    excerpt: "Eilėraštis apie nesustabdomą lietuvių tautos atgimimą",
    collection: "Pavasario balsai",
    content: `Nebeužtvenksi upės bėgimo,
Norint sau eitų ji pamažu;
Nebsulaikysi naujo kilimo,
Nors jį pasveikint tau ir baisu.

Naujos idėjos – darbas ne vaiko:
Užtvenktos mėto audrų žaibus!
Nesustabdysi bėgančio laiko,
Nesulaikysi naujo kilimo,
Nors jį pasveikint tau ir baisu.

Vyrai lietuviai, auštančią dieną
Mūsų nors sūnūs visgi išvys!
Griaukime amžiais užverstą sieną,
Norint gailėtųs jos beprotys!

Amžiais pavergta kelias tėvynė;
Jos atgimimą jaučia dvasia.
Ginkim, ką mūsų protėviai gynė!
Žadinkim brolius meile drąsia!

Ginkime kalbą, žemę, jos būdą!
Stokim į darbą, kaip milžinai!
Laimina Dievas sėjamą grūdą,
Laimina vaisių: gema šimtai!`,
    background: `"Nebeužtvenksi upės" – vienas iš mano eilėraščių, kuriame kalbu apie nesustabdomą lietuvių tautos atgimimą. Jį parašiau 1895 metais, jis buvo įtrauktas į pirmąjį "Pavasario balsų" leidimą.

Šiame eilėraštyje lyginu lietuvių tautos atgimimą su upės bėgimu, kurio neįmanoma sustabdyti – "Nebeužtvenksi upės bėgimo, / Norint sau eitų ji pamažu". Tai buvo labai aktualu tuo metu, kai Lietuva buvo carinės Rusijos valdžioje, o lietuvių tauta pradėjo aktyviai kovoti už savo teises.

Eilėraštyje kviečiu lietuvius aktyviai veikti, ne tik laukti – "Griaukime amžiais užverstą sieną", "Ginkime kalbą, žemę, jos būdą! / Stokim į darbą, kaip milžinai!" Tai buvo kvietimas ne tik išsaugoti lietuvių kalbą ir kultūrą, bet ir aktyviai kovoti už Lietuvos laisvę.

Šis eilėraštis tapo vienu iš lietuvių tautinio atgimimo simbolių. Jis buvo deklamuojamas lietuvių susirinkimuose, vėliau tapo daina. Jis įkvėpė daugelį lietuvių kovoti už savo teises ir siekti Lietuvos nepriklausomybės.`,
  },
  {
    id: "oi-neverk-matusele",
    title: "Oi neverk, matušėle",
    year: "1914",
    category: "jausmai",
    excerpt: "Eilėraštis apie motinos skausmą, netekus sūnaus kare",
    collection: "Pavasario balsai",
    content: `Oi neverk, matušėle, kad jaunas sūnus
Eis ginti brangiosios tėvynės!
Kad pavirtęs kaip ąžuolas girių puikus
Lauks teismo dienos paskutinės.

Taip nelaužyk sau rankų, kaip beržo šakas
Kad laužo užrūstintas vėjas;
Tau dar liko sūnų; kas tėvynę praras,
Antros neišmels apgailėjęs.

O jei Dievas daleis tau pagrįžti namo,
Tik ne kaip vergui, be laisvos tėvynės,
Kitas graudžias ašaras tau nuramins,
Ir tave ant širdies palingavęs.

Oi neverk, matušėle, kad jaunas sūnus
Eis ginti brangiosios tėvynės!
Kad pavirtęs kaip ąžuolas girių puikus
Lauks teismo dienos paskutinės.`,
    background: `"Oi neverk, matušėle" – vienas iš mano eilėraščių, kuriame kalbu apie motinos skausmą, netekus sūnaus kare. Jį parašiau 1914 metais, prasidėjus Pirmajam pasauliniam karui, jis buvo įtrauktas į vėlesnius "Pavasario balsų" leidimus.

Šiame eilėraštyje kreipiuosi į motiną, kurios sūnus išeina į karą – "Oi neverk, matušėle, kad jaunas sūnus / Eis ginti brangiosios tėvynės!" Bandau ją paguosti, sakydamas, kad geriau žūti už tėvynę, nei gyventi be jos – "Tau dar liko sūnų; kas tėvynę praras, / Antros neišmels apgailėjęs".

Rašydamas šį eilėraštį, galvojau apie visas motinas, kurių sūnūs žuvo kovose už Lietuvos laisvę – tiek praeityje, tiek dabartyje. Norėjau išreikšti pagarbą jų aukai ir paguosti jas, sakydamas, kad jų sūnų auka nebuvo beprasmė.

Šis eilėraštis tapo labai populiarus – jis buvo deklamuojamas per laidotuves, vėliau tapo daina. Jis tapo vienu iš lietuvių patriotinės poezijos simbolių, išreiškiančių meilę tėvynei ir pasiryžimą aukotis dėl jos.`,
  },
  {
    id: "marijos-giesme",
    title: "Marijos giesmė",
    year: "1895",
    category: "religija",
    excerpt: "Religinė giesmė, skirta Švč. Mergelei Marijai",
    collection: "Pavasario balsai",
    content: `Marija, Marija, skaisčiausia lelija,
Tu švieti aukštai ant dangaus!
Palengvink vergiją, pagelbėk žmoniją,
Išgelbėk nuo priešo baisaus!

Mes, klystantys žmonės, maldaujame Tavo
Apgink mūsų brangią šalį!
Globoki jos sūnus, laimink jų troškimą
Atgauti tėvynės kelius!

Marija, Marija, skaisčiausia lelija,
Tu švieti aukštai ant dangaus!
Palengvink vergiją, pagelbėk žmoniją,
Išgelbėk nuo priešo baisaus!

Ir kūno silpnybė, ir žemės puikybė,
Ir pragaro juodo dvasia
Į prapultį stumia žmonijos daugybę,
Jai rengia vargus paslapčia.

Marija, Marija, skaisčiausia lelija,
Tu švieti aukštai ant dangaus!
Palengvink vergiją, pagelbėk žmoniją,
Išgelbėk nuo priešo baisaus!`,
    background: `"Marijos giesmė" – viena iš mano religinių giesmių, skirta Švč. Mergelei Marijai. Ją parašiau 1895 metais, ji buvo įtraukta į "Pavasario balsų" rinkinį.

Šioje giesmėje kreipiuosi į Mariją, prašydamas jos pagalbos ir globos – "Palengvink vergiją, pagelbėk žmoniją, / Išgelbėk nuo priešo baisaus!" Čia "vergija" ir "priešas" gali būti suprantami tiek tiesiogine prasme (carinė priespauda), tiek perkeltine (nuodėmė, blogis).

Rašydamas šią giesmę, norėjau sujungti religinį ir patriotinį jausmus – "Apgink mūsų brangią šalį! / Globoki jos sūnus, laimink jų troškimą / Atgauti tėvynės kelius!" Tai buvo būdinga mano kūrybai – religija ir tėvynės meilė man buvo neatsiejamos.

Ši giesmė tapo labai populiari – ji buvo giedama bažnyčiose, vėliau tapo viena iš populiariausių lietuviškų giesmių. Ji išreiškia lietuvių tautos religingumą ir viltį, kad Dievas padės jiems išsilaisvinti iš priespaudos.`,
  },
  {
    id: "mano-gimtine",
    title: "Mano gimtinė",
    year: "1895",
    category: "tevyne",
    excerpt: "Eilėraštis apie poeto gimtinę ir jos grožį",
    collection: "Pavasario balsai",
    content: `Miškas ūžia, verkia, gaudžia,
Vėjas žarsto lapus,
Nuliūdimas širdį spaudžia,
Ašaras ištraukia.

Tėviškėlę brangią priminė man vėjas,
Ašaras išspaudė gaili rauda jo;
Kur jinai, kur mano tėviškė brangioji,
Kur galėtų rasti atilsį dvasia?

Kur Dubysos vanduo teka,
Kur Šešupė miela,
Ten lietuvio širdis plaka,
Ten ir mano siela.

Ar atminsi, mano mielas,
Tuos namus, kur gimei?
Ar atminsi, kur motulė
Vargdama augino?

Ar atminsi tuos takelius,
Kur bėgiojom maži?
Ar atminsi tuos žodelius,
Kuriuos ji kalbėjo?

Miškas ūžia, verkia, gaudžia,
Vėjas žarsto lapus,
Nuliūdimas širdį spaudžia,
Ašaras ištraukia.`,
    background: `"Mano gimtinė" – vienas iš mano eilėraščių, kuriame kalbu apie savo gimtinę ir jos grožį. Jį parašiau 1895 metais, jis buvo įtrauktas į "Pavasario balsų" rinkinį.

Šiame eilėraštyje išreiškiu ilgesį savo gimtinei – "Tėviškėlę brangią priminė man vėjas". Miniu Dubysą ir Šešupę – upes, kurios teka per Lietuvą ir simbolizuoja jos grožį – "Kur Dubysos vanduo teka, / Kur Šešupė miela, / Ten lietuvio širdis plaka, / Ten ir mano siela".

Rašydamas šį eilėraštį, galvojau apie savo vaikystę Pasandravyje, apie Dubysos slėnį, kuriame užaugau. Norėjau išreikšti meilę savo gimtinei ir ilgesį jai, kai buvau toli nuo jos.

Šis eilėraštis tapo vienu iš mano populiariausių kūrinių, išreiškiančių meilę gimtinei. Jis buvo deklamuojamas lietuvių susirinkimuose, vėliau tapo daina. Jis padėjo formuoti lietuvių santykį su gimtine kaip su tapatybės dalimi.`,
  },
]
