<template>
    <div class="my-menu-item">
        <el-submenu v-if="hasChilden" :index="menuItem.id">
            <template #title>
                <span>{{ menuItem.name }}</span>
            </template>
            <MenuItem v-for="child in menuItem.childen" :key="child.id" :menuItem="child"></MenuItem>
        </el-submenu>
        <el-menu-item v-else :index="menuItem.id" @click="select(menuItem)">{{ menuItem.name }}</el-menu-item>
    </div>
</template>

<script>
export default {
  name: 'MenuItem',
  inject: ['select'],
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasChilden() {
      return this.menuItem.childen && Array.isArray(this.menuItem.childen) && this.menuItem.childen.length > 0;
    },
  },
};
</script>

<style>
</style>
