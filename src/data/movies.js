import genres from "./genres";

// Genres
// "🤖 Science-fiction" -> 0
// "📚 Historique" -> 1
// "🖍️ Animation" -> 2
// "🎭 Comédie" -> 3
// "🗺️ Documentaire" -> 4
// "🔪 Horreur" -> 5
// "🍿 Un classique" -> 6
// "🎥 Autre" -> 7

const movies = [
  {
    title: "Titanic",
    realisator: {
      name: "James Cameroun",
      nationality: "American",
      birth_date: "1954-08-16"
    },
    date: 1997,
    lang: "en",
    genre: genres[6],
    rating: 3.5,
    img: "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/25/11/18/5224976.jpg"
  },
  {
    title: "Interstellar",
    realisator: {
      name: "Christopher Nolan",
      nationality: "British",
      birth_date: "1970-07-30"
    },
    date: 2014,
    lang: "en",
    genre: genres[0],
    rating: 5,
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIVryzUKVaqs-5yb0-uHykg7Ob4rUWFl-Ojl28OvBExh8Xc8GT"
  },
  {
    title: "Kill Bill",
    realisator: {
      name: "Quentin Tarantino",
      nationality: "American",
      birth_date: "1963-03-27"
    },
    date: 2003,
    lang: "en",
    genre: genres[6],
    rating: 4,
    img: "https://fr.web.img2.acsta.net/medias/nmedia/18/35/13/44/18364816.jpg"
  },
  {
    title: "Cars",
    realisator: {
      name: "John Lasseter",
      nationality: "American",
      birth_date: "1957-01-12"
    },
    date: 2006,
    lang: "en",
    genre: genres[2],
    rating: 3.5,
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQjsLvJFbOxp4aSkpeTWAsa9J_BLTLRa5xX63M-n266daAGzO8"
  },
  {
    title: "Le Seigneur des anneaux : La Communauté de l'anneau",
    realisator: {
      name: "Peter Jackson",
      nationality: "New-Zealand",
      birth_date: "1961-10-31"
    },
    date: 2001,
    lang: "en",
    genre: genres[6],
    rating: 4.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrPYBWNct4YCZCs-Ktj1UjKK2MWWZuP3NG7YJ1otFdhQv3gZ2"
  },
  {
    title: "Shining",
    realisator: {
      name: "Stanley Kubrick",
      nationality: "American",
      birth_date: "1928-07-26"
    },
    date: 1980,
    lang: "en",
    genre: genres[5],
    rating: 3,
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyub5mS3wPMSXcUYccXgIDN480wL2RuEnjmGKmjwwhJrRGeNOP"
  }
]

export default movies