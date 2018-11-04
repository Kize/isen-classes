<template>
  <div class="eg-slideshow">
    <slide class="slide" enter='bounceInRight'>
      <h1>Do That, I'll wait.</h1>

      <img src="./assets/waiting.gif" class="main-img">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Definitions</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li>
            AJAX (<b>A</b>synchronous <b>Ja</b>vascript + <b>X</b>ML)
          </li>
          <li>XMLHttpRequest</li>
          <li>Promise</li>
          <li>Fetch API</li>
        </ul>
      </div>
    </slide>

    <!--XHR-->
    <slide class="slide" enter='bounceInRight'>
      <h2>XHR</h2>
      <h3>How does it work ?</h3>

      <div class="list-container">
        <ol>
          <li>Get an XMLHttpRequest instance</li>
          <li>Create the HTTP request</li>
          <li>Listen for any <code>event</code></li>
          <li>Send the request</li>
          <li aria-selected="true">Handle the response</li>
        </ol>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>XHR</h2>
      <h3>How do I code that ? (1/2)</h3>

      <pre v-highlightjs><code class="javascript">// 1.
// W3C standard
var xhr = new XMLHttpRequest();</code></pre>

      <pre v-highlightjs><code class="javascript">// 2.
var httpMethod = 'GET';    // could be POST, PUT, DELETE...
var url = 'https://www.facebook.com/markzuckerberg/friends';
var asynchronous = true;   // If false, froze your browser until a response is received.
var username = 'zuck';
var password = 'imceobitch';

xhr.open(httpMethod, url, asynchronous, username, password);
xhr.open(httpMethod, url); // Only with required parameters</code></pre>

      <pre v-highlightjs><code class="javascript">// 3.
xhr.onreadystatechange = callback;</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>XHR</h2>
      <h3>How do I code that ? (2/2)</h3>

      <pre v-highlightjs><code class="javascript">// 4.
xhr.send();</code></pre>

      <pre v-highlightjs><code class="javascript">// 5.
// We forgot the callback to handle the response
function callback() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response);
  }
}</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Listen to a XHR events</h2>

      <pre v-highlightjs><code class="javascript">var xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', everyStateChangeCallback);
xhr.onload = successCallback;
xhr.addEventListener('load', successCallback);
xhr.addEventListener('error', handleError);</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>XHR</h2>
      <h3>Another example with a POST</h3>

      <pre v-highlightjs><code class="javascript">var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.facebook.com/login', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log('connected :)');
  }
};

var requestBody = '{"email":"mark.zuckerberg%40facebook.com","password":"imceobitch"}';
xhr.send(requestBody);</code></pre>

    </slide>

    <!--Jquery-->
    <slide class="slide" enter='bounceInRight'>
      <h2>AJAX & Jquery</h2>
      <h3>GET</h3>

      <pre v-highlightjs><code class="javascript">// Low level method
$.ajax({
  url: 'https://www.facebook.com/markzuckerberg/friends',
  success: function (data) {
    $('h1').html(data);
  }
});</code></pre>

      <pre v-highlightjs><code class="javascript">// Short hand method
$.get('https://www.facebook.com/markzuckerberg/friends', function (data) {
  $('.friends').html(data);
});</code></pre>

      <pre v-highlightjs><code class="javascript">// Fast AJAX partial reload
$('.friends').load('https://www.facebook.com/markzuckerberg/friends');</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>AJAX & Jquery</h2>
      <h3>POST</h3>

      <pre v-highlightjs><code class="javascript">// Low level method
$.ajax({
  type: 'POST',
  url: 'https://www.facebook.com/login',
  data: 'email=mark.zuckerberg%40facebook.com&password=imceobitch',
  success: function (data) { /* some code */ }
});</code></pre>

      <pre v-highlightjs><code class="javascript">// Short hand method
$.post('https://www.facebook.com//login',
  'email=mark.zuckerberg%40facebook.com&password=imceobitch',
  function (data) { /* some code */ });</code></pre>

      <pre v-highlightjs><code class="javascript">// Short hand method with data object
$.post('/login',
  { email: 'mark.zuckerberg@facebook.com', password: 'imceobitch' },
  function (data) { /* some code */ });</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>AJAX & Jquery</h2>
      <h3>More callbacks</h3>

      <pre v-highlightjs><code class="javascript">$.ajax({
  url: 'https://www.facebook.com/friends',
  complete: function (jqXHR, textStatus) {
    console.log('AJAX response received: ' + textStatus);
  },
  success: function (data) {
    $('.friends').html(data);
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.error('Error: ' + textStatus);
  }
});</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>AJAX & Jquery</h2>
      <h3>Functional style callbacks</h3>

      <pre v-highlightjs><code class="javascript">$.ajax({
  url: 'https://www.facebook.com/friends'
})
.always(function (data) {
  $('.friends').html(data);
})
.done(function (jqXHR, textStatus) {
  console.log('AJAX response received: ' + textStatus);
})
.fail(function (jqXHR, textStatus, errorThrown) {
  console.error('Error: ' + textStatus);
});</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>AJAX & Jquery</h2>
      <h3>Status codes</h3>

      <pre v-highlightjs><code class="javascript">$.ajax({
  url: 'https://www.facebook.com/friends',
  statusCode: {
    404: function (jqXHR, textStatus, errorThrown) {
      console.error('Page could not be found');
    }
  }
});</code></pre>
    </slide>

    <!--Promise-->
    <slide class="slide" enter='bounceInRight'>
      <h2>Promise</h2>

      <img src="./assets/promise.gif" class="main-img">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Definition</h2>

      <q>A Promise is an object representing the eventual completion or failure of an asynchronous operation.</q>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Implementation</h2>

      <pre v-highlightjs><code class="javascript">var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
    console.log('resolved');
  }, 300);
});

