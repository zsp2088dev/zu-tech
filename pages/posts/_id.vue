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
  head() {
    return {
      title: `${this.entry.title} | ${process.env.website.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.entry.text
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `${this.entry.title} | ${process.env.website.title}`
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.website.url}${this.$route.path}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.entry.title} | ${process.env.website.title}`
        },

        {
          hid: 'og:description',
          property: 'og:description',
          content: this.entry.text
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.entry.src
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  },
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
