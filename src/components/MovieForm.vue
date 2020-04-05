<template>
  <div id="movie-form">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-img width="200" :src="movie.img"></v-img>
            <v-text-field v-model="movie.img" label="Lien vers l'image du film" class="mt-3"></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="movie.title" label="Titre"></v-text-field>
            <v-text-field v-model="movie.date" label="Date de sortie"></v-text-field>
            <v-text-field v-model="movie.lang" label="Langue"></v-text-field>
            <v-select
            :items="genres"
            label="Genre"
            v-model="movie.genre"
            ></v-select>
            <v-rating v-model="movie.rating" half-increments color="yellow darken-3"></v-rating>
          </v-col>
          <v-col cols="3">
            <v-container>
              <h5 class="mb-5">À propos du réalisateur</h5>
              <realisator-form :realisator="movie.realisator"></realisator-form>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import RealisatorForm from "./RealisatorForm";

export default {
  props: {
    movie: Object
  },
  data() {
    return {
      genres: window.genres
    }
  },
  components: {
    RealisatorForm
  }
}
</script>

<style>

</style>