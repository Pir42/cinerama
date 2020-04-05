import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'
import Movie from "../views/Movie.vue";
import MovieEdit from "../views/MovieEdit.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movie/:index',
    name: 'Movie',
    component: Movie
  },
  {
    path: 'movie/:index/edit',
    name: "MovieEdit",
    component: MovieEdit
  }
]

const router = new VueRouter({
  routes
})

export default router
