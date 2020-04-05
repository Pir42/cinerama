<template>
  <div id="movie">
    <movie :movie="movie">
      <template v-slot:actions>
        <v-btn class="ma-2" :to="{ name: 'MovieEdit', params: { index: $route.params.index }}">Modifier</v-btn>
        <v-btn @click="deleteMovie" color="error" class="ma-2"> Supprimer</v-btn>
      </template>
    </movie>
  </div>
</template>

<script>
import router from "../router/index";
import Movie from "../components/Movie";

export default {
  data() {
    return {
      movie: window.movies[this.$route.params.index]
    }
  },
  components: {
    Movie
  },
  methods: {
    deleteMovie() {
      window.movies.splice(this.$route.params.index, 1)
      router.push({ path: "/" })
    }
  }
}
</script>

<style>

</style>