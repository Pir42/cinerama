<template>
  <div id="movie-edit">
    <h3 class="ml-2">Modification d'un film</h3>
    <movie-form :movie="movie"></movie-form>
    <v-btn text :to="{ name: 'Movie', params: { index: index }}">Retour</v-btn>
  </div>
</template>

<script>
import MovieForm from "../components/MovieForm";

export default {
  data() {
    return {
      movie: window.movies[this.$route.params.index],
      index: this.$route.params.index
    }
  },
  components: {
    MovieForm
  }
}
</script>

<style>

</style>