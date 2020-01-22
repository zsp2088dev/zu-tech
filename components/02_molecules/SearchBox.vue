<template>
  <v-container>
    <v-row justify="center" align-content="center" style="height: 100px">
      <v-col cols="auto">
        <label>
          <input
            v-model="inputKeyword"
            type="text"
            placeholder="SEARCH"
            class="search-field"
          />
        </label>
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

<style scoped lang="scss">
.search-field {
  border: 1px solid $secondary-text;
  border-radius: 10px;
  color: $primary-text;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 1px;
  padding: 12px 24px;
  width: 400px;

  &:hover,
  &:focus {
    outline: 0;
  }
}
</style>
