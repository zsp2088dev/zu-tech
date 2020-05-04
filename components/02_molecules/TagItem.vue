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
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.tag-item {
  position: relative;
  display: inline-block;
  text-decoration: none;

  &::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: scale(1, 1);
  }
}
</style>
