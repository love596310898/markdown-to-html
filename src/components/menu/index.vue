<template>
  <div class="side-left-wrap">
    <el-menu class="mk-pt-20" :default-active="activeMenu">
      <MenuItem v-for="menu in menuList" :key="menu.id" :menuItem="menu"></MenuItem>
    </el-menu>
  </div>
</template>

<script>
import MenuItem from '@/components/menu-item/index.vue';
import router from '@/router';

export default {
  components: { MenuItem },
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
  provide() {
    return {
      select: this.select,
    };
  },
  computed: {
    // 初始化菜单选中状态
    activeMenu() {
      const getDefault = (firstMenu) => {
        if (!firstMenu) return '';
        const { childen } = firstMenu;
        if (childen && childen.length > 0) {
          return getDefault(childen[0]);
        }
        return firstMenu.id;
      };
      return getDefault(this.menuList[0]);
    },
  },
  methods: {
    select(item) {
      router.push({ path: item.id });
    },
  },
};
</script>

<style lang="scss">
.side-left-wrap{
  .el-menu{
    height: 100%;
  }
}
</style>
