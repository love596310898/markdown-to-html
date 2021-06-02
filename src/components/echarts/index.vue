<template>
  <div ref="echarts-panel" class="echarts-panel">
    <div ref="el" class="echarts-main"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
import { debounce } from 'lodash';
import { addResizeListener, removeResizeListener } from '@/utils/resize-event';

export default {
  name: 'ECharts',
  props: {
    theme: {
      type: [Object, String],
      default: '',
    },
  },
  data() {
    return {
      $echarts: null,
      $eventList: [
        'click',
        'dblclick',
        'mousedown',
        'mousemove',
        'mouseup',
        'mouseover',
        'mouseout',
        'globalout',
        'contextmenu',
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      if (!this.$refs.el) return;
      this.$data.$echarts = echarts.init(this.$refs.el, this.theme);
      this.$data.$eventList.forEach((type) => {
        this.$data.$echarts.on(type, (e) => {
          this.$emit(type, e);
        });
      });
      const resizeHandler = debounce((ev) => {
        this.$data.$echarts.resize();
        this.$emit('resize', ev);
        console.log(111);
      }, 500);
      addResizeListener(this.$refs['echarts-panel'], resizeHandler);
      this.$once('hook:beforeDestroy', () => {
        removeResizeListener(this.$refs['echarts-panel'], resizeHandler);
      });
    },
    setOption(option) {
      if (!this.$data.$echarts) return;
      this.$data.$echarts.clear();
      this.$data.$echarts.setOption(option, true);
    },
    setTheme() {
      this.initChart();
    },
  },
};
</script>
<style lang="scss" scoped>
.echarts-panel {
  width: 100%;
  height: 100%;
  user-select: none;
  position: relative;
  .echarts-main {
    width: 100%;
    height: 100%;
  }
}
</style>
