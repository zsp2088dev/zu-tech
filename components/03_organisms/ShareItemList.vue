<template>
  <v-container>
    <v-row justify="center" align-content="center">
      <v-col v-for="(service, index) in services" :key="index" cols="auto">
        <share-item :title="title" :service="service" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShareItem from '../02_molecules/ShareItem'
export default {
  name: 'ShareItemList',
  components: { ShareItem },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      services: ['Twitter', 'Facebook', 'Pocket', 'Hatena'],
    }
  },
}
</script>
