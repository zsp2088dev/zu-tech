<template>
  <h1 class="post-title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'PostTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.post-title {
  color: $primary-text;
  font-size: 25px;
  font-weight: 400;
  padding: 30px 0;
}
</style>
