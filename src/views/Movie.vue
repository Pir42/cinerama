<template>
  <div id="movie">
    <movie :movie="movie"></movie>
  </div>
</template>

<script>
import Movie from "../components/Movie";

export default {
  data() {
    return {
      movie: window.movies[this.$route.params.index]
    }
  },
  components: {
    Movie
  }
}
</script>

<style>

</style>