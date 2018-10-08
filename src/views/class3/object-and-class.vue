<template>
  <div class="eg-slideshow">
    <slide class="slide" enter='bounceInRight'>
      <h1>JavaScript Objects</h1>
      <img class="main-img" src="./assets/this.gif">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Recap'</h2>

      <pre v-highlightjs><code class="javascript">var mainHero = {
  name: 'Dominick Cobb',
  occupation: 'extractor',
  loyalties: [
    'Eames',
    'Ariadne',
    'Arthur'
  ],
  dream: function(dreamLevel) {
    console.log('Dream: level ' + dreamLevel + ' / Dreamer : ' + this.name);
  }
};

var target = {
  name: 'Robert Fischer',
  occupation: 'heir to a business empire',
  loyalties: [
    'Maurice Fischer',
    'Peter Browning'
  ],
  dream: function(dreamLevel) {
    console.log('Dream: level ' + dreamLevel + ' / Dreamer : ' + this.name);
  }
};</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>This</h2>

      <pre v-highlightjs><code class="javascript">console.log(this);                // => Window


function showContext() {
  console.log(this);
}

function testContext(context) {
  console.log(this === context);
}

showContext();                    // => Window
new showContext();                // => Object constructed by the `new` operator

testContext(this);                // => true
new testContext();                // => false

var mainHero = {
  name: 'Dominick Cobb',
  greet: function() {
    console.log('Hello, I am ' + this.name + '.');      // => Hello, I am Dominick Cobb
  }
};
      </code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2><span class="color-accent">This</span> and functions</h2>

      <pre v-highlightjs><code class="javascript">var dream = { dreamer: 'Yusuf', location: 'a van' };
var describe = function (before, after) {
  console.log(before + this.dreamer + ' is dreaming of ' + this.location + after);
};</code></pre>

      <pre v-highlightjs><code class="javascript">// Global Object
describe('>>', '...');
// >> undefined is dreaming of http://server-of-this-page/this-page.html...</code></pre>

      <pre v-highlightjs><code class="javascript">// We add the function to the `dream` object
dream.describe = describe;
dream.describe('>>', '...');
// >> Yusuf is dreaming of a van...</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2><span class="color-accent">This</span>: Common problems</h2>

      <pre v-highlightjs><code class="javascript">var dream = {
  location: 'a van',
  dreamer: 'Yusuf',
  whoDreams: function (isDreamingMsg) {
    console.log(this.dreamer + isDreamingMsg);
  }
};    </code></pre>

      <pre v-highlightjs><code class="javascript">var times = function (n, action, arg) {
  for (var i = 0; i &lt; n; i++) {
    action(arg + ' (' + i + ')');
  }
}     </code></pre>

      <pre v-highlightjs><code class="javascript">times(2, dream.whoDreams, ' is dreaming');</code></pre>
      <pre v-highlightjs><code class="javascript">// undefined is dreaming (0)
// undefined is dreaming (1)</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Solution 1: <span class="color-accent">call()</span></h2>

      <pre v-highlightjs><code class="javascript">var dream = {
  location: 'a van',
  dreamer: 'Yusuf',
  whoDreams: function (isDreamingMsg) {
    console.log(this.dreamer + isDreamingMsg);
  }
};    </code></pre>

      <pre v-highlightjs><code class="javascript">var times = function (n, action, target, arg) {     // add target
  for (var i = 0; i &lt; n; i++) {
    action.call(target, arg + ' (' + i + ')');      // directly args
  }
}     </code></pre>

      <pre v-highlightjs><code class="javascript">times(2, dream.whoDreams, dream, ' is dreaming'); // target is passed</code></pre>

      <pre v-highlightjs><code class="javascript">// Yusuf is dreaming (0)
// Yusuf is dreaming (1)</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Solution 2: <span class="color-accent">apply()</span></h2>

      <pre v-highlightjs><code class="javascript">var dream = {
  location: 'a hotel',
  dreamer: 'Charles',
  whoDreams: function (isDreamingMsg) {
    console.log(this.dreamer + isDreamingMsg);
  }
};    </code></pre>

      <pre v-highlightjs><code class="javascript">var times = function (n, action, target, arg) {     // add target
  for (var i = 0; i &lt; n; i++) {
    action.apply(target, [arg + ' (' + i + ')']);   // args as an array
  }
}     </code></pre>

      <pre v-highlightjs><code class="javascript">times(2, dream.whoDreams, dream, ' is dreaming'); // target is passed</code></pre>

      <pre v-highlightjs><code class="javascript">// Charles is dreaming (0)
// Charles is dreaming (1)</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Solution 3: <span class="color-accent">bind()</span></h2>

      <pre v-highlightjs><code class="javascript">var dream = {
  location: 'a snow fortress',
  dreamer: 'Eames',
  whoDreams: function (isDreamingMsg) {
    console.log(this.dreamer + isDreamingMsg);
  }
};    </code></pre>

      <pre v-highlightjs><code class="javascript">var times = function (n, func, arg) {
  for (var i = 0; i &lt; n; i++) {
    func(arg + ' (' + i + ')');              // direct
  }
}     </code></pre>

      <pre v-highlightjs><code class="javascript">var bindedWD = dream.whoDreams.bind(dream);  // bind target to function
times(2, bindedWD, ' is dreaming');</code></pre>

      <pre v-highlightjs><code class="javascript">// Eames is dreaming (0)
