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
import Header from '@/components/header/index.vue';
import Menu from '@/components/menu/index.vue';
import menuList from '@/router/home';

export default {
  name: 'Main',
  components: { Header, Menu },
  data() {
    return {};
  },
  computed: {
    menuList() {
      return menuList.map((item) => ({
        name: item.meta.name,
        id: item.path || '/',
      }));
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
