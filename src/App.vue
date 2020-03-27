  
<template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-movie</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Voir tous mes films</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="amber darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title><router-link to="/" class="white--text no-underline">Cinérama</router-link></v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="mt-5">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>

<style>
.no-underline {
  text-decoration: none;
}
</style>