<template>
  <div id="movie">
    <v-card class="pa-4" outlined>
      <v-list-item-content>
        <h5>{{ movie.title }}</h5>
        <p>{{ movie.date }}</p>
        <p>{{ movie.genre }}</p>
      </v-list-item-content>
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