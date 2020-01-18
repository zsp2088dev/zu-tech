<template>
  <div class="tag-item">
    <tag-text :tag="tag" />
  </div>
</template>

<script>
import TagText from '../01_atoms/TagText'
export default {
  name: 'TagItem',
  components: { TagText },
  props: {
    tag: {
      type: String,
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>
