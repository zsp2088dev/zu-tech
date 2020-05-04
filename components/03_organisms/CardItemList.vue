<template>
  <v-container>
    <v-row justify="center" align-content="start">
      <v-col v-for="(card, index) in cards" :key="index" cols="auto">
        <card-item
          :slug="card.slug"
          :src="card.src"
          :title="card.title"
          :text="card.text"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardItem from '../02_molecules/CardItem'
export default {
  name: 'CardItemList',
  components: { CardItem },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
