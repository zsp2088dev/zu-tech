<template>
  <nuxt-link :to="url" style="text-decoration: none;">
    <v-hover v-slot:default="{ hover }">
      <v-card
        :elevation="hover ? 6 : 2"
        width="350"
        height="280"
        max-width="350"
        max-height="280"
      >
        <card-img :src="src" />
        <card-title :title="title" />
        <card-text :text="text" />
      </v-card>
    </v-hover>
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
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    url() {
      return `/posts/${this.slug}`
    },
  },
}
</script>
