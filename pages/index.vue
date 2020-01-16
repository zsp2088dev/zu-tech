<template>
  <div>
    <search-box />
    <card-item-list :cards="entries" />
  </div>
</template>
<script>
import CardItemList from '../components/03_organisms/CardItemList'
import { findAllEntries } from '../plugins/contentful'
import SearchBox from '../components/02_molecules/SearchBox'
export default {
  components: { SearchBox, CardItemList },
  async asyncData() {
    const entries = await findAllEntries()
    return { entries }
  }
}
</script>
