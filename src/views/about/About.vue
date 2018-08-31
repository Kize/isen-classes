<template>
  <div class="eg-slideshow" :mouseNavigation="false">
    <slide leave='fadeOut' :steps="2">
      <h1 v-if="step === 2">Bienvenue</h1>

      <img class="welcome-dog" src="./assets/welcome.gif" v-if="step === 2">
    </slide>

    <slide enter='bounceInRight' leave='fadeOut' :steps="4">
      <h2>Alban Delcourt</h2>

      <img class="img-study isen" src="./assets/isen.png" v-if="step >= 2">
      <img class="img-study uqac" src="./assets/uqac.jpg" v-if="step >= 3">
      <img class="img-study zenika" src="./assets/zenika.jpg" v-if="step >= 4">
    </slide>

    <slide>

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
  @import '../../styles/colors';
  @import '../../styles/slide';
  @import '../../styles/slideshow';

  h1 {
    margin-top: 0.1em;
  }

  .welcome-dog {
    width: 800px;
  }

  .img-study {
    position: absolute;
    width: 250px;
    height: initial;

    &.isen {
      top: 33%;
      left: 24%;
    }

    &.uqac {
      top: 35%;
      left: 58%;
    }

    &.zenika {
      top: 62%;
      left: 39%;
    }
  }
</style>
