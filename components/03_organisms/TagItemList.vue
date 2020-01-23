<template>
  <v-container>
    <v-row justify="center" align-content="center" style="height: 50px">
      <v-col v-for="(tag, index) in tags" :key="index" cols="auto">
        <div @click="click(tag)">
          <tag-item :tag="tag" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TagItem from '../02_molecules/TagItem'
export default {
  name: 'TagItemList',
  components: { TagItem },
  data() {
    return {
      tags: ['ALL', 'WEB', 'DESIGN']
    }
  },
  methods: {
    click(tag) {
      const keyword = tag === 'ALL' ? '' : tag
      this.$emit('keyword', keyword)
    }
  }
}
</script>
