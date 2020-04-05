<template>
  <div id="realisator-form">
    <v-form>
      <v-text-field v-model="realisator.name" label="Nom"></v-text-field>
      <v-text-field v-model="realisator.nationality" label="Nationalité"></v-text-field>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="dateFormatted"
            label="Date de naissance"
            persistent-hint
            prepend-icon="mdi-event"
            @blur="date = parseDate(dateFormatted)"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="realisator.birth_date" no-title @input="menu = false" locale="fr"></v-date-picker>
      </v-menu>
    </v-form>
  </div>
</template>

<script>
export default {
  props: {
    realisator: Object
  },
  data() {
    return {
      menu: false
    }
  },
  computed: {
    dateFormatted() {
      return this.formatDate(this.realisator.birth_date)
    }
  },
  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>

<style>

</style>