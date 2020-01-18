<template>
  <span class="tag-text">
    {{ tag }}
  </span>
</template>

<script>
export default {
  name: 'TagText',
  props: {
    tag: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.tag-text {
  font-size: 20px;
  color: $primary-text;
}
</style>
