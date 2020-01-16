<template>
  <v-container>
    <v-layout>
      <div v-html="contents" class="markdown" />
    </v-layout>
  </v-container>
</template>

<script>
import { findEntryById } from '../../plugins/contentful'

export default {
  computed: {
    contents() {
      const body = this.entry.body
      return this.$md.render(body)
    }
  },
  async asyncData({ params }) {
    const entry = await findEntryById(params.id)
    return { entry }
  }
}
</script>
