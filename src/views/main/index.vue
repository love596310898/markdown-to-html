<template>
  <div class="main-wrap">
    <Header class="header"></Header>
    <Menu :menuList="menuList" class="side"></Menu>
    <div class="container">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import doc from '@/views/doc-markdown/index';
import Header from '@/components/header/index.vue';
import Menu from '@/components/menu/index.vue';

export default {
  name: 'Main',
  components: { Header, Menu },
  data() {
    return {};
  },
  computed: {
    menuList() {
      return Object.keys(doc).map((key) => ({ id: `/main/${key}`, name: key }));
    },
  },
};
</script>

<style lang="scss" scoped>
.main-wrap{
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-top: 80px;
  padding-left: 200px;
  .header{
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
  }
  .side{
    width: 200px;
    height: calc(100% - 80px);
    position: fixed;
    top: 80px;
    left: 0;
  }
}
</style>
