<template>
  <div class="eg-slideshow hitchhiker">
    <slide class="slide" enter='bounceInRight'>
      <h1>The Hitchhiker's Guide To The Javascript</h1>
      <img src="./assets/h2h2.gif">
    </slide>

    <slide class="slide" enter='bounceInRight' steps="9">
      <h2>Definition</h2>

      <div class="slide-content list-container">
        <ul class="no-dot-list">
          <li v-bind:class="{'hide': step < 2}">
            <a href="http://en.wikipedia.org/wiki/Dynamic_language">
              Dynamic
            </a></li>
          <li v-bind:class="{'hide': step < 3}">
            <a href="http://en.wikipedia.org/wiki/Weak_typing">
              Weakly typed
            </a></li>
          <li v-bind:class="{'hide': step < 4}">
            <a href="http://en.wikipedia.org/wiki/Multi-paradigm#Multi-paradigm_programming_language">
              Multi-paradigm</a>
          </li>
          <li v-bind:class="{'hide': step < 5}">
            <a href="http://en.wikipedia.org/wiki/Imperative_programming">
              Imperative
            </a>
          </li>
          <li v-bind:class="{'hide': step < 6}">
            <a href="http://en.wikipedia.org/wiki/Functional_programming">
              Functional</a>
          </li>
          <li v-bind:class="{'hide': step < 7}">
            <a href="http://en.wikipedia.org/wiki/Object-oriented_programming">
              Object-oriented
            </a>
          </li>
          <li v-bind:class="{'hide': step < 8}">
            <a href="http://en.wikipedia.org/wiki/First-class_function">
              First-class functions
            </a>
          </li>
          <li v-bind:class="{'hide': step < 9}">
            <a href="http://en.wikipedia.org/wiki/Prototype-based_programming">
              Prototype-based
            </a>
          </li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' steps="8">
      <h2>Usages</h2>

      <div class="slide-content list-container">
        <ul class="no-dot-list alt-color-list">
          <li v-bind:class="{'hide': step < 2}">Web server</li>
          <li v-bind:class="{'hide': step < 3}">Browser addons/extensions</li>
          <li v-bind:class="{'hide': step < 4}">Mobile applications</li>
          <li v-bind:class="{'hide': step < 5}">Databases consoles</li>
          <li v-bind:class="{'hide': step < 6}">OpenOffice scripts/macros</li>
          <li v-bind:class="{'hide': step < 7}">Java applications</li>
          <li v-bind:class="{'hide': step < 8}">System applications</li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' steps="5">
      <h2>The Basics</h2>

      <div class="slide-content">
        <ul class="no-dot-list">
          <li v-bind:class="{'hide': step < 2}">Javascript is case sensitive.</li>
          <li v-bind:class="{'hide': step < 3}">Each instruction ends with a <span class="accent">;</span></li>
          <li v-bind:class="{'hide': step < 4}">Blocks are delimited by <span class="accent">{ }</span></li>
          <li v-bind:class="{'hide': step < 5}">
            Comments :
            <ul class="no-dot-list">
              <li><span class="accent">//</span> for single line</li>
              <li><span class="accent">/* */</span> for multiple lines</li>
            </ul>
          </li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Variables</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">// global declaration
var ultimateAnswer = 42;</code></pre>

        <pre v-highlightjs><code class="javascript">// ES6 new declarations
let cocktail = 'Pan Galactic Gargle Blaster';
const hero = {
  name: 'Arthur Dent'
  race: 'Ape descendant'
};</code></pre>

      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Types</h1>

      <img class="main-gif" src="./assets/sofa.gif" alt="gif about h2g2">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Number</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">var ultimateAnswer = 42; // an integer

var heroSize = 5.8; // a float

var jatravartidsNumberofArms = 062; // Jatravartids have 50 arms.

var arthurNumberOfArms = 0b10; // As a human, Arthur has 2 arms.

var heartOfGoldLength = 0x96; // The Heart Of Gold is 150 metres long.

var scientificUltimateAnswer = 0.42e2; // Still 42.

0.2 + 0.1 === 0.30000000000000004 // This is true.</code></pre>

        <pre v-highlightjs><code class="javascript">var test = new Number(12);</code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>String</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">var empty = ""; // An empty string; empty.length === 0

var dolphinSongTitle = "So Long, and Thanks for All the Fish"; // A string

var name = 'Humma Kavula'; // Other syntax

var quote = '- Arthur: "I think I\'m a sofa."';

var multiLine = 'Babel fish: \n- yellow \n- small \n- leech-like';

/* ES6 template string */
const quote = `- Zaphod Beeblebrox: "${name}"!`; // '- Zaphod Beeblebrox: "Humma Kavula"!'

