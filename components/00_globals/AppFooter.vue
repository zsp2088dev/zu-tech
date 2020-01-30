<template>
  <div style="margin-top: 50px">
    <v-footer absolute>
      <v-col cols="12" class="text-center">
        <small class="copyright">© 2020 ZU TECH.</small>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped lang="scss">
.copyright {
  color: $primary-text;
  font-weight: 300;
}
</style>
