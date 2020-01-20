<template>
  <div>
    <search-box />
    <tag-item-list />
    <card-item-list :cards="entries" />
  </div>
</template>
<script>
import CardItemList from '../components/03_organisms/CardItemList'
import { findAllEntries } from '../plugins/contentful'
import SearchBox from '../components/02_molecules/SearchBox'
import TagItemList from '../components/03_organisms/TagItemList'
export default {
  components: { TagItemList, SearchBox, CardItemList },
  async asyncData() {
    const entries = await findAllEntries()
    return { entries }
  }
}
</script>
