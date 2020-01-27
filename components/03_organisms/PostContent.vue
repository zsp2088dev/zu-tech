<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <div v-html="content" class="markdown" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PostContent',
  props: {
    body: {
      type: String,
      default: ''
    }
  },
  computed: {
    content() {
      return this.$md.render(this.body)
    }
  }
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
    color: $secondary-text;
    font-size: 15px;
  }

  a {
    text-decoration: none;
  }

  ul,
  li {
    color: $secondary-text;
  }

  img {
    max-height: 450px;
  }
}
</style>
