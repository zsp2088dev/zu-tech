<template>
  <v-container class="post-page">
    <v-row justify="center" align-content="center">
      <v-col cols="auto">
        <post-title :title="entry.title" />
      </v-col>
    </v-row>

    <v-row justify="center" align-content="center">
      <v-col cols="auto">
        <post-img :src="entry.src" />
      </v-col>
    </v-row>

    <share-item-list :title="entry.title" />

    <post-content :body="entry.body" />
  </v-container>
</template>

<script>
import { findEntryById } from '../../plugins/contentful'
import PostTitle from '../../components/01_atoms/PostTitle'
import PostImg from '../../components/01_atoms/PostImg'
import PostContent from '../../components/03_organisms/PostContent'
import ShareItemList from '../../components/03_organisms/ShareItemList'

export default {
  components: { ShareItemList, PostContent, PostImg, PostTitle },
  async asyncData({ params, payload }) {
    if (payload) {
      return { entry: payload }
    } else {
      return { entry: await findEntryById(params.id) }
    }
  }
}
</script>

<style scoped lang="scss">
.post-page {
  max-width: 800px;
}
</style>
