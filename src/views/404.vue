<template>
  <div class="not-found mk-fl-c mk-jc-c mk-ai-c">
    <div class="text-tip">not found this page</div>
    <div>
      <router-link :to="{ path: '/' }">返回主页</router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.not-found{
  height: 100vh;
  .text-tip{
    color: var(primary-danger);
  }
}
</style>
