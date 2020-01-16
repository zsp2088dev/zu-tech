<template>
  <nuxt-link :to="url" style="text-decoration: none">
    <v-card width="300" height="225" max-width="300" max-height="225">
      <card-img :src="src" />
      <card-title :title="title" />
      <card-text :text="text" />
    </v-card>
  </nuxt-link>
</template>

<script>
import CardImg from '../01_atoms/CardImg'
import CardTitle from '../01_atoms/CardTitle'
import CardText from '../01_atoms/CardText'
export default {
  name: 'CardItem',
  components: { CardText, CardTitle, CardImg },
  props: {
    slug: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    url() {
      return `/posts/${this.slug}`
    }
  }
}
</script>
