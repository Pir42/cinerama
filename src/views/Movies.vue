<template>
  <div id="movies">
    <h1>Mes films</h1>
    <v-col cols="8">
      <v-text-field 
        v-model="filter" 
        append-icon="mdi-movie" 
        outlined label="Recherche par titre, date ou réalisateur" 
        dense
        >
      </v-text-field>
    </v-col>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="4" v-for="(movie, index) in filtered_movies" :key="index">
        <movie :movie="movie" class="ma-2 pa-3">
          <template v-slot:actions>
            <v-btn outlined :to="{ name: 'Movie', params: { index: index }}">Voir</v-btn>
          </template>
        </movie>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Movie from "../components/Movie"

export default {
  data() {
    return {
      movies: window.movies,
      filter: ""
    }
  },
  components: {
    Movie
  },
  computed: {
    filtered_movies() {
      return this.movies.filter((m) => 
        m.title.includes(this.filter) ||
        m.date.toString().includes(this.filter) ||
        m.realisator.name.includes(this.filter)
      )
    }
  }
}
</script>

<style>

</style>