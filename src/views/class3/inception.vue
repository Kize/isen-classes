<template>
  <div class="eg-slideshow">
    <slide class="slide" enter='bounceInRight'>
      <h1>Inception</h1>

      <img class="main-img" src="./assets/spin.gif">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Recap'</h2>

      <pre v-highlightjs><code class="javascript">var emptyObject = {};


var reality = {
  level: 0,
  real: true,
  team: ['Ariadne','Arthur','Cobb','Eames','Fischer','Saito','Yusuf'],
  dream: {
    level: 1,
    team: ['Ariadne','Arthur','Cobb','Eames','Fischer','Saito','Yusuf'],
    dreamer: 'Yusuf',
    dream: {
      level: 2,
      team: ['Ariadne','Arthur','Cobb','Eames','Fischer','Saito'],
      dreamer: 'Arthur'
    }
  }
};</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Object concepts</h2>

      <pre v-highlightjs><code class="javascript">
console.log(reality.dream);             // => {level: 1, etc...}
console.log(reality['dream']);          // => {level: 1, etc...}

delete reality.dream;                   // property is deleted. reality.dream === undefined

for (var i in reality) {
  console.log(i, reality[i]);
}
// level ==> 0
// real ==> true
// team ==> ['Ariadne','Arthur','Cobb','Eames','Fischer','Saito','Yusuf']
      </code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Object references</h2>

      <pre v-highlightjs><code class="javascript">// Primitive type
var name = 'Cobb';
var name2 = name;

name2 = 'Fischer';

console.log(name);                // => Cobb
      </code></pre>

      <pre v-highlightjs><code class="javascript">// Object type
var dream = {
  level: 1,
  location: 'city'
};

var dream2 = dream;
dream2.location = 'hotel';

console.log(dream.location);      // ==> 'hotel' !!!
</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Functions are <span class="color-accent">first class citizens</span></h2>

      <pre v-highlightjs><code class="javascript">function dream(dreamer) {
  console.log(dreamer +  ' is dreaming...');
}

var dreamReference = dream;
dreamReference();                                 // undefined is dreaming...
typeof dreamReference;                            // ==> function

var anonymousDream = function(dreamer) {          // This function has no name in its declaration
  console.log(dreamer +  ' is dreaming...');
}

console.log(dream.name);                          // ==> dream

console.log(anonymousDream.name);                 // But the name of the function is assigned
                                                  // with the name of the variable.

(function(){}).name                               // ==> ""
</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Recursive Functions</h2>

      <pre v-highlightjs><code class="javascript">function fact(x) {
  return (x &lt;= 1) ? 1 : x * fact(x - 1);
};


var fact2 = function f(x) {                // This function has a name
  return (x &lt;= 1) ? 1 : x * f(x - 1);      // used for recursion
};


console.log(typeof f);                        // => "undefined"
console.log(fact2.name);                      // => "f"</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Functions are objects</h2>

      <pre v-highlightjs><code class="javascript">var validateLength = function v(tokens) {
  v.errorMsg = (v.errorMsg !== undefined) ? v.errorMsg : 'Error!';

  if (tokens.length != 4) {
    console.error(v.errorMsg);
  }
  return tokens.length === 4;
};


validateLength(['dream']);                  // => 'Error!' in console
validateLength.errorMsg = 'Query must contain 4 words.';
validateLength(['dream']);                  // => 'Query must contain 4 words.' in console</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Closure</h2>

      <strong>
        <img class="parrot-meme" src="./assets/parrot.gif">
        A function within a function.
        <img class="parrot-meme" src="./assets/parrot.gif">
      </strong>

      <pre v-highlightjs><code class="javascript">var counter = 0;                        // Everyone can modify this       :-(
var getUniqueInt = function () {
  return counter++;
};    </code></pre>

      <pre v-highlightjs><code class="javascript">var getUniqueInt = function () {
  var counter = 0;                      // Nobody outside can modify this :-)
  return counter++;                     // But function always return 0   :-(
};    </code></pre>

      <pre v-highlightjs><code class="javascript">var getUniqueInt = function () {
  var counter = 0;                      // Nobody can modify this         :-)
  return function () {                  // A function within a function   :-) yeah ! \o/
    return counter++;                   // Function remembers counter     :-)
  }
};    </code></pre>
      <pre v-highlightjs><code class="javascript">console.log(typeof getUniqueInt())      // => "function"  :-(
console.log(typeof getUniqueInt()())    // => "number"    :-)</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Closure</h2>

      <pre v-highlightjs><code class="javascript">var getUniqueInt = function () {
  var counter = 0;                      // Nobody can modify this         :-)
  return function () {                  // A function within a function   :-) yeah ! \o/
    return counter++;                   // Function remembers counter     :-)
  }
};
getUniqueInt = getUniqueInt();          // Assign inner function to getUniqueInt</code></pre>

      <pre v-highlightjs><code
        class="javascript">console.log(typeof getUniqueInt())      // => "number"    :-)</code></pre>

      <pre v-highlightjs><code class="javascript">var getUniqueInt = (function () {
  var counter = 0;                      // Nobody can modify this         :-)
  return function () {                  // A function within a function   :-) yeah ! \o/
    return counter++;                   // Function remembers counter     :-)
  }
})();                                   // Direct execution of 1st anonymous function</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Self invoking Functions</h2>

      <code class="closure-example">
        <span class="code-block">
          <span class="cls-1">(</span>
          <span class="cls-2">function(){</span>
          <br>
          <span class="cls-3">// Some stuff to do ...</span>
          <br>
          <span class="cls-2">}</span>
          <span class="cls-1">)</span>
          <span class="cls-4">()</span>;
        </span>

        <br>
        <span class="cls-2">Declare an anonymous function, create a closure.</span><br>
        <span class="cls-3">Code some stuff, hidden from the global context.</span><br>
        <span class="cls-1">Select it without declaring a variable.</span><br>
        <span class="cls-4">Call the function selected.</span><br>
      </code>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Additional Links</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">
              Object references (MDN)
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">
              for...in loop on objects (MDN)
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
              Closures (MDN)
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE">
              IIFE (Immediately Invoked Function Expression) - MDN
            </a>
          </li>
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
  name: 'inception',
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
      this.$router.push(`/inception/${this.currentSlideIndex}/${this.step}`);
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

  .eg-slideshow {

    .main-img {
      width: 65vw;
    }

    .parrot-meme {
      height: 40px;
    }

    .closure-example {
      display: block;
      font-size: 1.15em;

      .code-block {
        display: block;
        background-color: #d3d3d340;
        padding: 12px;
      }

      p {
        font-family: Arial;
        font-size: 1em;
      }

      .cls-1 {
        color: red;
      }

      .cls-2 {
        color: green;
      }

      .cls-3 {
        color: grey;
      }

      .cls-4 {
        color: blue;
      }
    }
  }
</style>
