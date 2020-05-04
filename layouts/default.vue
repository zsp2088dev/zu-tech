<template>
  <v-app class="app">
    <div>
      <app-header />
      <nuxt />
      <app-footer />
    </div>
  </v-app>
</template>
<script>
import AppHeader from '../components/00_globals/AppHeader'
import AppFooter from '../components/00_globals/AppFooter'
export default {
  components: { AppFooter, AppHeader },
}
</script>
