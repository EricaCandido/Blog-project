export const checkedPost = (objectArray) =>
  objectArray.map((obj, i) => ({
    ...obj,
    image: `https://picsum.photos/200/300?${i}`,
  }));

export const postsJson = [
  {
    id: 1,
    title: "Le migliori band rock degli anni '70",
    slug: "le-migliori-band-rock-degli-anni-70",
    body: "Gli anni '70 sono stati un periodo d'oro per la musica rock, con l'emergere di band iconiche che hanno definito il suono di un'intera generazione. Band come Led Zeppelin, Pink Floyd, The Rolling Stones e Queen hanno scritto brani indimenticabili e hanno lasciato un'impronta duratura nella storia della musica. I loro concerti energici e le performance straordinarie hanno catturato l'immaginazione del pubblico e hanno contribuito a plasmare il panorama musicale per gli anni a venire.",
    date: "22-01-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "I segreti per organizzare un concerto di successo",
    slug: "i-segreti-per-organizzare-un-concerto-di-successo",
    body: "Organizzare un concerto richiede una pianificazione attenta e una buona gestione degli eventi. Dall'acquisizione della location all'organizzazione della promozione, ci sono diversi fattori da considerare per garantire il successo dell'evento. È importante selezionare band o artisti talentuosi, coordinare con i fornitori di servizi, gestire la logistica e garantire un'esperienza straordinaria per il pubblico. Con la giusta pianificazione e l'impegno necessario, è possibile creare un concerto indimenticabile che entusiasmerà gli appassionati di musica.",
    date: "28-01-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "I migliori festival musicali nel mondo",
    slug: "i-migliori-festival-musicali-nel-mondo",
    body: "I festival musicali sono diventati un'esperienza imperdibile per gli amanti della musica di tutto il mondo. Eventi come Coachella, Glastonbury, Tomorrowland e Woodstock hanno attirato milioni di persone in cerca di buona musica, atmosfera festosa e connessione con artisti di talento. I festival offrono una varietà di generi musicali, performance mozzafiato e la possibilità di creare ricordi indimenticabili. Che tu sia appassionato di rock, pop, EDM o jazz, c'è sicuramente un festival musicale adatto ai tuoi gusti.",
    date: "04-02-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "I concerti più attesi dell'anno",
    slug: "i-concerti-piu-attesi-dell-anno",
    body: "L'anno offre una serie di concerti imperdibili per gli amanti della musica. Dalle reunion delle band storiche ai tour mondiali degli artisti più popolari del momento, c'è sempre qualcosa di emozionante da aspettarsi. Concerti come quelli di U2, Beyoncé, Foo Fighters e Taylor Swift promettono performance spettacolari e momenti indimenticabili. Assicurati di segnare le date dei concerti più attesi dell'anno nel tuo calendario e preparati a vivere momenti magici insieme ad altri fan entusiasti.",
    date: "12-03-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "Come scegliere la chitarra perfetta per te",
    slug: "come-scegliere-la-chitarra-perfetta-per-te",
    body: "La scelta della chitarra giusta è fondamentale per ogni chitarrista, sia che tu sia un principiante o un professionista. Dovresti considerare il tuo stile musicale preferito, il suono desiderato, il tipo di chitarra (acustica, elettrica, classica) e il tuo budget. Prova diversi modelli e marche, chiedi consigli ad esperti e leggi recensioni online per trovare la chitarra che si adatta meglio alle tue esigenze. Ricorda che la chitarra perfetta per te è quella che ti ispira a suonare e ti fa sentire a tuo agio durante le tue sessioni musicali.",
    date: "19-03-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    title: "I migliori album del decennio",
    slug: "i-migliori-album-del-decennio",
    body: "Negli ultimi dieci anni, molti album hanno lasciato un'impronta indelebile nella scena musicale. Da capolavori indie a blockbuster pop, ci sono stati molti dischi che hanno conquistato i cuori degli ascoltatori. Album come '21' di Adele, 'To Pimp a Butterfly' di Kendrick Lamar, 'Lemonade' di Beyoncé e 'Random Access Memories' dei Daft Punk sono solo alcune delle gemme che hanno ridefinito la musica nel corso del decennio. Assicurati di dare un'ascoltata a questi album e di scoprire le perle nascoste che hanno catturato l'essenza del periodo.",
    date: "25-03-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    title: "I segreti per una performance live memorabile",
    slug: "i-segreti-per-una-performance-live-memorabile",
    body: "Le performance live sono il momento in cui gli artisti possono connettersi direttamente con il pubblico e creare un'esperienza unica. Per realizzare una performance memorabile, è importante prepararsi adeguatamente. Pratica le tue canzoni, lavora sulla tua presenza scenica e coinvolgi il pubblico. Fai attenzione ai dettagli tecnici, come il suono e le luci, per garantire un'esperienza ottimale per te e per il pubblico. Ricorda, una performance live coinvolgente e autentica può lasciare un'impressione duratura sui fan e farti emergere come artista.",
    date: "02-04-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    title: "Come diventare un produttore musicale di successo",
    slug: "come-diventare-un-produttore-musicale-di-successo",
    body: "Il ruolo di un produttore musicale è fondamentale nella creazione di brani di successo. Se desideri intraprendere questa carriera, è importante acquisire competenze tecniche e musicali solide. Studia la teoria musicale, impara a utilizzare software di produzione, sviluppa un orecchio allenato e cerca sempre di migliorare le tue abilità. Collabora con artisti emergenti, sperimenta con nuovi suoni e stili, e cerca di creare un suono distintivo che ti contraddistingua. Ricorda che il successo come produttore musicale richiede dedizione, passione e una costante ricerca di eccellenza.",
    date: "09-04-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    title: "Le icone della musica jazz che devi conoscere",
    slug: "le-icone-della-musica-jazz-che-devi-conoscere",
    body: "La musica jazz ha prodotto alcune delle icone più influenti della storia della musica. Artisti come Louis Armstrong, Miles Davis, Ella Fitzgerald e John Coltrane hanno contribuito a definire il genere e hanno ispirato generazioni di musicisti. Le loro improvvisazioni virtuose, il senso del ritmo e la passione per l'espressione musicale hanno reso il jazz una forma d'arte senza tempo. Scopri i capolavori di questi artisti e immergiti nell'universo affascinante del jazz.",
    date: "16-04-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 10,
    title: "I concerti più indimenticabili nella storia",
    slug: "i-concerti-piu-indimenticabili-nella-storia",
    body: "La storia della musica è ricca di concerti che sono diventati leggendari per le loro performance epiche e momenti iconici. Dai concerti dei Beatles al Shea Stadium agli show di Michael Jackson al Wembley Stadium, questi eventi hanno segnato un'epoca e hanno influenzato il modo in cui viviamo la musica. Se hai la possibilità, scopri registrazioni o filmati di questi concerti storici e immergiti nella magia di quei momenti unici che hanno fatto la storia della musica.",
    date: "23-04-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 11,
    title: "Come avviare una band di successo",
    slug: "come-avviare-una-band-di-successo",
    body: "Avviare una band di successo richiede impegno, talento e una buona dose di lavoro di squadra. Inizia cercando musicisti con cui condividi la stessa visione e passione. Scegli uno stile musicale che ti appassiona e sviluppa un sound unico. Pratica insieme, componi canzoni originali e crea una presenza online per far conoscere la tua band. Cerca opportunità di esibirsi dal vivo, partecipa a concorsi musicali e connettiti con altri artisti e professionisti del settore. Ricorda che il successo di una band dipende dalla dedizione e dalla determinazione di ogni membro del gruppo.",
    date: "30-04-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 12,
    title: "I migliori luoghi per suonare dal vivo",
    slug: "i-migliori-luoghi-per-suonare-dal-vivo",
    body: "Se desideri esibirsi dal vivo, è importante conoscere i migliori luoghi in cui suonare. Ogni città ha la propria scena musicale e offre una varietà di locali, club e festival in cui artisti emergenti possono esibirsi. Fai una ricerca sulla tua zona e scopri i luoghi che ospitano concerti dal vivo. Contatta i proprietari dei locali, invia il tuo materiale e chiedi la possibilità di suonare. Partecipare a showcase e concorsi può anche offrire un'opportunità per farsi notare da addetti ai lavori. Ricorda di fare networking con altri musicisti e di sfruttare ogni occasione per metterti in mostra.",
    date: "07-05-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 13,
    title: "I festival musicali più intimi e unici",
    slug: "i-festival-musicali-piu-intimi-e-unici",
    body: "Se sei alla ricerca di un'esperienza musicale unica, potresti considerare di partecipare a festival musicali più intimi. Questi eventi offrono un'atmosfera più raccolta e una connessione più diretta con gli artisti. Festival come Bonnaroo, Primavera Sound e Electric Forest sono noti per creare un'esperienza intima in cui puoi scoprire nuove band, partecipare a workshop e immergerti in un'atmosfera unica. Preparati a vivere giorni di musica, amicizia e magia in un contesto diverso dai tradizionali festival mainstream.",
    date: "14-05-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 14,
    title: "Come creare una playlist perfetta",
    slug: "come-creare-una-playlist-perfetta",
    body: "Creare una playlist perfetta richiede cura e attenzione ai dettagli. Scegli uno scopo o un tema per la tua playlist, come 'Musica per rilassarsi' o 'Canzoni per un viaggio in macchina'. Seleziona brani che si complementano tra loro in termini di stile, mood e ritmo. Cerca un equilibrio tra classici e nuove scoperte, e considera la sequenza delle canzoni per creare un flusso armonico. Dai un nome accattivante alla tua playlist e condividila con amici o su piattaforme di streaming per farla scoprire ad altri appassionati di musica.",
    date: "21-05-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 15,
    title: "I migliori concerti unplugged di tutti i tempi",
    slug: "i-migliori-concerti-unplugged-di-tutti-i-tempi",
    body: "I concerti unplugged offrono un'esperienza musicale intima e senza filtri, in cui gli artisti si esibiscono in versioni acustiche delle loro canzoni. Alcuni dei migliori concerti unplugged nella storia includono quello di Nirvana per MTV, Eric Clapton a 'Unplugged', e i Pearl Jam a 'MTV Unplugged'. Questi concerti hanno mostrato un lato diverso degli artisti, mettendo in evidenza la loro abilità musicale e la bellezza delle canzoni senza l'ausilio di effetti elettronici. Scopri questi concerti e lasciati trasportare dalla magia dell'acustico.",
    date: "28-05-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 16,
    title: "I migliori album live di tutti i tempi",
    slug: "i-migliori-album-live-di-tutti-i-tempi",
    body: "Gli album live offrono l'opportunità di vivere l'energia dei concerti senza essere fisicamente presenti. Alcuni dei migliori album live nella storia della musica includono 'Live at Wembley '86' dei Queen, 'Live at the Apollo' di James Brown, 'The Last Waltz' dei The Band e 'Frampton Comes Alive!' di Peter Frampton. Questi album catturano l'atmosfera e l'entusiasmo dei concerti dal vivo e permettono di rivivere le emozioni ogni volta che li ascolti. Aggiungi alcuni di questi album alla tua collezione e lasciati trasportare in un'esperienza live.",
    date: "04-06-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 17,
    title: "Le canzoni più romantiche di tutti i tempi",
    slug: "le-canzoni-piu-romantiche-di-tutti-i-tempi",
    body: "La musica è un potente mezzo per esprimere l'amore e le emozioni più profonde. Alcune delle canzoni più romantiche di tutti i tempi includono 'Unchained Melody' dei Righteous Brothers, 'Wonderful Tonight' di Eric Clapton, 'My Heart Will Go On' di Celine Dion e 'Make You Feel My Love' di Adele. Queste canzoni evocano sentimenti di amore, passione e tenerezza, e sono perfette per momenti speciali con la persona amata. Crea una playlist romantica con queste canzoni e fai sì che il potere della musica avvicini ancora di più i cuori.",
    date: "11-06-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 18,
    title: "I migliori festival di musica elettronica",
    slug: "i-migliori-festival-di-musica-elettronica",
    body: "La musica elettronica ha un impatto potente sulla scena musicale e i festival dedicati a questo genere offrono esperienze uniche. Festival come Tomorrowland, Ultra Music Festival e Electric Daisy Carnival attirano migliaia di fan di musica elettronica da tutto il mondo. Questi eventi offrono performance epiche di DJ di fama internazionale, scenografie spettacolari e un'atmosfera di festa senza eguali. Se sei un amante della musica elettronica, non perderti l'opportunità di partecipare a uno di questi festival per vivere una vera e propria immersione nella cultura EDM.",
    date: "18-06-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 19,
    title: "I migliori album di debutto nella storia della musica",
    slug: "i-migliori-album-di-debutto-nella-storia-della-musica",
    body: "L'album di debutto di un artista può essere una dichiarazione di intenti e un'opera che lascia un'impronta indelebile nella storia della musica. Alcuni dei migliori album di debutto includono 'Please Please Me' dei Beatles, 'Illmatic' di Nas, 'Are You Experienced' di Jimi Hendrix e 'The College Dropout' di Kanye West. Questi album hanno mostrato il talento e la visione unica degli artisti sin dal loro esordio e hanno avuto un impatto duraturo sulla musica. Esplora questi album di debutto e scopri il punto di partenza di alcune delle più grandi carriere musicali.",
    date: "25-06-2023",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 20,
    title: "Come promuovere la tua musica online",
    slug: "come-promuovere-la-tua-musica-online",
    body: "La promozione della tua musica online è fondamentale per farti conoscere dal pubblico e raggiungere nuovi fan. Crea profili su piattaforme di streaming come Spotify, Apple Music e SoundCloud, caricando le tue canzoni e creando playlist. Utilizza i social media per condividere aggiornamenti sulla tua musica, pubblicare video e interagire con i fan. Collabora con altri artisti, partecipa a contest musicali e invia la tua musica a blog e playlist curate da addetti ai lavori. Sfrutta ogni opportunità per far conoscere la tua musica e costruire una base di fan solida.",
    date: "02-07-2023",
    image: "https://picsum.photos/200/300",
  },
];

