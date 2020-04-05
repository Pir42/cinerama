<template>
    <div id="realisator">
      <v-card shaped>
        <v-card-title>{{ realisator.name }}</v-card-title>
        <v-card-subtitle>{{ realisator.nationality }} - Né le {{ realisator.birth_date }}</v-card-subtitle>
      </v-card>
    </div>
</template>

<script>
export default {
  props: {
    realisator: Object
  }
}
</script>

<style>

</style>