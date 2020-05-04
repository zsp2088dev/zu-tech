<template>
  <div>
    <search-box @keyword="setKeyword" />
    <tag-item-list @keyword="setKeyword" />
    <card-item-list :cards="filteredEntries" />
  </div>
</template>
<script>
import CardItemList from '../components/03_organisms/CardItemList'
import { findAllEntries } from '../plugins/contentful'
import TagItemList from '../components/03_organisms/TagItemList'
import SearchBox from '../components/02_molecules/SearchBox'
import { getFilteredEntries } from '../plugins/fuse'
export default {
  components: { SearchBox, TagItemList, CardItemList },
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    filteredEntries() {
      return getFilteredEntries(this.keyword, this.entries)
    },
  },
  async asyncData() {
    const entries = await findAllEntries()
    return { entries }
  },
  methods: {
    setKeyword(keyword) {
      this.keyword = keyword
    },
  },
}
</script>