let multiLineES6 = `Babel fish:
- yellow
- small
- leech-like`;</code></pre>

        <pre v-highlightjs><code class="javascript">var test = new String('Am I a string ?');</code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Boolean</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var isTimeAnIllusion = true;        // "Time is an illusion ...

var isLunchtimeAnIllusion = false;  // ... lunchtime, doubly so." - Ford Prefect
        </code></pre>

        <pre v-highlightjs><code class="javascript">var isBoolean = new String(false);</code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Null || Undefined</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var isTimeAnIllusion; // undefined

var isLunchtimeAnIllusion = null; // null
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Array</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">var emptyArray = [];

var anotherEmptyArray = new Array();

var array1 = [,,,]; // [undefined, undefined, undefined, undefined]

var array2 = new Array(4); // Same as array1

var multiTypeArray = [1, 'a', true, array1];</code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Arrays manipulation</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var characters = ['Arthur Dent', 'Ford Prefect', 'Zaphod Beeblebrox'];

var mainCharacter = characters[0]; // 'Arthur Dent'

var nobody = characters[-1]; // undefined

var zaphod = characters.pop();      // zaphod === 'Zaphod Beeblebrox' & characters.length === 2

var newLength = characters.push('Trillian');  // newLength === 3

var perfectDuo = characters.splice(0, 2, 'Slartibartfast');
// characters = ['Slartibartfast', 'Trillian']
// perfectDuo = ['Arthur Dent', 'Ford Prefect']

// ES6 spread operator
var allChars = [...perfectDuo, zaphod, ...characters];
// allChars = ['Arthur Dent', 'Ford Prefect', 'Zaphod Beeblebrox', 'Slartibartfast', 'Trillian']

var [arthur, ...allOthers] = allChars;
// arthur = 'Arthur Dent'
// allOthers = ['Ford Prefect', 'Zaphod Beeblebrox', 'Slartibartfast', 'Trillian']
        </code></pre>

        <a class="right-link"
           href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">
          MDN Array Methods
        </a>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Operators</h1>

      <img class="main-gif" src="./assets/marvin-computer.gif"/>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Arithmetics</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var a = 6 + 4;                    // 10
var b = -a;                       // -10

var d = 1, e = ++d;               // d and e are both 2
var f = 1, g = f++;               // f is 2, g is 1
var h = 7, i = --h;               // h and i are both 6
var j = 7, k = j--;               // j is 6, k is 7

var l = 3 * 3                     // l => 9
var m = 10 / 3                    // m => 3.3333333333333335
var n = 10 % 3                    // n => 1

var o = "Dodge" + " " + "this."   // o => "Dodge this.";
var p = a + o;                    // p => "10Dodge this.";
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Equality</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
// Equality
var a = "2" == 2;           // a => true
var b = "2" != 2;           // b => false
var c = null == undefined   // c => true


// Strict equality
var d = "2" === 2;          // d => false
var e = "2" !== 2;          // e => true
var f = null === undefined  // f => false
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Comparison</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var a = 2 > 2;          // a => false
var b = 2 <= 2;         // b => true
var c = "2" >= 2;       // c => true
var d = 2 < 2;          // d => false
var e = 2 <= 2;         // e => true


var f = 'abc' < 'def'   // f => true
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Logical</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var a = true && false;  // a => false
var b = true || false;  // b => true
var c = !true;          // c => false
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Bitwise</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var a = 42 & 2   // a =>          2  (AND)
var b =  7 | 2   // b =>          7  (OR)
var c =  7 ^ 2   // c =>          5  (XOR)
var d = ~8       // d =>         -7  (NOT)
var e =  1 << 3  // e =>          8  (Shift left)
var f =  8 >> 2  // f =>          2  (Shift right)
var g = -1 >>  2 // g =>         -1
var h = -1 >>> 2 // h => 1073741823  (Shift right with zero fill)
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Assignment</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var a = 1, b = 0;
a += b    // a = a + b
a -= b    // a = a - b
a *= b    // a = a * b
a /= b    // a = a / b
a %= b    // a = a % b
a <<= b   // a = a << b
a >>= b   // a = a >> b
a >>>= b  // a = a >>> b
a &= b    // a = a & b
a |= b    // a = a | b
a ^= b    // a = a ^ b
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>typeof & in</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var a = 3;
var b = typeof a;   // b => "number"
var c = "";
var d = typeof c;   // d => "string"
var e = true;
var f = typeof e;   // f => "boolean"
        </code></pre>

        <pre v-highlightjs><code class="javascript">
