<template>
  <div class="eg-slideshow tests-tests-tests">
    <slide class="slide" enter='bounceInRight'>
      <h1>Tests, tests, tests...</h1>

      <img src="./assets/experiment.gif">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Your app before testing it</h2>

      <img src="./assets/baby-robot.gif" class="main-img">
    </slide>

    <slide class="slide" enter='bounceInRight' steps="3">
      <h2>What tests ?</h2>

      <div class="slide-content list-container" v-if="step > 1">
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Unit_testing">Unit testing</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Integration_testing">Integration testing</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Regression_testing">Regression testing</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Software_performance_testing">Performance testing</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Security_testing">Security testing</a>
          </li>
          <li>
            And so on ...
          </li>
        </ul>
      </div>

      <p class="slide-content" v-if="step > 2">We'll only focus on unit testing today.</p>
    </slide>

    <slide class="slide" enter='bounceInRight' steps="3">
      <h2>Unit testing</h2>

      <div class="slide-content" v-if="step > 1">
        <p>A unit test is a short program fragment written and maintained by the developers,
          which executes a function of the application, and checks the result.
        </p>

        <img src="./assets/ut.gif" v-if="step > 2" class="ut-img">
      </div>
    </slide>

    <slide class="slide quotations" enter='bounceInRight' steps="5">
      <h2>Why Unit testing ?</h2>

      <div class="slide-content" v-if="step > 1">
        <blockquote>
          <p>If debugging is the process of removing bugs, then programming must be the process of putting them in.</p>
          <cite>Edsger Dijkstra</cite>
        </blockquote>
      </div>

      <div class="slide-content" v-if="step > 2">
        <blockquote>
          <p>There are two ways to write error-free programs; only the third one works.</p>
          <cite>Alan J. Perlis</cite>
        </blockquote>
      </div>

      <div class="slide-content" v-if="step > 3">
        <blockquote>
          <p>Debugging is twice as hard as writing the code in the first place.
            Therefore, if you write the code as cleverly as possible,
            you are, by definition, not smart enough to debug it.</p>
          <cite>Brian W. Kernighan</cite>
        </blockquote>
      </div>

      <div class="slide-content" v-if="step > 4">
        <blockquote>
          <p>The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.</p>
          <cite>Seymour Cray</cite>
        </blockquote>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' steps="2">
      <h2>But how to code a unit test ?</h2>

      <div class="slide-content" v-if="step > 1">
        <pre v-highlightjs><code class="javascript">console.log('Testing the method `sqrt` of the `Math` object.');
const input = 64;
const expectedOutput = 8;

console.log('Root square of 64 should be 8');

if (Math.sqrt(input) === expectedOutput) {
  console.log('SUCCESS');
} else {
  console.log('FAIL');
}
</code></pre>

      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Can I have some tools ?</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="bash">$ npm i -D jest</code></pre>

        <pre v-highlightjs><code class="javascript">// half.js
funtion half(number) {
  return number / 2;
}

module.exports = half;
      </code></pre>

        <pre v-highlightjs><code class="javascript">// half.test.js
const half = require('./half').half;

describe('Testing half service:', function () {
  test('returns 2 when called with 4', () => {
    expect(half(4)).toBe(2);
  });
});
      </code></pre>

      <pre v-highlightjs><code class="bash">$ jest</code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Some Jest's methods</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">describe();
test(); // or it();   An alias
expect();
beforeEach();
afterAll();
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Test Driven Development</h2>

      <div class="slide-content">
        <img class="main-img tdd-img" src="./assets/tdd.png">
      </div>
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
  name: 'template',
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
      this.$router.push(`/tests-tests-tests/${this.currentSlideIndex}/${this.step}`);
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

<style lang="scss">
  .tests-tests-tests {
    .eg-slide-content {
      width: 85vw;
    }
  }
</style>

<style scoped lang="scss">
  @import '../../styles/colors';
  @import '../../styles/slide';
  @import '../../styles/slideshow';

  .eg-slideshow {
    background: url('./assets/christmas-color.png') repeat;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;

    .eg-slide {
      background: none;

      h1, h2 {
        background: #fffafa;
        border: 2px solid lightpink;
        border-radius: 15px;
        margin-bottom: 8px;
      }

      .slide-content {
        background-color: #fafffa;
        border: 2px solid #b1cea7;
        border-radius: 15px;
        padding: 1em;
        text-align: left;

        .main-img {
          display: block;
          margin: auto;
        }
      }
    }

    .main-img {
      margin-top: 1em;
      height: 60vh;
    }

    .quotations {

      .slide-content {
        padding: 0.6em;
        margin-top: 20px;
      }

      blockquote {
        margin: 0;

        p {
          font-style: italic;
          margin: 0;

          &::before, &::after {
            content: '\201C';
          }
        }

        cite {
          display: block;
          text-align: right;
        }
      }
    }

    .ut-img {
      display: block;
      margin: auto;
    }

    .tdd-img {
      max-width: none;
      height: 72vh;
    }

  }
</style>
