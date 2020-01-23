<template>
  <a :href="shareUrl" target="blank">
    <share-btn :service="service" />
  </a>
</template>

<script>
import ShareBtn from '../01_atoms/ShareBtn'
import { generateShareUrl } from '../../plugins/sns'
export default {
  name: 'ShareItem',
  components: { ShareBtn },
  props: {
    title: {
      type: String,
      default: ''
    },
    service: {
      type: String,
      default: ''
    }
  },
  computed: {
    shareUrl() {
      const url = `https://zu-tech.netlify.com${this.$route.path}`
      return generateShareUrl(this.service, this.title, url)
    }
  }
}
</script>
