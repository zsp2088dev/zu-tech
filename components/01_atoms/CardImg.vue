<template>
  <v-img :alt="title" :src="src" width="400px" height="150px" />
</template>

<script>
export default {
  name: 'CardImg',
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