// Eames is dreaming (1)</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Objects Inheritance</h1>

      <img class="main-img" src="./assets/object.gif">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Create</h2>

      <pre v-highlightjs><code class="javascript">var mainHero = {
  name: 'Dominick Cobb',
  occupation: 'extractor',
  loyalties: [
    'Eames',
    'Ariadne',
    'Arthur'
  ],
  dream: function(dreamLevel) {
    console.log('Dream: level ' + dreamLevel + ' / Dreamer : ' + this.name);
  }
};

var target = {
  name: 'Robert Fischer',
  occupation: 'heir to a business empire',
  loyalties: [
    'Maurice Fischer',
    'Peter Browning'
  ],
  dream: function(dreamLevel) {
    console.log('Dream: level ' + dreamLevel + ' / Dreamer : ' + this.name);
  }
};
      </code></pre>

      <strong>Bad practice, there is code duplication</strong>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Create <span class="color-accent">from</span> an object</h2>

      <pre v-highlightjs><code class="javascript">var mainHero = {
  name: 'Dominick Cobb',
  occupation: 'extractor',
  loyalties: [
    'Eames',
    'Ariadne',
    'Arthur'
  ],
  dream: function(dreamLevel) {
    console.log('Dream: level ' + dreamLevel + ' / Dreamer : ' + this.name);
  }
};

var eames = Object.create(mainHero);
eames.name = 'Eames';

eames.dream(2);                   // => Dream: level 2 / Dreamer : Eames
      </code></pre>
      <pre v-highlightjs><code class="javascript">
console.log(mainHero.dream === eames.dream);                // => true, no code duplication
console.log(eames.loyalties);                               // => ['Eames','Ariadne','Arthur']
      </code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Prototype</h2>

      <pre v-highlightjs><code class="javascript">var reality = {
  level: 0,
  dreamer: undefined,
  team : ['Yusuf', 'Arthur', 'Eames', 'Cobb', 'Ariadne', 'Saito'],
  build: function () {console.log(this.dreamer + ' is dreaming...')}
};

var firstDream = Object.create(reality);
firstDream.level = 1;
firstDream.dreamer = 'Yusuf';
firstDream.team = ['Arthur', 'Eames', 'Cobb', 'Ariadne', 'Saito'];

var secondDream = Object.create(firstDream);
secondDream.level = 2;
secondDream.dreamer = 'Arthur';
secondDream.team = ['Eames', 'Cobb', 'Ariadne', 'Saito'];

firstDream.build();
secondDream.build();

console.log(firstDream.__proto__);

reality.level = Number.POSITIVE_INFINITY;</code></pre>

      <pre v-highlightjs><code class="javascript">console.log('level' in firstDream);   // => true
console.log('build' in firstDream);   // => true</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Constructor</h2>

      <pre v-highlightjs><code class="javascript">var Dream = function(dreamLevel) {
  this.level = dreamLevel | 0;
  this.team = ['Yusuf', 'Arthur', 'Eames', 'Cobb', 'Ariadne', 'Saito'],
  this.build = function () {console.log(this.dreamer + ' is dreaming...')}
}

Dream.prototype.dreamer = 'No one';

var firstDream = new Dream(1);
      </code></pre>

      <pre v-highlightjs><code class="javascript">console.log('dreamer' in Dream);                  // => false
console.log('dreamer' in Dream.prototype);        // => true

console.log('call' in Dream);                     // => true
console.log('call' in Dream.prototype);           // => false</code></pre>

    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>instanceof</h2>

      <pre v-highlightjs><code class="javascript">var Dream = function(dreamLevel) {
  this.level = dreamLevel | 0;
  this.team = ['Yusuf', 'Arthur', 'Eames', 'Cobb', 'Ariadne', 'Saito'],
  this.build = function () {console.log(this.dreamer + ' is dreaming...')}
}

Dream.prototype.dreamer = 'No one';

var firstDream = new Dream(1);
      </code></pre>

      <pre v-highlightjs><code class="javascript">console.log(firstDream instanceof Dream);      // => true
console.log(firstDream instanceof Object);     // => true</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Ninja Stuff</h1>

      <img src="./assets/ninja.gif">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Getter & Setter</h2>

      <pre v-highlightjs><code class="javascript">var dream = {
  get level() {
    return this._level || 1;
  },
  set level(value) {
    this.hasLevelChanged = true;
    this._level = value;
  },
  hasLevelChanged: false
};

console.log(dream.hasLevelChanged);               // => false
dream.level = 42;
console.log(dream.hasLevelChanged);               // => true
      </code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>defineProperty</h2>

      <pre v-highlightjs><code class="javascript">var dream = {
  hasLevelChanged: false
};

Object.defineProperty(dream, 'level', {
  get: function level() {
    return this._level || 1;
  },
  set: function level(value) {
    this.hasLevelChanged = true;
    this._level = value;
  },
});


console.log(dream.hasLevelChanged);               // => false
dream.level = 42;
console.log(dream.hasLevelChanged);               // => true
      </code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Additional Links</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">
              This references (MDN)
            </a>
          </li>
          <li>
            <a href="https://alistapart.com/article/getoutbindingsituations">
              An article about call, bind, and apply methods.
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create">
              Object.create() (MDN)
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes">
              A small guide about prototype in JavaScript (MDN)
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function">
              Using a constructor function (MDN)
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof">
              "instanceof" operator
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new">
              "new" operator in JavaScript (MDN)
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get">
              Getter
            </a>
            <span class="separator"> </span>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set">
              Setter
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
  name: 'object-and-class',
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
      this.$router.push(`/object-and-class/${this.currentSlideIndex}/${this.step}`);
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

  .separator {
    padding-right: 12px;
  }

  .main-img {
    width: 65vw;
  }
</style>
