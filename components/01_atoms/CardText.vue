<template>
  <v-card-text class="card-text">
    {{ text }}
  </v-card-text>
</template>

<script>
export default {
  name: 'CardText',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.card-text {
  font-size: 12px;
  color: $secondary-text;
  line-height: 1.3;
}
</style>
