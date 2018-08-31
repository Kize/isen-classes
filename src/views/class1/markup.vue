<template>
  <div class="eg-slideshow">
    <slide leave='fadeOut'>
      <h1>Tag, you're it !</h1>
    </slide>

    <slide enter='bounceInRight' leave='fadeOut'>
      <h1>Page 2</h1>
    </slide>

  </div>
</template>

<script>
import eagle from 'eagle.js';
import { initGamepad, resetGamepad } from '../../utils/gamepad-service';

export default {
  mixins: [
    eagle.slideshow,
  ],
  name: 'markup',
  created() {
    this.updateSlides();

    initGamepad(this.nextStep, this.previousStep);
  },
  methods: {
    updateSlides() {
      this.currentSlideIndex = +this.$route.params.slide;
      this.$nextTick(() => {
        this.step = +this.$route.params.step;
      });
    },
    updateURL() {
      this.$router.push(`/markup/${this.currentSlideIndex}/${this.step}`);
    },
  },
  props: {
    mouseNavigation: false,
  },
  watch: {
    $route: 'updateSlides',
    step: 'updateURL',
    currentSlideIndex: 'updateURL',
  },
  destroyed() {
    resetGamepad();
  },
};
</script>

<style scoped lang="scss">
  @import '../../styles/colors';
  @import '../../styles/slide';
  @import '../../styles/slideshow';
</style>
