<template>
  <div class="eg-slideshow">
    <slide leave='fadeOut'>
      <h1>Web, hello world.</h1>
      <img class="old-computer-image" src="./assets/old-computer.png"/>
    </slide>

    <slide class="slide-1" enter='bounceInRight' leave='fadeOut' :steps="9">
      <h2>Nearly 30 years ago</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li v-if="step >= 2">1990</li>
          <li v-if="step >= 3"><b>Tim Berners-Lee</b></li>
          <li v-if="step >= 5">CERN</li>
          <li v-if="step >= 6"><b>World Wide Web</b></li>
          <li v-if="step >= 7">HTTP</li>
          <li v-if="step >= 8"><b>HTML</b></li>
          <li v-if="step >= 9">First Web Browser</li>
        </ul>
      </div>
      <img class="tim-image" src="./assets/tbl.jpg" v-if="step >= 4"/>
    </slide>

    <slide class="slide-2" enter='bounceInRight' leave='fadeOut' :steps="9">
      <h2>Browsers</h2>

      <div class="list-container">
        <ul>
          <li v-if="step >= 2">WorldWideWeb (1990)</li>
          <li v-if="step >= 3"><b>Lynx (1992)</b></li>
          <li v-if="step >= 4">Mosaic (1993)</li>
          <li v-if="step >= 5"><b>Netscape (1994)</b></li>
          <li v-if="step >= 6">Internet Explorer (1995)</li>
          <li v-if="step >= 7"><b>Safari (2003)</b></li>
          <li v-if="step >= 8">Firefox (2005)</li>
          <li v-if="step >= 9"><b>Chrome (2008)</b></li>
        </ul>
      </div>
    </slide>

    <slide class="slide-3" enter='bounceInRight' leave='fadeOut' :steps="8">
      <h2>One to rule them all...</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li v-if="step >= 2">
            <b>W3C</b>
            <ul>
              <li v-if="step >= 3">HTML</li>
              <li v-if="step >= 4">XHTML</li>
              <li v-if="step >= 5">XML</li>
              <li v-if="step >= 6">CSS</li>
              <li v-if="step >= 7">PNG</li>
              <li v-if="step >= 8">SVG</li>
            </ul>
          </li>
        </ul>
      </div>
    </slide>

    <slide class="slide-4" enter='bounceInRight' leave='fadeOut' :steps="9">
      <h2>
        <span class="color-accent">C</span>ascading
        <span class="color-accent">S</span>tyle
        <span class="color-accent">S</span>heet
      </h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li v-if="step >= 2">1994</li>
          <li v-if="step >= 3"><b>Separate structure from presentation</b></li>
          <li v-if="step >= 4">9 differents languages proposed</li>
          <li v-if="step >= 5"><b>Håkon Wium Lie</b></li>
          <li v-if="step >= 6">Bert Bos</li>
          <li v-if="step >= 7"><b>1996</b></li>
          <li v-if="step >= 9"><span class="color-accent css-tada"><b>CSS</b></span></li>
        </ul>
      </div>

      <img class="hakon-img" src="./assets/hakon.jpg" v-if="step >= 5">
      <img class="bert-img" src="./assets/bert.jpg" v-if="step >= 6">
      <img class="tada-img" src="./assets/tada.webp" v-if="step >= 8">
    </slide>

    <slide class="slide-5" enter='bounceInRight' leave='fadeOut' :steps="9">
      <h2>Javascript</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li v-if="step >= 2">1995</li>
          <li v-if="step >= 3"><b>Brendan Eich</b></li>
          <li v-if="step >= 5">Netscape Communications</li>
          <li v-if="step >= 6">
            <b>3 projects :</b>
            <ul class="no-dot-list">
              <li>-> Mocha</li>
              <li>-> LiveScript</li>
              <li>-> Javascript</li>
            </ul>
          </li>
          <li v-if="step >= 7">Javascript != Java</li>
          <li v-if="step >= 8"><b>Ecma International</b></li>
          <li v-if="step >= 9">ECMAScript</li>
        </ul>
      </div>

      <img src="./assets/brendan.jpg" class="brendan-img" v-if="step >= 4">
    </slide>

    <slide class="slide-5" enter='bounceInRight' leave='fadeOut'>
      <h2>Web Evolution</h2>

      <a href="http://evolutionofweb.appspot.com/?hl=en">Interactive map</a>
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
  name: 'hello-world',
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
      this.$router.push(`/hello-world/${this.currentSlideIndex}/${this.step}`);
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

  .old-computer-image {
    max-height: 800px;
  }

  .slide-1 {

    .tim-image {
      position: absolute;
      top: 45%;
      right: 10%;
      height: 300px;
    }
  }

  .color-accent {
    color: $meadow;
  }

  .slide-4 {

    img {
      height: 150px;
      position: absolute;
    }

    .hakon-img {
      top: 50%;
      right: 50%;
    }

    .bert-img {
      top: 50%;
      right: 40%;
    }

    .tada-img {
      top: 70%;
      left: 15%;
    }

    .css-tada {
      font-size: 1.5em;
    }
  }

  .slide-5 {

    .brendan-img {
      position: absolute;
      bottom: 10%;
      right: 10%;
    }
  }
</style>
