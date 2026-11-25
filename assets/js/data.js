/* ==========================================================
   His Friends Vocal Group — site content you will update often
   ========================================================== */

window.SITE = {
  email: "hisfriendsvocalgroup@gmail.com",
  phone: "+41 77 402 65 01",
  spotify: "https://open.spotify.com/album/7uxyCu8vKLSwpPcSZ9tXUo",
  spotifyEmbed: "https://open.spotify.com/embed/album/7uxyCu8vKLSwpPcSZ9tXUo?utm_source=generator&theme=0",
  youtube: "https://music.youtube.com/channel/UCtGvPUkNabrx5GVUdlduYRA",
  appleMusic: "https://music.apple.com/us/artist/1855687495",
  /* Contact-form automation (auto-reply email, Google Sheet, SMS).
     Paste the Google Apps Script web-app link here (see automation/SETUP.md).
     While it is empty, the form uses FormSubmit (no auto-reply). */
  formEndpoint: "https://script.google.com/macros/s/AKfycby92qXz_4xoycTMlj1vhsxjbPvOOMcK-63oGQcknK6zcHC7M8YnC5PepA4IRAdQUdVh/exec"
};

/* Members, pictured left to right on the CD booklet */
window.MEMBERS = [
  "Tiago Daniel Ferreira do Vale",
  "Yosef Fekadu Gebre",
  "Dániel Mentes",
  "Kirubel Manyazewal Mussie",
  "Akira Fukushima"
];

/* Tracklist from the back of the CD (sp = Spotify track ID, ms = length) */
window.TRACKS = [
  { sp: "0JJWwVnJn3Yum5Tt44AjAI", ms: 189160, t: "In meiner stillen Zeit", c: "Music: Dietrich Georg, Bradley McKenzie · Lyrics: Dietrich Georg" },
  { sp: "0MxFhKVNPDjpZsM9pjo6Tr", ms: 186386, t: "Be Thou My Vision", c: "Music: arr. Akira Fukushima · Lyrics: Mary Elizabeth Byrne, Eleanor Hull" },
  { sp: "18l5cEtg5HNWEWNoUrydkY", ms: 147053, t: "Sing to Me of Heaven", c: "Music: Benjamin Burke Beall · Lyrics: Ada Powell" },
  { sp: "0Y1OwnZCS2xSExwlLfQ2c5", ms: 206533, t: "In the Heart of Jesus", c: "Music: Charles Henry Forrest, arr. Dániel Mentes · Lyrics: Alice Pugh" },
  { sp: "3Aoq4VJUAYFeLlX8x7BeUf", ms: 243600, t: "The Way That He Loves", c: "Music & Lyrics: W. Elmo Mercer" },
  { sp: "4G8ze1gpRDkawU4MHarYJk", ms: 124800, t: "If Ye Love Me", c: "Music: Thomas Tallis · Lyrics: John 14:15–17" },
  { sp: "2PB1M54zD82qSLa04Kdn6c", ms: 200920, t: "I Will Follow Thee", c: "Music: James Lawson Elginburg, arr. Dániel Mentes · Lyrics: James Lawson Elginburg" },
  { sp: "69ytclwqXpQPlith7V7V4V", ms: 202533, t: "Wer nur den lieben Gott lässt walten", c: "Music: Georg Neumark, arr. Dániel Mentes · Lyrics: Georg Neumark" },
  { sp: "5jLjt41kois8xNgNFIy6tt", ms: 207813, t: "My Anchor and My Sail", c: "Music: David Durham, arr. Akira Fukushima · Lyrics: David Durham / Rolf Schneider" },
  { sp: "1oSv5OcztT87Y34QtLgQmv", ms: 136575, t: "O When Shall I See Jesus", c: "Music: William Walker · Lyrics: John Leland" }
];

/* ----------------------------------------------------------
   UPCOMING CONCERTS
   Copy the example below, remove the // and fill it in.
   Concerts whose date has passed are hidden automatically.
   Put the poster/photo in assets/img/concerts/ .
   ---------------------------------------------------------- */
