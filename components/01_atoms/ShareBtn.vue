<template>
  <img
    :src="src"
    :alt="service"
    height="50"
    width="50"
    @mouseover="active = true"
    @mouseleave="active = false"
  />
</template>

<script>
export default {
  name: 'ShareBtn',
  props: {
    service: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    src() {
      const status = this.active ? 'on' : 'off'
      return require(`@/assets/icons/${this.service}-${status}.svg`)
    },
  },
}
</script>