var a = [1,9,4];
var b = (2 in a);          // b => true
var c = (9 in a);          // c => false
var d = (length in a);     // d => true
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Type conversions</h1>

      <img class="main-gif" src="./assets/marvin-freeze.gif">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Explicit conversion</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
// to Number
var a = Number("10");         // a => 10
var b = Number(false);        // b =>  0
var c = parseInt("10", 10);   // c => 10
var d = parseInt(10.2);       // d => 10
var e = parseFloat("10.2");   // e => 10.2

// to String
var a = String(false);        // a => "false"
var b = String(10);           // b => "10"
var c = String(10.2);         // c => "10.2"
var d = (10).toString();      // d => "10"

// to Boolean
var a = Boolean(10);          // a => true
var b = Boolean(0);           // b => false
var c = Boolean(0.3);         // c => true
var d = Boolean("true");      // d => true
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Implicit conversion</h2>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
// to Number
var a = +"10";            // a => 10
var b = "10" >> 0;        // b => 10
var c = "10" * 1;         // c => 10
var d = ~~"10";           // d => 10
var e = "2" * "5";        // e => 10 (both strings converts to number)

// to String
var a = 10 + "10";             // a => "1010"
var b = "10" + "10";           // b => "1010"
var c = 10 + " agents";        // c => "10 agents"
var d = 10 + 10 + " agents";   // d => "20 agents"

// to Boolean
var a = !!'morpheus';     // a => true
var b = !!'';             // b => false
var c = !!'0';            // c => true
var d = !!'1';            // d => true
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Summary</h2>

      <div class="slide-content">
        <table class="summary-table">
          <thead>
          <tr>
            <th>Value</th>
            <th>String</th>
            <th>Number</th>
            <th>Boolean
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>undefined</td>
            <td>"undefined"</td>
            <td>NaN</td>
            <td>false
            </td>
          </tr>
          <tr>
            <td>null</td>
            <td>"null"</td>
            <td>0</td>
            <td>false
            </td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>true</td>
            <td>"true"</td>
            <td>1</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>false</td>
            <td>"false"</td>
            <td>0</td>
            <td>
            </td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>"" (empty string)</td>
            <td></td>
            <td>0</td>
            <td>false
            </td>
          </tr>
          <tr>
            <td>"1.2" (nonempty, numeric)</td>
            <td></td>
            <td>1.2</td>
            <td>true
            </td>
          </tr>
          <tr>
            <td>"one" (nonempty, non-numeric)</td>
            <td></td>
            <td>NaN</td>
            <td>true
            </td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>0</td>
            <td>"0"</td>
            <td></td>
            <td>false
            </td>
          </tr>
          <tr>
            <td>-0</td>
            <td>"0"</td>
            <td></td>
            <td>false
            </td>
          </tr>
          <tr>
            <td>NaN</td>
            <td>"NaN"</td>
            <td></td>
            <td>false
            </td>
          </tr>
          <tr>
            <td>Infinity</td>
            <td>"Infinity"</td>
            <td></td>
            <td>true
            </td>
          </tr>
          <tr>
            <td>-Infinity</td>
            <td>"-Infinity"</td>
            <td></td>
            <td>true
            </td>
          </tr>
          <tr>
            <td>1 (finite, non-zero)</td>
            <td>"1"</td>
            <td></td>
            <td>true
            </td>
          </tr>
          </tbody>
          <tbody>
          <tr>
            <td>[] (empty array)</td>
            <td>""</td>
            <td>0</td>
            <td>true
            </td>
          </tr>
          <tr>
            <td>[9] (1 numeric elt)</td>
            <td>"9"</td>
            <td>9</td>
            <td>true
            </td>
          </tr>
          <tr>
            <td>['a'] (any other array)</td>
            <td>use join() method</td>
            <td>NaN</td>
            <td>true
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Statements</h1>

      <img class="main-gif" src="./assets/thursday.gif">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>if/else</h1>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
if (heroName == null) {       // if heroName is null or undefined,
  heroName = "Arthur Dent";   // define it
}


if (bulletCount === 1) {
  bulletCount += ' bullet';
} else {
  bulletCount += ' bullets';
}


var user = (name == null) ? 'default user' : name;
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>switch</h1>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
var quote;
switch (characterName) {
  case 'Arthur':
    quote = 'Marvin, give me a hand.';
    break;
  case 'dolphin':
    quote = 'So long, and thanks for all the fish.';
    break;
  default:
    quote = '42';
    break;
}
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Loops</h1>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
for (var i = 0; i < 10; i++) {
  doSomething();
}


var count = 0;
while (count < 10) {
  doSomething();
  count++;
}


var count = 100;
do {
  doSomething();
} while (--count > 0);
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Funtions</h1>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
function functionName(var1, var2, var3) { // no variable types
  /*
    Some code here
  */
  return returnVal;                       // optional
}

