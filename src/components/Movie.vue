<template>
  <div id="movie">
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.date }}</p>
    <p>{{ movie.genre }}</p>

    <p>À propos du réalisateur</p>
    <ul>
      <li>{{ movie.realisator.name }}</li>
      <li>Date de naissance : {{ movie.realisator.birth_date }}</li>
      <li>Nationalité : {{ movie.realisator.nationality }}</li>
    </ul>

    <slot name="actions"></slot>
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