<template>
  <v-container>
    <v-row justify="center" align-content="center">
      <v-col cols="6">
        <v-text-field
          v-model="inputKeyword"
          placeholder="記事を検索"
          outlined
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SearchBox',
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    inputKeyword: {
      get() {
        return this.keyword
      },
      set(keyword) {
        this.keyword = keyword
        this.$emit('keyword', keyword)
      }
    }
  }
}
</script>
