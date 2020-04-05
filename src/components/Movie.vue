<template>
  <div id="movie">
    <v-row>
      <v-col cols="2">
        <v-img width="200" :src="movie.img"></v-img>
      </v-col>
      <v-col cols="3">
        <h1>{{ movie.title }}</h1>
        <p>Réalisé en {{ movie.date }}</p>
        <p>{{ movie.genre }}</p>
        <v-rating v-model="movie.rating" half-increments readonly color="yellow darken-3"></v-rating>
      </v-col>
      <v-col cols="4">
        <realisator :realisator="movie.realisator"/>
      </v-col>
    </v-row>    
    <slot name="actions"></slot>
  </div>
</template>

<script>
import Realisator from "./Realisator";

export default {
  props: {
    movie: Object
  },
  components: {
    Realisator
  }
}
</script>

<style>

</style>