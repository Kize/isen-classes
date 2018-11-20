<template>
  <div class="eg-slideshow">
    <slide class="slide" enter='bounceInRight'>
      <div class="main-img-container">
        <img src="./assets/node.png">
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>History</h2>

      <div class="list-container">
        <ul>
          <li>2009: Ryan Dahl</li>
          <li>2011: First version of Node.js</li>
          <li>C, C++</li>
          <li>V8 Engine</li>
          <li>Asynchronous I/O</li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Callbacks</h2>

      <div class="list-container">
        <ul>
          <li>A function triggered at an event</li>
          <li>Can be any function's reference</li>
          <li>May be called with some parameters</li>
          <li>
            In Node.js, there is a convention with callbacks:
            <ul>
              <li>The first parameter is a possible error.</li>
              <li>All the others will be some data.</li>
            </ul>
          </li>
        </ul>
      </div>

      <pre v-highlightjs><code class="javascript">
let callback = function(err, result) {
  if (err) {
    console.error(err.message);
  } else {
    console.log(result)
  }
};
      </code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Modules</h2>

      <div class="main-img-container">
        <img src="./assets/npm.png">
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Node Modules</h2>

      <div class="list-container">
        <ul>
          <li>Each <code>.js</code> file is a module in Node.js</li>
          <li>Node.js uses the <i>require/exports</i> API</li>
          <li>
            There 2 types of modules in Node.js:
            <ul>
              <li>Internal modules (your app)</li>
              <li>External modules (dependencies)</li>
            </ul>
          </li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Require/exports</h2>

      <pre v-highlightjs><code class="javascript"> // File add.js
function add(a, b) {
  return a + b;
}

module.exports = {
  add: add
};
      </code></pre>

      <pre v-highlightjs><code class="javascript"> // File main.js
var addService = require('./add.js');

var perfectNumber = addService.add(40, 2);

console.log(perfectNumber);
      </code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Require()</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li>The <code>.js</code> isn't mandatory</li>
          <li>Require can also import a <code>.json</code> file</li>
          <li>The path is relative to the working directory</li>
          <li>
            If the path doesn't start with <code>./</code> or <code>../</code>,
            require() will search in the <code>Node.js kernel</code>, or in the <code>node_modules</code> directory
          </li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>NPM</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li>A backronym</li>
          <li>A command tool written with Node.js</li>
          <li>A package manager, for <a target="_blank" href="https://npmjs.com">npmjs.com</a></li>
          <li>Created in 2010</li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Some <code>NPM</code> commands</h2>

      <pre v-highlightjs><code class="bash">npm install</code></pre>
      <pre v-highlightjs><code class="bash">npm install --save my-package</code></pre>
      <pre v-highlightjs><code class="bash">npm install -g my-package</code></pre>
      <pre v-highlightjs><code class="bash">npm update</code></pre>
      <pre v-highlightjs><code class="bash">npm remove</code></pre>
      <pre v-highlightjs><code class="bash">npm run cmd</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>package.json</h2>

      <p>This file can be generated with <code class="bash">npm init</code>.</p>

      <pre v-highlightjs><code class="json">{
  "name": "isen-classes",
  "version": "0.1.0",
  "author": "Kize",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "publish": "npm run build && cd dist && echo 'isen-cir-2.surge.sh' > CNAME && surge"
  },
  "dependencies": {
    "eagle.js": "^0.3.0",
    "highlight.js": "9.12.0",
    "vue": "^2.5.17",
    "vue-router": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.0.0",
    "@vue/cli-service": "^3.0.0",
    "@vue/eslint-config-airbnb": "^3.0.0",
    "node-sass": "^4.9.3",
    "sass-loader": "^7.1.0",
    "vue-template-compiler": "^2.5.17"
  }
}</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Node.js server</h2>

      <img src="./assets/monster.png">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>http server</h2>

      <pre v-highlightjs><code class="javascript">var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world');
}).listen(1234);</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>http client</h2>

      <pre v-highlightjs><code class="javascript">var http = require('http');
var options = {
  hostname: 'registry.npmjs.org',
  port: 80,
  path: '/',
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('Code HTTP :', res.statusCode);
  console.log('Headers :', res.headers);
  console.log('Content :');
  var d = '';

  res.on('data', function(data) { d += data; });
  res.on('end', function() {
    console.log(d);
  });

}).on('error', function(e) {
  console.log('Problem with request: ' + e.message);
});
console.log('sending the request');
req.end();
console.log('request sent');</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Express server</h2>

      <pre v-highlightjs><code class="javascript">var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(1234, function () {
  console.log('Example app listening on port 1234!');
});</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Additional Links</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li>
            <a href="https://nodejs.org/dist/latest-v10.x/docs/api/index.html#">Node.js Documentation</a>
          </li>
          <li>
            <a href="https://www.npmjs.com/">NPMjs.com</a>
          </li>
          <li>
            <a href="https://github.com/npm/node-semver">Semver notation for NPM dependencies</a>
          </li>
          <li>
            <a href="https://nodejs.org/docs/latest-v10.x/api/http.html">Node.js http module documentation</a>
          </li>
          <li>
            <a href="http://expressjs.com/">Express</a>
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
        this.$router.push(`/node.js/${this.currentSlideIndex}/${this.step}`);
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

  .main-img-container {
    height: 90vh;
    padding-top: 15vh;
  }

  code:not(.hljs) {
    color: red;
    font-size: 0.8em;
  }
</style>
