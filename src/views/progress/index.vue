<template>
  <div class="progress-wrap mk-fl-r mk-jc-c mk-ai-c">
    <div class="demo1-bg1">
      <div id="J_bg2_1" class="demo1-bg2-1"></div>
      <div id="J_bg2_2" class="demo1-bg2-2"></div>
    </div>
    <input v-model="persent" @change="changePersents" id="J_btn_1" type="text" name=""/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persent: 10,
    };
  },
  mounted() {
    this.changePersents();
  },
  methods: {
    changePersents() {
      const bg1 = document.querySelector('#J_bg2_1');
      const bg2 = document.querySelector('#J_bg2_2');
      const btn1 = document.querySelector('#J_btn_1');
      let val = parseFloat(btn1.value).toFixed(2);
      val = Math.max(0, val);
      val = Math.min(100, val);
      if (val <= 50) {
        bg2.style.transform = `rotate(${(180 * val * 2) / 100}deg)`;
        bg2.style.borderColor = 'grey grey grey transparent';
        bg1.style.transform = 'rotate(0deg)';
      } else {
        bg2.style.transform = 'rotate(0deg)';
        bg2.style.borderColor = 'red red red transparent';
        bg1.style.transform = `rotate(${(180 * (val - 50) * 2) / 100}deg)`;
      }
    },
  },
};
</script>

<style lang="scss">
.progress-wrap {
  width: 100%;
  height: 600px;
    .demo1-bg1 {
      width: 100px;
      height: 100px;
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      margin: 50px auto;
      border-radius: 50%;
      box-shadow: 0 0 0 10px red inset;
    }
    .demo1-bg2-1,
    .demo1-bg2-2 {
      position: relative;
      margin: 0;
      padding: 0;
      -webkit-box-flex: 1;
      height: 100px;
      background: #fff;
      border: 10px solid grey;
    }
    .demo1-bg2-1 {
      border-radius: 50px 0 0 50px;
      border-color: grey transparent grey grey;
      transform-origin: 100% 50%;
      z-index: 1;
    }
    .demo1-bg2-2 {
      border-radius: 0 50px 50px 0;
      border-color: grey grey grey transparent;
      transform-origin: 0 50%;
      z-index: 2;
    }
}
</style>
