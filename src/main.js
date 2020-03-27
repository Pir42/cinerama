import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router'

// components
import App from './App.vue'

// config
Vue.config.productionTip = false
Vue.use(Vuetify)

window.movies = [
  {
    title: "Titanic",
    realisator: {
      name: "James Cameroun",
      nationality: "American",
      birth_date: "19/03/1975"
    },
    date: 1963,
    lang: "fr",
    genre: "science-fiction"
  }
]

new Vue({
  router,
  vuetify : new Vuetify(),
  render: h => h(App)
}).$mount('#app')
