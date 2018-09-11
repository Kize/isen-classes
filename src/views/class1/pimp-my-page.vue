<template>
  <div class="eg-slideshow">
    <slide class="slide" leave='fadeOut'>
      <h1 class="rainbow">Pimp my page !</h1>

      <img src="./assets/pimp-my-page.webp"/>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2>Selectors</h2>

      <eg-code-block lang="css">h1 { /* all h1 elements */ }

.title { /* all elements with class="title" */ }

#menu { /* the element with the id="menu" */ }

input, .input-label { /* all input elements "AND" all elements with class="input-label" */ }

img.avatar { /* all images elements with class="avatar" */ }

.car-list li { /* li elements having an element with class="car-list" as ancestor  */ }

button:hover { /* button elements being hovered by mouse pointers */ }

:not(.invalid) { /* elements that don't have class="invalid" */ }</eg-code-block>
    </slide>

    <slide class="slide slide-2" enter='bounceInRight' leave='fadeOut'>
      <h2>Properties and values</h2>

      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
          <div class="column-container">
            <eg-code-block lang="html">{{htmlCodeExample1}}</eg-code-block>
<eg-code-block lang="css">/* CSS code example */
p {
  background: #EEEEEE;
  color: #111;
  font-size: 1.2em;
  text-align: center;
}
p.important {
  border: 5px solid red;
}</eg-code-block>
          </div>
        </div>
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
          <div class="column-container">
            <p>Just a paragraph.</p>
            <p class="important">An important paragraph.</p>
          </div>
        </div>
      </div>
    </slide>

    <slide class="slide slide-3" enter='bounceInRight' leave='fadeOut'>
      <h2>Box Model</h2>

      <div class="example-container">
        <box-model-example></box-model-example>
      </div>
    </slide>

    <slide class="slide slide-4" enter='bounceInRight' leave='fadeOut'>
      <h2>Floats</h2>

      <div class="example-container">
        <float-example></float-example>
      </div>
    </slide>

    <slide class="slide slide-5" enter='bounceInRight' leave='fadeOut'>
      <h2>Positions</h2>

      <div class="example-container">
        <position-example></position-example>
      </div>
    </slide>

    <slide class="slide slide-6" enter='bounceInRight' leave='fadeOut'>
      <h2>Displays</h2>

      <div class="example-container">
        <display-example></display-example>
      </div>
    </slide>

    <slide class="slide slide-7" enter='bounceInRight' leave='fadeOut'>
      <h2>Other displays</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li>
            <a href="http://the-echoplex.net/flexyboxes/">Flex</a>
          </li>
          <li>
            <a href="https://vue-grid-generator.netlify.com/">Grid</a>
          </li>
        </ul>
      </div>
    </slide>

    <slide class="slide slide-8" enter='bounceInRight' leave='fadeOut' :steps="2">
      <h2>Media Queries</h2>

      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
          <div class="column-container">
            <eg-code-block lang="css">img.rollin-racoon {
  display:none;
}

@media screen and (min-width: 800px) {
  img.rollin-racoon {
    display: block;
  }
}

@media screen and (min-width: 1600px) {
  img.rollin-racoon {
    width: 750px;
  }
}</eg-code-block>
          </div>
        </div>
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
          <div class="column-container">
            <img class="rollin-racoon" src="./assets/rollin-racoon.gif" v-if="step >= 2">
          </div>
        </div>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' leave='fadeOut'>
      <h2>Additional links</h2>

      <div class="list-container">
        <ul>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">MDN selectors</a>
          </li>
          <li>
            <a href="https://www.w3schools.com/cssref/css_selectors.asp">w3schools CSS selectors summary</a>
          </li>
          <li>
            <a href="https://www.w3.org/TR/CSS2/box.html#box-dimensions">W3C box model schema</a>
          </li>
          <li>
            <a href="https://alistapart.com/article/css-floats-101">CSS Floats 101 (A list apart)</a>
          </li>
          <li>
            <a href="https://alistapart.com/article/css-positioning-101">CSS Positionning 101 (A list apart)</a>
          </li>
          <li>
            <a href="https://css-tricks.com/fighting-the-space-between-inline-block-elements/">Fighting the Space
              Between Inline Block Elements (CSS Tricks)</a>
          </li>
        </ul>
      </div>
    </slide>
  </div>
</template>

<script>
import eagle from 'eagle.js';
import { initGamepad, resetGamepad } from '../../utils/gamepad-service';
import BoxModelExample from './css-examples/box-model-example.vue';
import FloatExample from './css-examples/float-example.vue';
import PositionExample from './css-examples/position-example.vue';
import DisplayExample from './css-examples/display-example.vue';

export default {
  components: {
    DisplayExample,
    PositionExample,
    FloatExample,
    BoxModelExample,
  },
  data() {
    return {
      htmlCodeExample1: `<!--HTML code example-->
<p>Just a paragraph.</p>
<p class="important">
  An important paragraph.
</p>`,
    };
  },
  mixins: [
    eagle.slideshow,
  ],
  name: 'pimp-my-page',
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
      this.$router.push(`/pimp-my-page/${this.currentSlideIndex}/${this.step}`);
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
  @import '../../styles/rainbow';

  .slide-2 {

    p {
      background: #EEEEEE;
      color: #111;
      font-size: 1.2em;
      text-align: center;
    }
    p.important {
      border: 5px solid red;
    }
  }

  .slide-8 {
    img.rollin-racoon {
      display:none;
      max-width: none;
    }

    @media screen and (min-width: 800px) {
      img.rollin-racoon {
        display: block;
      }
    }

    @media screen and (min-width: 1600px) {
      img.rollin-racoon {
        width: 750px;
      }
    }
  }
</style>
