<template>
  <v-img :alt="title" :src="src" width="300px" height="112.5px" />
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
