<template>
  <div class="side-left-wrap">
    <el-menu class="mk-pt-20" :default-active="activeMenu">
      <MenuItem v-for="menu in menuList" :key="menu.id" :menuItem="menu"></MenuItem>
    </el-menu>
  </div>
</template>

<script>
import MenuItem from '@/components/menu-item/index.vue';

export default {
  components: { MenuItem },
  provide() {
    return {
      select: this.select,
    };
  },
  data() {
    return {
      activeMenu: '1',
      menuList: [
        {
          id: '1',
          name: '测试菜单1',
        },
        {
          id: '2',
          name: '测试菜单2',
        },
        {
          id: '3',
          name: '测试菜单3',
        },
        {
          id: '4',
          name: '测试菜单4',
        },
      ],
    };
  },
  methods: {
    select(item) {
      console.log(item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.side-left-wrap::v-deep{
  .el-menu{
    height: 100%;
  }
}
</style>
