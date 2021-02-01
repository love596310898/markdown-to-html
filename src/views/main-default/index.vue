<template>
  <div class="markdown-wrap">
    <components :is="docName"></components>
  </div>
</template>

<script>

import components from '@/views/doc-markdown/index';

export default {
  name: 'Markdown',
  components,
  props: {
    docName: {
      type: String,
      riquered: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.markdown-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
}
</style>
