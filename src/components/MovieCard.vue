<template>
  <div id="movie">
    <v-card>
      <v-card-title>{{ movie.title }}</v-card-title>
      <v-card-subtitle>{{ movie.genre }}</v-card-subtitle>
      <v-card-text>
        Réalisé en {{ movie.date }} par {{ movie.realisator.name }}
        <v-rating v-model="movie.rating" half-increments readonly color="yellow darken-3"></v-rating>
      </v-card-text>
      <v-card-actions>
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  }
}
</script>

<style>

</style>