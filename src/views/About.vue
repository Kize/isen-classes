<template>
  <div class="eg-slideshow">
    <slide :mouseNavigation="false" leave='fadeOut'>
      <h1>Hello world</h1>
    </slide>

    <slide enter='bounceInRight' leave='fadeOut'>
      <h1>Page 2</h1>
    </slide>

  </div>
</template>

<script>
import eagle from 'eagle.js';

export default {
  mixins: [
    eagle.slideshow,
  ],
  name: 'About',
  methods: {
    updateSlides() {
      this.currentSlideIndex = +this.$route.params.slide;
      this.$nextTick(() => {
        this.step = +this.$route.params.step;
      });
    },
    updateURL() {
      this.$router.push(`/about/${this.currentSlideIndex}/${this.step}`);
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
  @import '../styles/colors';
  @import '../styles/slide';
  @import '../styles/slideshow';
</style>
