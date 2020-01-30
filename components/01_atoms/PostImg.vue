<template>
  <v-img
    :alt="title"
    :src="src"
    :contain="true"
    height="275px"
    max-width="640px"
  />
</template>

<script>
export default {
  name: 'PostImg',
  props: {
    title: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>
