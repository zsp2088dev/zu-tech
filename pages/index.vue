<template>
  <div>
    <card-item-list :cards="entries" />
  </div>
</template>
<script>
import CardItemList from '../components/03_organisms/CardItemList'
import { findAllEntries } from '../plugins/contentful'
export default {
  components: { CardItemList },
  async asyncData() {
    const entries = await findAllEntries()
    return { entries }
  }
}
</script>
