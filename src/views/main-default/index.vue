<template>
  <div class="markdown-wrap">
    <Install></Install>
  </div>
</template>

<script>
import Install from '@/documents/README.md';

export default {
  name: 'Markdown',
  components: { Install },
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.markdown-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