// export const postsJson = [
//   {
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     slug: "sunt-aut-facere-repellat-provident-occaecati-excepturi-optio-reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     date: "22-01-2023",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 2,
//     title: "qui est esse",
//     slug: "qui-est-esse",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     date: "28-01-2023",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     slug: "ea-molestias-quasi-exercitationem-repellat-qui-ipsa-sit-aut",
//     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//     date: "04-02-2023",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     id: 4,
//     title: "eum et est occaecati",
//     slug: "eum-et-est-occaecati",
//     body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
//     date: "10-02-2023",
//     image:
//       "https://cdn.lorem.space/images/movie/.cache/400x300/pulp-fiction-1994.jpg",
//   },
//   {
//     id: 5,
//     title: "nesciunt quas odio",
//     slug: "nesciunt-quas-odio",
//     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     date: "10-02-2023",
//     image: "https://cdn.lorem.space/images/book/.cache/400x300/clean-code.jpeg",
//   },
//   {
//     id: 6,
//     title: "dolorem eum magni eos aperiam quia",
//     slug: "dolorem-eum-magni-eos-aperiam-quia",
//     body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     date: "12-02-2023",
//     image:
//       "https://cdn.lorem.space/images/album/.cache/400x300/harleys-in-hawaii_katy-perry.jpg",
//   },
//   {
//     id: 7,
//     title: "magnam facilis autem",
//     slug: "magnam-facilis-autem",
//     body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
//     date: "16-02-2023",
//     image:
//       "https://cdn.lorem.space/images/hotel/.cache/400x300/pexels-max-vakhtbovych-7061675.jpg",
//   },
//   {
//     id: 8,
//     title: "dolorem dolore est ipsam",
//     slug: "dolorem-dolore-est-ipsam",
//     body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
//     date: "18-02-2023",
//     image:
//       "https://cdn.lorem.space/images/fashion/.cache/400x300/wesley-tingey-3mGnYRUNIck-unsplash.jpg",
//   },
//   {
//     id: 9,
//     title: "nesciunt iure omnis dolorem tempora et accusantium",
//     slug: "nesciunt-iure-omnis-dolorem-tempora-et-accusantium",
//     body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
//     date: "24-02-2023",
//     image:
//       "https://cdn.lorem.space/images/furniture/.cache/400x300/behnam-norouzi-phXwnWWz-BM-unsplash.jpg",
//   },
//   {
//     id: 10,
//     title: "optio molestias id quia eum",
//     slug: "optio-molestias-id-quia-eum",
//     body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
//     date: "01-03-2023",
//     image:
//       "https://cdn.lorem.space/images/car/.cache/400x300/pexels-mike-3589586.jpg",
//   },
//   {
//     id: 11,
//     title: "et ea vero quia laudantium autem",
//     slug: "et-ea-vero-quia-laudantium autem",
//     body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
//     date: "04-03-2023",
//     image:
//       "https://cdn.lorem.space/images/movie/.cache/400x300/django-unchained-2012.jpg",
//   },
//   {
//     id: 12,
//     title: "in quibusdam tempore odit est dolorem",
//     slug: "in-quibusdam-tempore-odit-est-dolorem",
//     body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
//     date: "04-03-2023",
//     image:
//       "https://cdn.lorem.space/images/drink/.cache/400x300/joseph-gonzalez-EOnHT42R1a8-unsplash.jpg",
//   },
//   {
//     id: 13,
//     title: "dolorum ut in voluptas mollitia et saepe quo animi",
//     slug: "dolorum-ut-in-voluptas-mollitia-et-saepe-quo-animi",
//     body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
//     date: "08-03-2023",
//     image:
//       "https://cdn.lorem.space/images/house/.cache/400x300/pexels-expect-best-323780.jpg",
//   },
//   {
//     id: 14,
//     title: "voluptatem eligendi optio",
//     slug: "voluptatem-eligendi-optio",
//     body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
//     date: "12-03-2023",
//     image:
//       "https://cdn.lorem.space/images/fashion/.cache/400x300/atikh-bana-_KaMTEmJnxY-unsplash.jpg",
//   },
//   {
//     id: 15,
//     title: "eveniet quod temporibus",
//     slug: "eveniet-quod-temporibus",
//     body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
//     date: "15-03-2023",
//     image:
//       "https://cdn.lorem.space/images/hotel/.cache/400x300/shop-slo-vhztm9QC0L0-unsplash.jpg",
//   },
//   {
//     id: 16,
//     title:
//       "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
//     slug: "sint-suscipit-perspiciatis-velit-dolorum-rerum-ipsa-laboriosam-odio",
//     body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
//     date: "17-03-2023",
//     image:
//       "https://cdn.lorem.space/images/pizza/.cache/400x300/pexels-sydney-troxell-708587.jpg",
//   },
//   {
//     id: 17,
//     title: "fugit voluptas sed molestias voluptatem provident",
//     slug: "fugit-voluptas-sed-molestias-voluptatem-provident",
//     body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
//     date: "23-03-2023",
//     image:
//       "https://cdn.lorem.space/images/shoes/.cache/400x300/irene-kredenets-dwKiHoqqxk8-unsplash.jpg",
//   },
//   {
//     id: 18,
//     title: "voluptate et itaque vero tempora molestiae",
//     slug: "voluptate-et-itaque-vero-tempora-molestiae",
//     body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
//     date: "28-03-2023",
//     image:
//       "https://cdn.lorem.space/images/watch/.cache/400x300/malik-shibly-Yx-egSamtKQ-unsplash.jpg",
//   },
//   {
//     id: 19,
//     title: "adipisci placeat illum aut reiciendis qui",
//     slug: "adipisci-placeat-illum-aut-reiciendis-qui",
//     body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
//     date: "29-03-2023",
//     image:
//       "https://cdn.lorem.space/images/watch/.cache/400x300/taylor-beach-z7zo6b1nfKM-unsplash.jpg",
//   },
//   {
//     id: 20,
//     title: "doloribus ad provident suscipit at",
//     slug: "doloribus-ad-provident-suscipit-at",
//     body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
//     date: "02-04-2023",
//     image:
//       "https://cdn.lorem.space/images/shoes/.cache/400x300/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
//   },
// ];

//creare un'api da richiamare in index.js (riga 55)
// export default function handler(req, res) {
//   if (req.method === "GET") {
//     res.status(200).json(checkedPost(postsJson));
//   } else {
//     res.status(401).json({ message: "Method not granted" });
//   }
// }

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(tableDataMock);
  } else {
    res.status(401).json({ message: "Method not granted" });
  }
}

//----------------------
export const tableLegendMock = [
  { id: 1, pax: 4, type: "A", name: "Legenda" },
  { id: 2, pax: 4, type: "B", name: "Legenda" },
  { id: 3, pax: 4, type: "C", name: "Legenda" },
  { id: 4, pax: 3, type: "D", name: "Legenda" },
  { id: 5, pax: 2, type: "A", name: "Legenda" },
  { id: 6, pax: 8, type: "A", name: "Legenda" },
  { id: 7, pax: 8, type: "B", name: "Legenda" },
];
