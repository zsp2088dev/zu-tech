<template>
  <v-card-title class="card-title">
    {{ title }}
  </v-card-title>
</template>

<script>
export default {
  name: 'CardTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.card-title {
  color: $primary-text;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
}
</style>
