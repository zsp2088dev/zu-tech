<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <div class="markdown" v-html="content" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Prism from '../../plugins/prism'
export default {
  name: 'PostContent',
  props: {
    body: {
      type: String,
      default: '',
    },
  },
  computed: {
    content() {
      return this.$md.render(this.body)
    },
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss">
.markdown {
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: $primary-text;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
  }

  h2 {
    border-top: solid 1px $border-base;
    border-bottom: solid 1px $border-base;
    margin: 30px 0;
    padding: 30px 0;
  }

  h3,
  h4,
  h5 {
    margin: 20px 0;
    padding: 20px 0;
  }

  p {
    color: $regular-text;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: $primary !important;
  }

  ul,
  li {
    color: $regular-text;
  }

  img {
    width: 100%;
    max-width: 800px;
    margin: 30px 0;
  }

  ul,
  ol {
    margin-bottom: 15px;
  }
}
</style>
