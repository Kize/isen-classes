<template>
  <div class="eg-slideshow" :mouseNavigation="false">
    <slide leave='fadeOut' :steps="2">
      <h1 v-if="step === 2">Welcome</h1>

      <img class="welcome-dog" src="./assets/welcome.gif" v-if="step === 2">
    </slide>

    <slide enter='bounceInRight' leave='fadeOut' :steps="4">
      <h2>Alban Delcourt</h2>

      <img class="img-study isen" src="./assets/isen.png" v-if="step >= 2">
      <img class="img-study uqac" src="./assets/uqac.jpg" v-if="step >= 3">
      <img class="img-study zenika" src="./assets/zenika.jpg" v-if="step >= 4">
    </slide>

    <slide enter='bounceInRight' leave='fadeOut' :steps="4">
      <h2>Specialties</h2>

      <div class="list-container">
        <ul>
          <li v-if="step >= 2">Web Technologies</li>
          <li v-if="step >= 3">User Experience</li>
          <li v-if="step >= 4">User Interface</li>
        </ul>
      </div>
    </slide>

    <slide enter='bounceInRight' leave='fadeOut' :steps="6">
      <h2>Skills</h2>

      <div class="list-container">
        <ul>
          <li v-if="step >= 2">HTML</li>
          <li v-if="step >= 3">CSS</li>
          <li v-if="step >= 4">JavaScript</li>
          <li v-if="step >= 5">TypeScript</li>
          <li v-if="step >= 6">Python</li>
        </ul>
      </div>
    </slide>

    <slide enter='bounceInRight' leave='fadeOut' :steps="3">
      <h2>Projects</h2>

      <div class="list-container">
        <ul>
          <li v-if="step >= 2">Gamepad Handler</li>
          <li v-if="step >= 3">Music in the browzzzer</li>
        </ul>
      </div>
    </slide>

    <slide enter='bounceInRight' leave='fadeOut' :steps="5">
      <h2>Interests</h2>

      <div class="list-container">
        <ul>
          <li v-if="step >= 2">GIFs</li>
          <li v-if="step >= 3">Rubik's cube</li>
          <li v-if="step >= 4">Rock</li>
          <li v-if="step >= 5">Browser APIs</li>
        </ul>
      </div>
    </slide>

    <slide enter='bounceInRight' leave='fadeOut' :steps="4">
      <h2>Contact</h2>

      <div class="list-container">
        <ul class="contact-list no-dot-list">
          <li v-if="step >= 2">
            <a class="mail-link contact-link"
               href="mailto:alban.delcourt+isen@gmail.com">alban.delcourt+isen@gmail.com</a>
          </li>
          <li v-if="step >= 3">
            <a class="github-link contact-link" href="https://github.com/Kize">Github</a>
          </li>
          <li v-if="step >= 4">
            <a class="twitter-link contact-link" href="https://twitter.com/Alban_Delcourt">Twitter</a>
          </li>
        </ul>
      </div>
    </slide>

    <slide enter='bounceInRight' leave='fadeOut'>
      <h2>
        <a target="_blank" href="http://isen-cir-2.surge.sh">isen-cir-2.surge.sh</a>
      </h2>
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
  name: 'About',
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
      this.$router.push(`/about/${this.currentSlideIndex}/${this.step}`);
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

  .contact-list {

    li {
      margin-bottom: 1em;
    }
  }

  .contact-link {
    background: no-repeat left center;
    background-size: contain;
    padding-left: 1.5em;
    font-size: 1.5em;
    margin-bottom: 0.7em;

    &.mail-link {
      background-image: url('./assets/gmail.png');
    }
    &.github-link {
      background-image: url('./assets/github.png');
    }
    &.twitter-link {
      background-image: url('./assets/twitter.png');
    }
  }
</style>
