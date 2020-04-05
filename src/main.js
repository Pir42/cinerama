import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router'

// components
import App from './App.vue'

// config
Vue.config.productionTip = false
Vue.use(Vuetify)

window.genres = [
  "🤖 Science-fiction",
  "📚 Historique",
  "🖍️ Animation",
  "🎭 Comédie",
  "🗺️ Documentaire",
  "🔪 Horreur",
  "🍿 Un classique",
  "🎥 Autre"
]

window.movies = [
  {
    title: "Titanic",
    realisator: {
      name: "James Cameroun",
      nationality: "American",
      birth_date: "1975-03-19"
    },
    date: 1963,
    lang: "fr",
    genre: "🍿 Un classique",
    rating: 4,
    img: "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/25/11/18/5224976.jpg"
  },
  {
    title: "Titanic",
    realisator: {
      name: "James Cameroun",
      nationality: "American",
      birth_date: "1975-03-19"
    },
    date: 1963,
    lang: "fr",
    genre: "🍿 Un classique",
    rating: 4,
    img: "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/25/11/18/5224976.jpg"
  },
  {
    title: "Titanic",
    realisator: {
      name: "James Cameroun",
      nationality: "American",
      birth_date: "1975-03-19"
    },
    date: 1963,
    lang: "fr",
    genre: "🍿 Un classique",
    rating: 4,
    img: "http://fr.web.img6.acsta.net/r_1280_720/pictures/19/10/25/11/18/5224976.jpg"
  }
]

new Vue({
  router,
  vuetify : new Vuetify(),
  render: h => h(App)
}).$mount('#app')
