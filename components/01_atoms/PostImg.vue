<template>
  <v-img :alt="title" :src="src" width="640px" height="275px" />
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
