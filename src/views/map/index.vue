<template>
  <div class="map-wrap">
    <Echarts ref="map"></Echarts>
    <div>{{test}}</div>
  </div>
</template>

<script>
import Echarts from '@/components/echarts/index.vue';

export default {
  components: { Echarts },
  data() {
    return {
      msg: 'test',
    };
  },
  computed: {
    test() {
      return `${this.msg}1111`;
    },
  },
  mounted() {
    console.log(this);
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
