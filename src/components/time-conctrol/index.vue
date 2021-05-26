<template>
    <div :class="['model-wrap', layoutHandler]">
        <el-radio-group v-model="radioValue" :style="layoutGutterHandler" @change="radioChange">
            <el-radio-button v-for="(range, index) in rangeOption" :key="index" :label="range.value">
                {{ range.label }}
            </el-radio-button>
        </el-radio-group>
        <el-date-picker
            v-model="dateRange"
            clearable
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
            value-format="yyyy-MM-dd"
            @change="datePickerChange"
        >
        </el-date-picker>
    </div>
</template>

<script>
import { formatTime } from '@/utils/time';

export default {
  props: {
    // 时间范围配置选项
    rangeOption: {
      type: Array,
      default: () => [
        {
          label: '今天',
          value: 1,
          timeUnit: 'day',
        },
        {
          label: '一周',
          value: 7,
          timeUnit: 'day',
        },
        {
          label: '一个月',
          value: 30,
          timeUnit: 'day',
        },
      ],
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
    // 自定义默认时间
    defaultTime: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.initNotPesponsiveProp();
  },
  data() {
    return {
      defaultTimeUnit: 'day', // 默认事件单位
      radioValue: '', // 默认时间范围
      dateRange: [], // 时间范围
      rowDay: 0,
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
  mounted() {
    this.$nextTick(() => {
      if (this.rangeOption.length > 0) {
        if (this.defaultTime.length > 0 && this.defaultTime[0] && this.defaultTime[1]) {
          const startTime = this.defaultTime[0];
          const endTime = this.defaultTime[1];
          this.dateRange = [startTime.split(' ')[0], endTime.split(' ')[0]];
          this.submit();
        } else {
          this.computeRadioValue();
        }
      }
    });
  },
  methods: {
    // 初始化非响应式属性
    initNotPesponsiveProp() {
      // 时间选择器可选时间范围配置
      this.pickerOptions = {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      };
      // 计算时间范围
      this.dateInfo = {};
      this.rangeOption.forEach((i) => {
        this.dateInfo[i.value] = getTimeRangeByUnit(i.value, i.timeUnit || this.defaultTimeUnit);
      });
    },
    // 计算默认时间范围
    computeRadioValue() {
      const opt = this.rangeOption.filter((item) => item.default);
      if (opt.length > 0) {
        this.radioValue = opt[0].value;
        this.radioChange(this.radioValue);
      }
    },
    // 切换时间范围
    radioChange(value) {
      let dateRangeArr = [new Date(), new Date()];
      if (value === 1) {
        this.rowDay = 1;
      } else {
        this.rowDay = 0;
        dateRangeArr = this.dateInfo[value];
      }
      const endTime = formatTime(dateRangeArr[1]);

      if (value == 7) {
        const sd = dateRangeArr[0];
        if (sd / 3600 / 24 > parseInt(sd / 3600 / 24)) {
          var newSd = sd + 3600 * 24 * 1000;
        }
        var startTime = formatTime(newSd);
      } else {
        var startTime = formatTime(dateRangeArr[0]);
      }

      this.dateRange = [startTime.split(' ')[0], endTime.split(' ')[0]];
      this.submit();
    },
    // 时间选择框输入
    datePickerChange(value) {
      if (value && value.length > 0) {
        this.dateRange = [value[0], value[1]];
      } else {
        this.dateRange = [];
        this.radioValue = '';
      }
      this.submit();
    },
    // 提交至
    submit() {
      if (this.dateRange && this.dateRange.length > 0) {
        this.$emit('dateChange', [`${this.dateRange[0]} 00:00:00`, `${this.dateRange[1]} 23:59:59`], this.rowDay);
      } else {
        this.$emit('dateChange', [], this.rowDay);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.model-wrap::v-deep {
    display: flex;
    align-items: center;
    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        background-color: var(--primary-bg);
        border-color: var(--primary-bg);
        box-shadow: -1px 0 0 0 var(--primary-bg);
    }
}
.model-wrap.layout-right {
    flex-direction: row-reverse;
}
</style>
