<template>
  <v-card width="400" height="300" max-width="400" max-height="300">
    <card-img :src="src" />
    <card-title :title="title" />
    <card-text :text="text" />
  </v-card>
</template>

<script>
import CardImg from '../01_atoms/CardImg'
import CardTitle from '../01_atoms/CardTitle'
import CardText from '../01_atoms/CardText'
export default {
  name: 'CardItem',
  components: { CardText, CardTitle, CardImg },
  props: {
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
  }
}
</script>
