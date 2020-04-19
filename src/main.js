import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router'

// components
import App from './App.vue'

// config
Vue.config.productionTip = false
Vue.use(Vuetify)

// data
import movies from "./data/movies";
import genres from "./data/genres";

window.genres = genres
window.movies = movies

new Vue({
  router,
  vuetify : new Vuetify(),
  render: h => h(App)
}).$mount('#app')
