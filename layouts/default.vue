<template>
  <v-app class="app">
    <div>
      <app-header />
      <nuxt />
    </div>
  </v-app>
</template>
<script>
import AppHeader from '../components/00_globals/AppHeader'
export default {
  components: { AppHeader }
}
</script>