function useArgs(var1, var2, var3) {
  var a = arguments.length;       // array containing all the arguments
  var result = "";
  for (var i = 0; i < a; i++) {
    result += " " + arguments[i];
  }
  return result;
}
var b = useArgs("Déjà", "vu");    // b => " Déjà vu", var3 = undefined

// ES6 Arrow function
var fn = (...args) => {
  console.log(args);
};
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight' steps="4">
      <h1>Variable scope</h1>

      <div class="internal-slide-animation">
        <eg-transition enter="fadeInRight" leave="fadeOutLeft">
          <div class="slide-content" v-if="step < 2">
          <pre v-highlightjs><code class="javascript">
var name = 'Arthur';                    // not in a function => variable is global

function getHeroName() {
  var lastName = 'Dent';                // inside a function => variable is local
  return name + ' ' + lastname;         // can access global variable "name"
}
getHeroName();

var a = lastName;           // ReferenceError lastName is not defined
                            // can not access local variable "lastName"
          </code></pre>
          </div>
        </eg-transition>

        <eg-transition enter="fadeInRight" leave="fadeOutLeft">
          <div class="slide-content" v-if="step === 2">
          <pre v-highlightjs><code class="javascript">
var i = 1;
function foo() {
  var i = 3;
}
foo();

var a = i;        // a => 1


var i = 1;
function foo() {
  i = 3;          // no var keyword !!! :-(
  j = 4;          // no var keyword !!! :-(
}
foo();

var a = i;        // a => 3
var b = j;        // b => 4
          </code></pre>
          </div>
        </eg-transition>

        <eg-transition enter="fadeInRight" leave="fadeOutLeft">
          <div class="slide-content" v-if="step >= 3">
            <pre v-highlightjs><code class="javascript">/* var versus let */
var a = 42;
let foe = 'Humma Kavula !!!';

for(var a = 0; a < 10; a++) {
  setTimeout(() => {console.log(a);}, 0);
}
console.log(a);

for(let foe = 0; foe < 10; foe++) {
  setTimeout(() => {console.log(foe);}, 0);
}
console.log(foe);
            </code></pre>

            <pre v-highlightjs v-if="step >= 4"><code class="javascript">Output results:
  10
  Humma Kavula !!!
=> 10 times the output 10
=> 0, 1, 2, 3, ..., 9
            </code></pre>
          </div>
        </eg-transition>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Integration</h1>

      <div class="slide-content">
        <pre v-highlightjs><code class="javascript">
&lt;!DOCTYPE html>
&lt;html>
  &lt;head>
    &lt;script src="myscript1.js">&lt;/script>      &lt;!-- unobstrusive JS -->
    &lt;script> // some code &lt;/script>           &lt;!-- REALLY BAD PRACTICE -->
  &lt;/head>
  &lt;body>
    &lt;script src="myscript2.js">&lt;/script>      &lt;!-- better unobstrusive JS -->
  &lt;/body>
&lt;/html>
        </code></pre>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Compatibility</h1>

      <div class="slide-content list-container">
        <ul class="no-dot-list">
          <li>Read the documentation</li>
          <li>Can I use ?</li>
          <li>Test on your target browsers</li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h1>Additional Links</h1>

      <div class="slide-content list-container">
        <ul class="no-dot-list">
          <li><a href="https://developer.mozilla.org/en/JavaScript/Reference">JavaScript Reference (MDN)</a></li>
          <li><a href="https://github.com/tc39">TC39 Github Organization</a></li>
          <li><a href="https://github.com/getify/You-Dont-Know-JS">You don't know JavaScript (e-books)</a></li>
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
  name: 'the-hitchhikers-guide-to-the-javascript',
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
      this.$router.push(`/the-hitchhikers-guide-to-the-javascript/${this.currentSlideIndex}/${this.step}`);
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
  .hitchhiker {
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
    background: url('./assets/bg-space.jpg') repeat;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: -1;

    .accent {
      color: #16a7dc;
      font-weight: bolder;
    }

    .eg-slide {
      background: none;

      h1, h2 {
        color: #16a7dc;
      }

      h2 {
        margin-bottom: 8px;
      }

      .slide-content {
        background-color: white;
        border-radius: 15px;
        padding: 1em;
        text-align: left;
      }
    }

    .summary-table {
      border-spacing: 0;
      font-size: 0.9em;
      margin: auto;

      th, td {
        border: 1px solid black;
        padding: 0 1em 0 12px;
      }
    }

  }

  .right-link {
    display: block;
    text-align: right;
  }

  img.main-gif {
    margin-top: 2em;
    height: 45vh;
  }
</style>
