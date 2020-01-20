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
import TagItemList from '../components/03_organisms/TagItemList'
import SearchBox from '../components/02_molecules/SearchBox'
export default {
  components: { SearchBox, TagItemList, CardItemList },
  async asyncData() {
    const entries = await findAllEntries()
    return { entries }
  }
}
</script>
