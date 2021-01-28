<template>
  <div class="main-header mk-fl-r mk-ai-c mk-jc-sb mk-cs-po">
    <el-image class="user-icon" :src="iconPath"></el-image>
    <el-input class="info-search" type="text" prefix-icon="el-icon-position"></el-input>
  </div>
</template>

<script>
import userIcon from './img/favicon.jpg';

export default {
  data() {
    this.iconPath = userIcon;
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-header{
  border-bottom: 1px solid #e6e6e6;
  padding: 0 40px;
  .user-icon{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .info-search::v-deep{
    width: 200px;
    input{
      border-radius: 20px;
    }
  }
}
</style>
