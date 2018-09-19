<template>
  <div class="eg-slideshow markup">
    <slide class="slide slide-0" leave='fadeOut'>
      <h1>Tag, you're it !</h1>

      <img src="./assets/html.gif">
    </slide>

    <slide class="slide slide-1" enter='bounceInRight' leave='fadeOut' :steps="8">
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

    <slide class="slide slide-2" enter='bounceInRight' leave='fadeOut' :steps="3">
      <h2>How does it <span class="color-accent">look</span> ?</h2>

      <div class="snippet" v-if="step >= 2">
        <pre v-highlightjs="htmlCodeExample1"><code class="HTML"></code></pre>
      </div>
      <p v-if="step >= 3">I think this paragraph looks great !</p>
    </slide>

    <slide class="slide slide-3" enter='bounceInRight' leave='fadeOut' :steps="5">
      <h2>Let's add some attributes</h2>

      <div class="snippet" v-if="step >= 2">
        <pre v-highlightjs="htmlCodeExample2"><code class="HTML"></code></pre>
        <a href="http://www.donothingfor2minutes.com" v-if="step >= 3">Do nothing for 2 Minutes</a>
      </div>

      <div class="snippet" v-if="step >= 4">
        <pre v-highlightjs="htmlCodeExample3"><code class="HTML"></code></pre>
        <img src="./assets/parrot.gif" alt="a happy parrot animation" class="parrot-image" v-if="step >= 5">
      </div>
    </slide>

    <slide class="slide slide-4" enter='bounceInRight' leave='fadeOut'>
      <h2>Elements</h2>

      <img src="./assets/elements.gif">
    </slide>

    <slide class="slide slide-5" enter='bounceInRight' leave='fadeOut' :steps="3">
      <h2>Block Elements</h2>
      <h3>Headings</h3>

      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-3">
          <pre v-highlightjs="htmlCodeExample4" v-if="step >= 2"><code class="HTML"></code></pre>
        </div>

        <div class="pure-u-1 pure-u-md-1 pure-u-lg-2-3" v-if="step >= 3">
          <h1>Fifth Element</h1>
          <h2>Multipass!</h2>
          <h3>Aziz, light!</h3>
          <h4>Me fifth element - supreme being. Me protect you.</h4>
          <h5>Boooooooom ba da booom</h5>
          <h6>You wanna play it soft. We'll play it soft. You wanna play it hard. Let's play it hard.</h6>
        </div>
      </div>

    </slide>

    <slide class="slide slide-6" enter='bounceInRight' leave='fadeOut' :steps="2">
      <h2>Block Elements</h2>
      <h3>Lists</h3>

      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
          <pre v-highlightjs="htmlCodeExample5" v-if="step >= 2"><code class="HTML"></code></pre>
        </div>
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2 result-block" v-if="step >=2">
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
      </div>
    </slide>

    <slide class="slide slide-7" enter='bounceInRight' leave='fadeOut'>
      <h2>Block Elements</h2>
      <h3>Other</h3>

      <pre v-highlightjs="htmlCodeExample6"><code class="HTML"></code></pre>
    </slide>

    <slide class="slide slide-8" enter='bounceInRight' leave='fadeOut'>
      <h2>Inline Elements</h2>
      <h3>Phrases</h3>

      <pre v-highlightjs="htmlCodeExample7"><code class="HTML"></code></pre>
    </slide>

    <slide class="slide slide-9" enter='bounceInRight' leave='fadeOut'>
      <h2>Inline Elements</h2>
      <h3>Computer phrase</h3>

      <pre v-highlightjs="htmlCodeExample8"><code class="HTML"></code></pre>
    </slide>

    <slide class="slide slide-10" enter='bounceInRight' leave='fadeOut'>
      <h2>Inline Elements</h2>
      <h3>Presentation phrase</h3>

      <pre v-highlightjs="htmlCodeExample9"><code class="HTML"></code></pre>
    </slide>

    <slide class="slide slide-11" enter='bounceInRight' leave='fadeOut'>
      <h2>Forms Elements</h2>

      <pre v-highlightjs="htmlCodeExample10"><code class="HTML"></code></pre>
    </slide>

    <slide class="slide slide-12" enter='bounceInRight' leave='fadeOut'>
      <h2>Forms Elements</h2>

      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
          <pre v-highlightjs="htmlCodeExample11"><code class="HTML"></code></pre>
        </div>

        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
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
        </div>
      </div>
    </slide>

    <slide class="slide slide-13" enter='bounceInRight' leave='fadeOut'>
      <h2>Tables</h2>

      <div class="pure-g">
        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
          <pre v-highlightjs="htmlCodeExample12"><code class="HTML"></code></pre>
        </div>

        <div class="pure-u-1 pure-u-md-1 pure-u-lg-1-2">
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
      </div>
    </slide>

    <slide class="slide slide-13" enter='bounceInRight' leave='fadeOut'>
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
<html lang="fr">
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
      htmlCodeExample4: `<h1>Fifth Element</h1>

<h2>Multipass!</h2>

<h3>Aziz, light!</h3>

<h4>Me fifth element - supreme being.
Me protect you.</h4>

<h5>Boooooooom ba da booom</h5>

<h6>You wanna play it soft.
We'll play it soft.
You wanna play it hard.
Let's play it hard.</h6>`,
      htmlCodeExample5: `<ul>
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
</dl>`,
      htmlCodeExample6: `<p>...</p>
<address>...</address>
<blockquote>...</blockquote>
<del>...</del>
<ins>...</ins>
<hr>
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

<style lang="scss">
  .markup {
    .slide-12 {
      .eg-slide-content {
        width: 95vw;
      }
    }
  }
</style>

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

  .slide-5 {
    .pure-g {
      h1, h2, h3, h4, h5, h6 {
        text-align: left;
        padding-left: 25px;
        color: black;
        font-family: monospace;
      }

      h1 {
        font-size: 2em;
      }
      h2 {
        font-size: 1.7em;
      }
      h3 {
        font-size: 1.5em;
      }
      h4 {
        font-size: 1.2em;
      }
      h5 {
        font-size: 1em;
      }
      h6 {
        font-size: 0.7em;
      }

    }
  }

  .slide-5, .slide-6, .slide-7, .slide-8, .slide-9, .slide-10, .slide-12, .slide-13 {
    h2 {
      margin-bottom: 0.2em;
    }

    h3 {
      margin-top: 0;
    }
  }

  .slide-6 {

    .result-block {
      padding-left: 25px;
      box-sizing: border-box;
    }

    ul, ol, dl {
      text-align: left;
    }
  }

  .slide-12 {

    .form-result {
      text-align: left;
      margin-left: 2em;
    }

    select, button {
      font-size: 1em;
      padding: 12px;
    }
  }

  .slide-13 {

    h2 {
      margin-bottom: 0;
    }
  }
</style>
