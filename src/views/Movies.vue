<template>
  <div id="movies">
    <h1>Mes films</h1>
    <v-col cols="8">
      <v-text-field 
        v-model="filter" 
        append-icon="mdi-movie" 
        outlined label="Recherche par titre, date ou réalisateur" 
        clearable
        dense
        >
      </v-text-field>
    </v-col>
    <v-row>
      
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: window.movies,
      filter: ""
    }
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