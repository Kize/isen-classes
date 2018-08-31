<template>
  <div class="eg-slideshow">
    <slide leave='fadeOut'>
      <h1>Web, hello world.</h1>
      <img class="old-computer-image" src="./assets/old-computer.png"/>
    </slide>

    <slide enter='bounceInRight' leave='fadeOut'>
      <h2>Page 2</h2>
    </slide>

  </div>
</template>

<script>
import eagle from 'eagle.js';

export default {
  mixins: [
    eagle.slideshow,
  ],
  name: 'hello-world',
  created() {
    this.updateSlides();
    this.mouseNavigation = false;

  },
  methods: {
    updateSlides() {
      this.currentSlideIndex = +this.$route.params.slide;
      this.$nextTick(() => {
        this.step = +this.$route.params.step;
      });
    },
    updateURL() {
      this.$router.push(`/hello-world/${this.currentSlideIndex}/${this.step}`);
    },
  },
  watch: {
    $route: 'updateSlides',
    step: 'updateURL',
    currentSlideIndex: 'updateURL',
  },
};
</script>

<style scoped lang="scss">
  @import '../../styles/colors';
  @import '../../styles/slide';
  @import '../../styles/slideshow';

  .old-computer-image {
    max-height: 800px;
  }
</style>
