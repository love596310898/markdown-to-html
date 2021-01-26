<template>
    <div>
      <transition name="fade" type="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>

export default {
  name: 'Main',
  data() {
    return {

    };
  },
};
</script>

<style>

</style>
