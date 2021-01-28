<template>
  <div class="main-wrap">
    <Header class="header"></Header>
    <SideLeft class="side"></SideLeft>
    <div class="container">
      <transition name="fade" type="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './header.vue';
import SideLeft from './side-left.vue';

export default {
  name: 'Main',
  components: { Header, SideLeft },
  data() {
    return {

    };
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
  .container{
    width: 700px;
    margin:0 auto;
    position: relative;
    padding-right: 200px;
  }
}
</style>
