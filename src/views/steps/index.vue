<template>
  <div>
    <div class="steps-wrap">
      <div v-for="(i, index) in $data.$stepList" :key="i" class="step" :class="{ active: index === status }">
        {{ i }}
      </div>
    </div>
    <div class="time-control mk-fl-r mk-ai-c mk-jc-c">
      <TimeControl v-model="dateRange" :rangeOption="$data.$rangeOption"></TimeControl>
    </div>
  </div>
</template>

<script>
import TimeControl from '@/components/time-conctrol/index.vue';

export default {
  name: 'Steps',
  props: {
    status: {
      type: Number,
      default: 1,
    },
  },
  components: {
    TimeControl,
  },
  data() {
    return {
      $stepList: ['1. 选票页面', '2. 填写参会人信息', '3. 报名成功'],
      $rangeOption: [{
        label: '本周',
        value: 'week',
        default: true,
      },
      {
        label: '3天',
        value: '3',
      }],
      dateRange: [new Date('2021-04-30'), new Date()],
    };
  },
};
</script>

<style lang="scss">
.time-control {
  width: 80%;
  margin: 0 auto;
  height: 100px;
}
.steps-wrap {
  width: 80%;
  margin: 80px auto;
  display: flex;
  background-color: rgba(244, 244, 244, 1);
  .step {
    flex-grow: 2;
    text-align: center;
    height: 41px;
    line-height: 41px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    border-top: 1px solid rgba(221, 221, 221, 1);
    border-bottom: 1px solid rgba(221, 221, 221, 1);
    position: relative;
  }
  .step:last-child {
    border-right: 1px solid rgba(221, 221, 221, 1);
  }
  .step:first-child {
    border-left: 1px solid rgba(221, 221, 221, 1);
  }
  .step:not(:first-child)::before {
    content: '';
    display: inline-block;
    height: 30px;
    width: 30px;
    border-top: 8px solid #fff;
    border-right: 8px solid #fff;
    position: absolute;
    top: 1px;
    left: -13px;
    transform: rotate(45deg);
    box-shadow: inset -1px 1px 0px 0px rgba(221, 221, 221, 1);
  }
  .step:not(:first-child)::after {
    content: '';
    display: inline-block;
    height: 29px;
    width: 29px;
    border-top: 1px solid rgba(221, 221, 221, 1);
    border-right: 1px solid rgba(221, 221, 221, 1);
    position: absolute;
    top: 5px;
    left: -2px;
    transform: rotate(45deg);
  }

  .step.active {
    border-top: 1px solid rgba(14, 19, 205, 1);
    border-bottom: 1px solid rgba(14, 19, 205, 1);
    background-color: #fff;
    color: rgba(14, 19, 205, 1);
  }
  .step.active:not(:first-child)::before {
    background-color: rgba(244, 244, 244, 1);
  }
  .step.active + div:not(:first-child)::before {
    box-shadow: inset -1px 1px 0px 0px rgba(14, 19, 205, 1);
    background-color: #fff;
  }
  .step.active:not(:first-child)::after {
    border-top: 1px solid rgba(14, 19, 205, 1);
    border-right: 1px solid rgba(14, 19, 205, 1);
  }
  .step.active:last-child {
    border-right: 1px solid rgba(14, 19, 205, 1);
  }
  .step.active:first-child {
    border-left: 1px solid rgba(14, 19, 205, 1);
  }
}
</style>
