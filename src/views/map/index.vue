<template>
  <div class="map-wrap">
    <Echarts ref="map"></Echarts>
  </div>
</template>

<script>
import Echarts from '@/components/echarts/index.vue';

export default {
  components: { Echarts },
  mounted() {
    this.$nextTick(() => {
      this.$refs.map.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        }],
      });
    });
  },
};
</script>

<style lang="scss">
  .map-wrap{
    height: 400px;
    margin-top: 100px;
  }
</style>
