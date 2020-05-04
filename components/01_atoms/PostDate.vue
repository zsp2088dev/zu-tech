<template>
  <time>{{ createdAt }}</time>
</template>

<script>
export default {
  name: 'PostDate',
  props: {
    date: {
      type: Date,
      default: new Date(),
    },
  },
  computed: {
    createdAt() {
      return this.date
    },
  },
}
</script>
