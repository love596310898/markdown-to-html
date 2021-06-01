<template>
  <div :class="['model-wrap', layoutHandler]">
    <el-radio-group v-if="rangeOption" v-model="activeRadio" :style="layoutGutterHandler" fill="#0e13cd" @change="radioChange">
      <el-radio-button v-for="range in rangeOption" :key="range.value" :label="range.value">{{ range.label }}</el-radio-button>
    </el-radio-group>
    <el-date-picker
      clearable
      type="daterange"
      v-model="dataRange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
      :value-format="valueFormat"
      @change="datePickerChange"
    >
    </el-date-picker>
  </div>
</template>

<script>
import { formatTime, getTimeRange } from '@/utils/time';
import * as typeAssert from '@/utils/isType';

export default {
  props: {
    // 快捷选取选项
    rangeOption: {
      type: Array,
      default: null,
    },
    // 时间选择器选项
    pickerOptions: {
      type: Object,
      default: () => ({
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      }),
    },
    // 时间格式化样式
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd hh:mm:ss',
    },
    value: {
      type: Array,
      default: null,
    },
    // 布局方式
    layout: {
      type: String,
      default: 'left',
    },
    // 布局间隔距离
    layoutGutter: {
      type: String,
      default: '10px',
    },
  },
  data() {
    return {
      dataRange: this.value,
      activeRadio: null, // 默认选中的索引
    };
  },
  computed: {
    // 布局样式
    layoutHandler() {
      return this.layout === 'left' ? 'layout-left' : 'layout-right';
    },
    // 布局间隔
    layoutGutterHandler() {
      return this.layout === 'left' ? `margin-right: ${this.layoutGutter};` : `margin-left: ${this.layoutGutter};`;
    },
  },
  created() {
    this.init();
    this.radioChange();
  },
  methods: {
    datePickerChange() {
      this.activeRadio = '';
      this.$emit('input', this.dataRange);
    },
    init() {
      if (Array.isArray(this.rangeOption)) {
        const opt = this.rangeOption.find((i) => i.default);
        if (opt) {
          this.activeRadio = opt.value;
        }
      }
    },
    radioChange() {
      if (this.activeRadio) {
        const dayCount = Number(this.activeRadio);
        let startDate;
        let endDate;
        if (Number.isNaN(dayCount)) {
          let dateRange = getTimeRange(this.activeRadio);
          const opt = this.rangeOption.find((i) => i.value === this.activeRadio);
          if (!dateRange && opt && opt.method && typeAssert.isFunction(opt.method)) {
            dateRange = opt.method();
          }
          if (Array.isArray(dateRange) && dateRange.length === 2) {
            const [s, e] = dateRange;
            startDate = s;
            endDate = e;
          } else {
            this.dataRange = null;
            this.$emit('input', this.dataRange);
            return;
          }
        } else {
          endDate = new Date();
          startDate = new Date(`${formatTime(endDate.getTime() - (dayCount - 1) * 24 * 3600 * 1000, 'yyyy-MM-dd')} 00:00:00`);
        }
        this.dataRange = [startDate, endDate];
        this.$emit('input', [formatTime(startDate, this.valueFormat), formatTime(endDate, this.valueFormat)]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.model-wrap::v-deep {
  display: flex;
  align-items: center;
}
.model-wrap.layout-right {
  flex-direction: row-reverse;
}
</style>
