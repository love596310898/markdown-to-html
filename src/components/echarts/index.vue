<template>
    <div class="echarts-panel">
        <div ref="echarts" class="echarts-main"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import { debounce } from 'lodash';
import { addResizeListener } from '@/utils/resize-event';

export default {
  name: 'ECharts',
  props: {
    theme: {
      type: [Object, String],
      default: '',
    },
  },
  data() {
    this.initPorp();
    return {};
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initPorp() {
      this.echarts = null;
      this.eventList = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseup', 'mouseover', 'mouseout', 'globalout', 'contextmenu'];
    },
    initChart() {
      const el = this.$refs.echarts;
      if (!el) return;
      this.echarts = echarts.init(el, this.theme);
      this.eventList.forEach((type) => {
        this.echarts.on(type, (e) => {
          this.$emit(type, e);
        });
      });
      addResizeListener(el, debounce((ev) => {
        this.echarts.resize();
        this.$emit('resize', ev);
      }, 100));
      this.$once('hook:beforeDestory', () => {
        this.el = null;
      });
    },
    setOption(option) {
      if (!this.echarts) return;
      this.echarts.clear();
      this.echarts.setOption(option, true);
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
    .empty {
        position: absolute;
        top: 40%;
        left: 50%;
        margin: 0;
        z-index: 10;
        backface-visibility: hidden;
        transform: translate(-50%, -50%);
    }
}
</style>
