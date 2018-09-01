<template>
  <div class="eg-slideshow">
    <slide class="slide-0" leave='fadeOut'>
      <h1>Tag, you're it !</h1>

      <img src="./assets/html.gif">
    </slide>

    <slide class="slide-1" enter='bounceInRight' leave='fadeOut' :steps="8">
      <h2>What is <span class="color-accent">HTML</span>?</h2>


      <div class="list-container">
        <ul>
          <li v-if="step >= 2">HyperText Markup Language</li>
          <li v-if="step >= 3"><b>Not a programing language</b></li>
          <li v-if="step >= 4">Markup language</li>
          <li v-if="step >= 5">
            <b>Defines :</b>
            <ul>
              <li v-if="step >= 6">Type of contents</li>
              <li v-if="step >= 7">Structure (<span class="color-accent">DOM</span>)</li>
            </ul>
          </li>
          <li v-if="step >= 8"><b>Does not define how it is rendered</b></li>
        </ul>
      </div>
    </slide>

    <slide class="slide-2" enter='bounceInRight' leave='fadeOut' :steps="2">
      <h2>How does it <span class="color-accent">look</span> ?</h2>

      <div class="snippet" v-if="step >= 2">
        <eg-code-block lang="HTML">{{htmlCodeExample1}}</eg-code-block>
      </div>
    </slide>

    <slide class="slide-3" enter='bounceInRight' leave='fadeOut' :steps="5">
      <h2>Let's add some attributes</h2>

      <div class="snippet" v-if="step >= 2">
        <eg-code-block lang="HTML">{{htmlCodeExample2}}</eg-code-block>
        <a href="http://www.donothingfor2minutes.com" v-if="step >= 3">Do nothing for 2 Minutes</a>
      </div>

      <div class="snippet" v-if="step >= 4">
        <eg-code-block lang="HTML">{{htmlCodeExample3}}</eg-code-block>
        <img src="./assets/parrot.gif" alt="a happy parrot animation" class="parrot-image" v-if="step >= 5">
      </div>
    </slide>

    <slide class="slide-4" enter='bounceInRight' leave='fadeOut'>
      <h2>Elements</h2>

      <img src="./assets/elements.gif">
    </slide>

    <slide class="slide-5" enter='bounceInRight' leave='fadeOut' :steps="2">
      <h2>Block Elements</h2>
      <h3>Headings</h3>

      <eg-code-block v-if="step >= 2" lang="HTML">{{htmlCodeExample4}}</eg-code-block>
    </slide>

    <slide class="slide-6" enter='bounceInRight' leave='fadeOut' :steps="2">
      <h2>Block Elements</h2>
      <h3>Lists</h3>

      <eg-code-block class="list-code" v-if="step >= 2" lang="HTML">{{htmlCodeExample5}}</eg-code-block>
      <div class="list-result" v-if="step >=2">
        <ul>
          <li>Leeloo</li>
          <li>Korben Dallas</li>
        </ul>
        <ol>
          <li>President Lindberg</li>
          <li>Major Iceborg</li>
        </ol>
        <dl>
          <dt>Humans</dt>
          <dd>Korben Dallas race</dd>
          <dt>Mangalores</dt>
          <dd>Aknot race</dd>
        </dl>
      </div>
    </slide>

    <slide class="slide-7" enter='bounceInRight' leave='fadeOut'>
      <h2>Block Elements</h2>
      <h3>Other</h3>

      <eg-code-block lang="HTML">{{htmlCodeExample6}}</eg-code-block>
    </slide>

    <slide class="slide-8" enter='bounceInRight' leave='fadeOut'>
      <h2>Inline Elements</h2>
      <h3>Phrases</h3>

      <eg-code-block lang="HTML">{{htmlCodeExample7}}</eg-code-block>
    </slide>

    <slide class="slide-9" enter='bounceInRight' leave='fadeOut'>
      <h2>Inline Elements</h2>
      <h3>Computer phrase</h3>

      <eg-code-block lang="HTML">{{htmlCodeExample8}}</eg-code-block>
    </slide>

    <slide class="slide-10" enter='bounceInRight' leave='fadeOut'>
      <h2>Inline Elements</h2>
      <h3>Presentation phrase</h3>

      <eg-code-block lang="HTML">{{htmlCodeExample9}}</eg-code-block>
    </slide>

    <slide class="slide-11" enter='bounceInRight' leave='fadeOut'>
      <h2>Forms Elements</h2>

      <eg-code-block lang="HTML">{{htmlCodeExample10}}</eg-code-block>
    </slide>

    <slide class="slide-12" enter='bounceInRight' leave='fadeOut'>
      <h2>Forms Elements</h2>

      <eg-code-block class="form-code" lang="HTML">{{htmlCodeExample11}}</eg-code-block>
      <form class="form-result" action="/post-form" method="post">
        <label for="name-input">Name:</label>
        <input id="name-input" name="nameInput" type="text" value="Leeloo"/>

        <br>

        <label for="identity-input">Credentials:</label>
        <select id="identity-input" name="identitySelect">
          <option value="multipass" selected>Multipass</option>
          <option value="passport">passport</option>
        </select>

        <fieldset>
          <legend>Race</legend>

          <input type="radio" id="human-radio" name="race" value="human"/>
          <label for="human-radio">Human</label>
          <input type="radio" id="perfect-being-radio" name="race" value="perfect-being"/>
          <label for="perfect-being-radio">Perfect Being</label>
        </fieldset>

        <button type="submit">Validate</button>
      </form>
    </slide>

    <slide class="slide-13" enter='bounceInRight' leave='fadeOut'>
      <h2>Tables</h2>

      <eg-code-block class="table-code" lang="HTML">{{htmlCodeExample12}}</eg-code-block>

      <div class="table-result">
        <table>
          <caption>Cast</caption>

          <thead><tr>
            <th>Actors</th>
            <th>Characters</th>
          </tr></thead>

          <tbody><tr>
            <td>Milla Jovovich</td>
            <td>Leeloo</td>
          </tr>
          <tr>
            <td>Chris Tucker</td>
            <td>Ruby Rhod</td>
          </tr>
          <tr>
            <td>Bruce Willis</td>
            <td>Korben Dallas</td>
          </tr></tbody>

          <tfoot><tr>
            <th>Actors</th>
            <th>Characters</th>
          </tr></tfoot>
        </table>
      </div>
    </slide>

    <slide class="slide-13" enter='bounceInRight' leave='fadeOut'>
      <h2>Additional links</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li><a href="https://www.w3.org/">w3c</a></li>
          <li><a href="https://developer.mozilla.org/en-US/">MDN</a></li>
          <li><a href="http://validator.w3.org/">w3c HTML Validator</a></li>
          <li><a href="https://caniuse.com/">caniuse</a></li>
          <li><a href="https://www.w3.org/QA/2002/04/valid-dtd-list.html">Recommended Doctype Declarations (W3C)</a></li>
        </ul>
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
  data() {
    return {
      htmlCodeExample1: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>How does it look ?</title>
  </head>
  <body>
    <!-- A comment doesn't "appear" to the user -->
    <p>I think this paragraph looks great !</p>
  </body>
</html>`,
      htmlCodeExample2: '<a href="http://www.donothingfor2minutes.com">Do nothing for 2 Minutes</a>',
      htmlCodeExample3: '<img src="./assets/parrot.gif" alt="a happy parrot animation" class="parrot-image">',
      htmlCodeExample4: `

        <h1>Fifth Element</h1>
        <h2>Multipass!</h2>
        <h3>Aziz, light!</h3>
        <h4>Me fifth element - supreme being. Me protect you.</h4>
        <h5>Boooooooom ba da booom</h5>
        <h6>You wanna play it soft. We'll play it soft. You wanna play it hard. Let's play it hard.</h6>

      `,
      htmlCodeExample5: `

        <ul>
          <li>Leeloo</li>
          <li>Korben Dallas</li>
        </ul>
        <ol>
          <li>President Lindberg</li>
          <li>Major Iceborg</li>
        </ol>
        <dl>
          <dt>Humans</dt><dd>Korben Dallas race</dd>
          <dt>Mangalores</dt><dd>Aknot race</dd>
        </dl>

      `,
      htmlCodeExample6: `
    <p>...</p>
    <address>...</address>
    <blockquote>...</blockquote>
    <del>...</del>
    <hr>
    <ins>...</ins>
    <noscript>...</noscript>
    <pre>...</pre>`,
      htmlCodeExample7: `<abbr>...</abbr>
<dfn>...</dfn>
<em>...</em>
<strong>...</strong>`,
      htmlCodeExample8: `<code>...</code>
<samp>...</samp>
<kbd>...</kbd>
<var>...</var>`,
      htmlCodeExample9: `<b>...</b>
<i>...</i>
<small>...</small>
<big>...</big>
<tt>...</tt>
<u>...</u>`,
      htmlCodeExample10: `<form>...</form>
<button>...</button>
<fieldset>...</fieldset>
<legend>...</legend>
<label>...</label>
<input>
<select>...</select>
<optgroup>...</optgroup>
<option>...</option>
<textarea >...</textarea >`,
      htmlCodeExample11: `<form class="form-result" action="/post-form" method="post">
  <label for="name-input">Name:</label>
  <input id="name-input" name="nameInput" type="text" value="Leeloo"/>

  <br>

  <label for="identity-input">Credentials:</label>
  <select id="identity-input" name="identitySelect">
    <option value="multipass" selected>Multipass</option>
    <option value="passport">passport</option>
  </select>

  <fieldset>
    <legend>Race</legend>

    <input type="radio" id="human-radio" name="race" value="human"/>
    <label for="human-radio">Human</label>

    <input type="radio" id="perfect-being-radio"
           name="race" value="perfect-being"/>
    <label for="perfect-being-radio">Perfect Being</label>
  </fieldset>

  <button type="submit">Validate</button>
</form>`,
      htmlCodeExample12: `<table>
  <caption>Cast</caption>

  <thead>
    <tr>
      <th>Actors</th>
      <th>Characters</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Milla Jovovich</td>
      <td>Leeloo</td>
    </tr>
    <tr>
      <td>Chris Tucker</td>
      <td>Ruby Rhod</td>
    </tr>
    <tr>
      <td>Bruce Willis</td>
      <td>Korben Dallas</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Actors</th>
      <th>Characters</th>
    </tr>
  </tfoot>
</table>`,
    };
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

  .slide-0 {

    img {
      margin-top: 3em;
      height: 12em;
    }
  }

  .slide-3 {

    .parrot-image {
      height: 330px;
      position: absolute;
      bottom: 10px;
      left: 40%;
    }
  }

  .slide-4 {

    img {
      height: 500px;
      max-width: none;
    }
  }

  .slide-5, .slide-6, .slide-7, .slide-8, .slide-9, .slide-10 {
    h2 {
      margin-bottom: 0.2em;
    }

    h3 {
      margin-top: 0;
    }
  }

  .slide-6 {

    .list-code, .list-result {
      position: absolute;
    }

    .list-code {
      top: 40%;
      left: 20%;
      width: 35%;
    }

    .list-result {
      top: 35%;
      right: 21%;
      text-align: left;
    }
  }

  .slide-12 {

    .form-code {
      position: absolute;
      left: 5%;
      top: 30%;
      width: 850px;
    }

    .form-result {
      position: absolute;
      right: 5%;
      top: 30%;
      width: 800px;
      text-align: left;

      * {
        margin-bottom: 0.5em;
        margin-right: 0.5em;
      }

      select, button {
        font-size: 1em;
        padding: 12px;
      }
    }
  }

  .slide-13 {

    .table-code {
      position: absolute;
      left: 5%;
      bottom: 5%;
      width: 850px;
    }

    .table-result {
      position: absolute;
      right: 5%;
      top: 30%;
      width: 800px;
      text-align: left;
    }
  }
</style>
