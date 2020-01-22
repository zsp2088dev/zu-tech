<template>
  <v-container>
    <v-row justify="center" align-content="center">
      <v-col v-for="(service, index) in services" :key="index" cols="auto">
        <share-btn :service="service" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShareBtn from '../01_atoms/ShareBtn'
export default {
  name: 'ShareBtnList',
  components: { ShareBtn },
  data() {
    return {
      services: ['Twitter', 'Facebook', 'Pocket', 'Hatena']
    }
  }
}
</script>