window.CONCERTS = [
  {
    date: "2026-11-28", time: "17:30",
    title: { en: "Concert with His Friends", de: "Konzert mit His Friends", fr: "Concert avec His Friends", it: "Concerto con His Friends" },
    venue: "Adventhaus Basel",
    address: "Rümelinbachweg 60, Basel, Switzerland",
    entry: { en: "Free entry – collection", de: "Eintritt frei – Kollekte", fr: "Entrée libre – collecte", it: "Ingresso libero – colletta" },
    image: "assets/img/concerts/basel-2026-11-28.jpg"
  },
  {
    date: "2026-11-29", time: "17:00",
    title: { en: "Concert with His Friends", de: "Konzert mit His Friends", fr: "Concert avec His Friends", it: "Concerto con His Friends" },
    venue: "Reformierte Kirche Reigoldswil",
    address: "Reformierte Kirche Reigoldswil, Switzerland",
    entry: { en: "Free entry – collection", de: "Eintritt frei – Kollekte", fr: "Entrée libre – collecte", it: "Ingresso libero – colletta" },
    image: "assets/img/concerts/reigoldswil-2026-11-29.jpg"
  },
  {
    date: "2026-12-19", time: "19:00",
    title: { en: "Lichtklänge im Advent – A cappella concert", de: "Lichtklänge im Advent – A-cappella-Konzert", fr: "Lichtklänge im Advent – concert a cappella", it: "Lichtklänge im Advent – concerto a cappella" },
    venue: "Auf dem Viertel 2, Bad Bergzabern",
    address: "Auf dem Viertel 2, Bad Bergzabern, Germany", timezone: "Europe/Berlin",
    entry: { en: "A warm welcome to all", de: "Herzliche Einladung", fr: "Bienvenue à tous", it: "Siete tutti invitati" },
    image: "assets/img/concerts/bad-bergzabern-2026-12-19.jpg"
  }
  // ,{
  //   date: "2026-12-20",            // YYYY-MM-DD
  //   time: "17:00",
  //   title: { en: "Christmas Concert", de: "Weihnachtskonzert", fr: "Concert de Noël", it: "Concerto di Natale" },
  //   venue: "Adventgemeinde Basel",
  //   address: "Street 1, 4000 Basel",
  //   entry: { en: "Free entry – collection", de: "Eintritt frei – Kollekte", fr: "Entrée libre – collecte", it: "Ingresso libero – colletta" },
  //   image: "assets/img/concerts/christmas.jpg",
  //   text: { en: "Short description…", de: "Kurze Beschreibung…", fr: "Brève description…", it: "Breve descrizione…" }
  // },
];

/* ----------------------------------------------------------
   GALLERY — add a line per photo (put files in assets/img/gallery/)
   ---------------------------------------------------------- */
/* set = row it appears in (group, voices, moments). cap = caption key in i18n.js (gal.*).
   Member portraits use name + part instead. */
window.GALLERY = [
  /* Members: Soprano, Alto, Tenor, Bass */
  { set: "voices", src: "assets/img/gallery/daniel-mentes-soprano.jpg", name: "Dániel Mentes", part: "gal.soprano" },
  { set: "voices", src: "assets/img/gallery/dzer-oleksandr-alto.jpg", name: "Dzer Oleksandr", part: "gal.alto" },
  { set: "voices", src: "assets/img/gallery/tiago-ferreira-do-vale-tenor.jpg", name: "Tiago Daniel Ferreira do Vale", part: "gal.tenor" },
  { set: "voices", src: "assets/img/gallery/yosef-fekadu-gebre-bass.jpg", name: "Yosef Fekadu Gebre", part: "gal.bass" },
  { set: "voices", src: "assets/img/gallery/akira-fukushima-alto.jpg", name: "Akira Fukushima", part: "gal.alto", note: "gal.former" },
  { set: "voices", src: "assets/img/gallery/kirubel-manyazewal-mussie-baritone.jpg", name: "Kirubel Manyazewal Mussie", part: "gal.baritone", note: "gal.former" },
  /* Group photos */
  { set: "group", src: "assets/img/gallery/group-arms-crossed.jpg", cap: "gal.sidebyside" },
  { set: "group", src: "assets/img/gallery/group-blue-shirts.jpg", cap: "gal.shoot" },
  { set: "group", src: "assets/img/gallery/group-laughing-cross.jpg", cap: "gal.shootfun" },
  { set: "group", src: "assets/img/gallery/group-theatre-seats.jpg", cap: "gal.balcony" },
  /* Concerts & rehearsals */
  { set: "moments", src: "assets/img/gallery/hungary-after-concert.jpg", cap: "gal.hungary" },
  { set: "moments", src: "assets/img/gallery/advent-concert-candlelight.jpg", cap: "gal.advent", wide: true },
  { set: "moments", src: "assets/img/gallery/christmas-concert-group.jpg", cap: "gal.christmas" },
  { set: "moments", src: "assets/img/gallery/rehearsal-around-table.jpg", cap: "gal.table" },
  { set: "moments", src: "assets/img/gallery/rehearsal-music-stands.jpg", cap: "gal.worship" },
  { set: "moments", src: "assets/img/gallery/prayer-before-concert.jpg", cap: "gal.prayer" },
  { set: "moments", src: "assets/img/gallery/christmas-devotion-concert.jpg", cap: "gal.devotion" },
  { set: "moments", src: "assets/img/gallery/church-after-rehearsal.jpg", cap: "gal.sabbath" },
  { set: "moments", src: "assets/img/gallery/musikalische-andacht-rehearsal.jpg", cap: "gal.andacht" },
  { set: "moments", src: "assets/img/gallery/after-church-concert.jpg", cap: "gal.churchconcert" },
  { set: "moments", src: "assets/img/album-cover.jpg", cap: "gal.album" }
];
