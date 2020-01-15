<template>
  <v-container class="app-header">
    <v-row justify="center" align-content="center">
      <v-col cols="1">
        <app-logo />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppLogo from './AppLogo'
export default {
  name: 'AppHeader',
  components: { AppLogo }
}
</script>

<style scoped lang="scss">
.app-header {
  border-bottom: solid 1px $border-base;
}
</style>
