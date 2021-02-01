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
  data() {
    return {
      activeMenu: this.$route.params.docName,

    };
  },
  methods: {
    select(item) {
      router.push({ path: `/main/${item.id}` });
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
