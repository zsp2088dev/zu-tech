<template>
  <v-container fluid class="app-header">
    <v-row justify="center" align-content="center" style="height: 100px">
      <v-col cols="auto">
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
  width: 80%;
  border-bottom: solid 1px $border-base;
}
</style>
