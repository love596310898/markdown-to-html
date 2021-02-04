<template>
  <div>
    <div class="hello-cropper">
      <div class="vue-cropper-warp">
        <VueCropper
          ref="cropper"
          :img="option.img"
          :output-size="option.size"
          :output-type="option.outputType"
          :info="true"
          :full="option.full"
          :can-move="option.canMove"
          :can-move-box="option.canMoveBox"
          :fixed-box="option.fixedBox"
          :original="option.original"
          :auto-crop="option.autoCrop"
          :auto-crop-width="option.autoCropWidth"
          :auto-crop-height="option.autoCropHeight"
          :center-box="option.centerBox"
          :high="option.high"
          :info-true="option.infoTrue"
          :max-img-size="option.maxImgSize"
          :enlarge="option.enlarge"
          :mode="option.mode"
          :limit-min-size="option.limitMinSize"
          @realTime="realTime"
        />
      </div>
      <div class="cropper-view-warp">
        <div class="preview-title">
          图标预览
        </div>
        <div class="preview">
          <div :style="portraitImg.previewStyle">
            <img
              :src="portraitImg.url"
              :style="portraitImg.img"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from 'vue-cropper';
import defaultImg from '@/assets/img/favicon.jpg';

const { VueCropper } = Cropper;
export default {
  name: 'HelloWorld',
  components: { VueCropper },
  data() {
    return {
      portraitImg: {},
      option: {
        img: defaultImg,
        size: 1,
        full: false,
        outputType: 'png',
        canMove: true,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        centerBox: false,
        high: false,
        cropData: {},
        enlarge: 1,
        mode: 'contain',
        maxImgSize: 2000,
        limitMinSize: [100, 120],
      },
    };
  },
  methods: {
    realTime(data) {
      // 预览图像保持固定宽高
      const xScale = 96 / data.w;
      const yScale = 96 / data.h;
      const xLate = data.w === 96 ? 0 : (96 - data.w) / 2;
      const yLate = data.h === 96 ? 0 : (96 - data.h) / 2;
      const previewStyle = {
        width: `${data.w}px`,
        height: `${data.h}px`,
        overflow: 'hidden',
        margin: '0',
        transform: `translate(${xLate}px, ${yLate}px) scale(${xScale}, ${yScale})`,
      };
      this.portraitImg = { previewStyle, ...data };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.hello-cropper{
  display: flex;
  justify-content: center;
}
.vue-cropper-warp {
  width: 348px;
  height: 348px;
}
.cropper-view-warp {
  width: 122px;
  margin-left: 50px;
}
.preview-title {
  color: rgba(102, 102, 102, 1);
  margin-bottom: 14px;
  text-align: center;
}
.preview {
  width: 96px;
  height: 96px;
  background: rgba(238, 238, 238, 1);
  margin: 0 auto;
}
</style>
