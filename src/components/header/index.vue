<template>
  <div class="header-wrap mk-fl-r mk-ai-c mk-jc-sb mk-cs-po">
    <el-image class="user-icon" :src="iconPath"></el-image>
    <div class="mk-fl-r mk-ai-c">
      <el-menu :default-active="rootPage" class="el-menu-demo" mode="horizontal" @select="changeRootPage">
        <el-menu-item index="/">组件中心</el-menu-item>
        <el-menu-item index="/main/FontFamily">文档中心</el-menu-item>
      </el-menu>
      <el-input class="info-search" type="text" prefix-icon="el-icon-position"></el-input>
    </div>
  </div>
</template>

<script>
import userIcon from '@/assets/img/favicon.jpg';
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    this.iconPath = userIcon;
    return {};
  },
  computed: {
    ...mapGetters(['rootPage']),
  },
  methods: {
    ...mapMutations(['updateRootPage']),
    changeRootPage(path) {
      this.updateRootPage(path);
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss">
.header-wrap {
  border-bottom: 1px solid #e6e6e6;
  padding: 0 40px;
  .user-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .info-search {
    width: 200px;
    input {
      border-radius: 20px;
    }
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
    .el-menu-item.is-active {
      border-bottom: none;
      color: #409eff;
    }
  }
}
</style>