promise.then(function(value) {
  console.log(value);
  // expected output: "foo"
});</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Error handling</h2>

      <pre v-highlightjs><code class="javascript">var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('foo');
    console.log('failed');
  }, 300);
});

promise.catch(function(err) {
  console.error(err);
  // expected error logged: "foo"
});</code></pre>

      <pre v-highlightjs><code class="javascript">promise.then(function() {}, function(err) {
  console.error(err);
});</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Promises and XHR</h2>

      <pre v-highlightjs><code class="javascript">function retrieveData(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {resolve(xhr.responseText);};
    xhr.onerror = function() {reject(xhr.statusText);};
    xhr.send();
  });
}

var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json';
retrieveData(url).then(console.info, console.warn);</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Why use promises ?</h2>
      <h3>callback hell !</h3>

      <pre v-highlightjs><code class="javascript">
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(newNewResult) {
      doFourthThing(newNewResult, function(finalResult) {
        console.log('Got the final result: ' + finalResult);
      }, failureCallback);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
      </code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>With promises</h2>

      <pre v-highlightjs><code class="javascript">doSomething()
  .then(function(result) {
    return doSomethingElse(result);
  })
  .then(function(newResult) {
    return doThirdThing(newResult);
  })
  .then(function(newNewResult) {
    return doFourthThing(newNewResult);
  })
  .then(function(finalResult) {
    console.log('Got the final result: ' + finalResult);
  })
  .catch(failureCallback);</code></pre>
    </slide>

    <!--Fetch-->
    <slide class="slide" enter='bounceInRight'>
      <h2>Fetch API</h2>

      <img src="./assets/fetch.gif" class="main-img">
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Definition</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li>Replace the XMLHttpRequest</li>
          <li>
            A function
            <ul class="no-dot-list">
              <li>One mandatory parameter</li>
              <li>Returns a promise</li>
              <li>Won't be rejected on a HTTP status in error (eg. 400 or 500)</li>
            </ul>
          </li>
          <li>Exists only in modern browsers</li>
        </ul>
      </div>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Code example</h2>

      <pre v-highlightjs><code class="javascript">var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json';

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(jsonData){
    console.log(JSON.stringify(jsonData));
  });
  .catch(function(error){
    console.error(error);
  });</code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Fetch's Response</h2>

      <pre v-highlightjs><code class="javascript">response.ok;            // Boolean, true if: 200 &lt;= status &lt; 300
response.status;        // Number, HTTP status code
response.headers;       // Http Response headers
response.json();        // Returns a promise that resolves the response body as a JSON
response.text();        // Returns a promise that resolves the response body as a text

// And much more things...
      </code></pre>
    </slide>

    <slide class="slide" enter='bounceInRight'>
      <h2>Fetch to post data ?</h2>

      <pre v-highlightjs><code class="javascript">var url = 'https://example.com/profile';
var data = {username: 'example'};

var options = {
  method: 'POST',
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: {
    'Content-Type': 'application/json'
  }
};

fetch(url, options)
  .then(function(response) {
    return response.json();
  )
  .then(function(result) {
    return console.log('Success:', JSON.stringify(result));
  })
  .catch(function(error) {
    console.error('Error:', error);
  });</code></pre>
    </slide>

    <!--Links-->
    <slide class="slide" enter='bounceInRight'>
      <h2>Additional links</h2>

      <div class="list-container">
        <ul class="no-dot-list">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX">
              About AJAX (MDN)
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">
              XMHttpRequest documentation  (MDN)
            </a>
          </li>
          <li>
            <a href="http://api.jquery.com/jquery.ajax/">
              Jquery Ajax method
            </a>
          </li>
          <li>
            <a href="http://api.jquery.com/load/">
              Jquery Load method
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
              Promise (MDN)
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
              Fetch API (MDN)
            </a>
          </li>
          <li>
            <a href="http://callbackhell.com/">
              callbackhell.com
            </a>
          </li>
          <li>
            <a href="https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1">
              Understanding promises in JavaScript (hackernoon)
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
  name: 'async',
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
      this.$router.push(`/async/${this.currentSlideIndex}/${this.step}`);
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

  h3 {
    margin-top: 0;
  }

  .main-img {
    height: 50vh;
    max-width: 90vw;
  }

  code:not(.javascript) {
    color: #d14;
  }

  q {
    font-style: italic;
    color: #999999;
    font-size: 2em;
  }
</style>
