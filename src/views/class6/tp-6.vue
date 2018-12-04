<template>
  <section class="main-content">
    <article class="tp-background">
    </article>
    <h1>Testing</h1>

    <img src="" class="tp-img">

    <nav>
      <p>Table of content</p>
      <ul>
        <li>
          <a href="#ex-1" v-on:click="restoreUrl">FizzBuzz</a>
        </li>
        <li>
          <a href="#ex-2" v-on:click="restoreUrl">Show me the money.</a>
        </li>
        <li>
          <a href="#ex-3" v-on:click="restoreUrl">Bonus (optional)</a>
        </li>
      </ul>
    </nav>

    <p>Here is the first lab, please follow those instructions: </p>
    <ul>
      <li>Read fully each exercise</li>
      <li>Identify your learning goals</li>
      <li>Understand the context</li>
      <li>Follow indicated rules</li>
      <li>Commit <i class="accent">ONLY</i> files asked</li>
      <li>Submit an archive (<code>.tar.gz</code>) containing a directory per exercise</li>
    </ul>

    <strong>Releases Dates:</strong>
    <ul>
      <li>First group: 1544828399368</li>
      <li>Second group: 1545433199368</li>
    </ul>

    <p>The lesson contains lots of references to help you find the solution.
      You must find documentation by yourself.</p>
    <p>Remember that the web is your friend ;-)</p>
    <p>Have fun !</p>

    <!--EXERCISE 1-->
    <hr>
    <h2 id="ex-1">FizzBuzz</h2>
    <h3>Learning goals</h3>
    <ol>
      <li>Practice TDD</li>
      <li>Write unit tests</li>
      <li>Discover Jest</li>
    </ol>

    <h3>Context</h3>

    <p>
      You don't always work on fancy applications with GIFs everywhere.
      Sometimes, you have to write algorithms, and you have to test its.
    </p>

    <p>
      In order to practice TDD and unit testing, you will code a modified version of the FizzBuzz game.
    </p>

    <h3>Steps</h3>
    <ul>
      <li>Start a new project, install <code>jest</code></li>
      <li>Create a file called <code>fizzbuzz.js</code>, which exports a method <code>fizzbuzz</code>.</li>
      <li>Create a file called <code>fizzbuzz.test.js</code>.</li>
      <li>Write your first test, make it pass, refactor, and go on...</li>
    </ul>

    <h3>FizzBuzz's rules</h3>
    <ul>
      <li>The function takes a number in parameter, and returns a string.</li>
      <li>The function returns an empty string if no number is provided.</li>
      <li>
        Moreover, when it is dividable by 3, add 'fizz' to the result, when it's dividable by 5, add 'buzz'.
        Otherwise, return the number as a string.
      </li>
      <li>
        For instance, here is a list of expected results, depending on what's given:
        <ul>
          <li>given 15, 'fizzbuzz'</li>
          <li>given 42, 'fizz'</li>
          <li>given 7, '7'</li>
          <li>given 9000, 'fizzbuzzfizzbuzzbuzz'</li>
          <li>given 50, 'buzzbuzz'</li>
        </ul>
      </li>
    </ul>

    <h3>Exercise's rules</h3>
    <ul>
      <li>No dependency. Only devDependencies are allowed.</li>
    </ul>

    <h3>Deliveries</h3>

    <article class="delivery-file js">fizzbuzz.js</article>
    <article class="delivery-file js">fizzbuzz.test.js</article>
    <article class="delivery-file img">package.json</article>


    <!--EXERCISE 2-->
    <hr>
    <h2 id="ex-2">Show me the money</h2>
    <h3>Learning goals</h3>
    <ol>
      <li>Become a master tester with Jest</li>
      <li>Learn how to use mocks</li>
      <li>Test asynchronous functions</li>
    </ol>

    <h3>Context</h3>
    <p>
      Today we'll write an small app to convert an amount of money in one currency, into another.
      In this exercise, the idea is to create services to get change rates, and convert money.
    </p>
    <p>In the next one, we'll do an express app to use those services.</p>

    <h3>Steps</h3>
    <h4>Init</h4>
    <ol>
      <li>Start a new Nodejs project, with jest installed as a DevDependency.</li>
      <li>
        Create a file called <code>convert.service.js</code>,
        that exports an object containing a method, called <code>convert</code>.
        <br> This method has 3 arguments:
        <code>amount</code>, <code>sourceCurrency</code>, <code>destinationCurrency</code>.
        <br> Create the test file for this service.
      </li>
      <li>
        Create a file called <code>change-rate.service.js</code>,
        that exports an object containing 2 methods, called <code>getChangeRates</code>, <code>getChangeRate</code>.
        <br> The first method has 1 argument: <code>sourceCurrency</code>. The second one has two arguments:
        <code>sourceCurrency</code>, <code>destinationCurrency</code>.
        <br> Create the test file for this service.
      </li>
    </ol>

    <h4>Convert</h4>
    <ol>
      <li>
        Implement the <code>convert</code> method in <i class="accent">TDD</i>, following those specifications :
        <ul>
          <li>It always returns a <code>Promise</code> instance, which can be either resolved or rejected.</li>
          <li>When resolved, the <code>convert</code> method will return the amount in the destination currency asked.</li>
          <li>Handle default errors if parameters aren't correctly provided, by rejecting the promise.</li>
          <li>
            At some point, it should call the method <code>getChangeRate</code>
            from the <i class="accent">class-rate.service.js</i>.
            <br> This method is not implemented yet, but we don't care, because it will be mocked in our tests.
            You only need to know that this method always returns a <code>Promise</code>, that returns the
            rate asked when resolved.
            <br> So, when you test the method <code>convert</code>,
            you don't want to test the method <code>getChangeRate</code>,
            mock it each time you need, with the rate you need.
          </li>
        </ul>

      </li>
    </ol>

    <h4>GetChangeRate</h4>
    <ol>
      <li>
        Implement the <code>getChangeRate</code> method in <i class="accent">TDD</i>, following those specifications :
        <ul>
          <li>It always returns a <code>Promise</code> instance, which can be either resolved or rejected.</li>
          <li>When resolved, it returns the rate asked, depending on rates provided by <code>getChangeRates</code>.</li>
          <li>It can return a rejected promise if parameters are invalid.</li>
          <li>
            As the method <code>getChangeRates</code> is not implemented yet,
            you should assume that it will return a promise, providing a json liking that :
          </li>
        </ul>
      </li>
    </ol>

    <pre v-highlightjs><code class="json">{
  "base": "EUR",
  "rates": {
    "CAD": 1.4931,
    "PHP": 59.41,
    "HRK": 7.4038,
    "NOK": 9.6893,
    "USD": 1.1332,
    "THB": 37.152,
    "SEK": 10.2355,
    "CNY": 7.8074,
    "CHF": 1.1323,
    "INR": 79.791
    // and so on...
  }
}</code></pre>

    <p>
      The base is depending on the given parameter, the <code>sourceCurrency</code>.
    </p>

    <p>
      In your tests, do as before, mock the method not implemented (<code>getChangeRates</code>),
      as you don't want to test it, you want to test <code>getChangeRate</code>.
    </p>

    <h4>GetChangeRates</h4>
    <ol>
      <li>Install node-fetch as a dependency.</li>
      <li>
        Use this url to call the API, and retrieve the list of rates:
        <br> <code>https://api.exchangeratesapi.io/latest?base=USD</code>
        <br> <i class="accent">Note</i>: replace 'USD' by the sourceCurrency argument,
        in order make it easier to retrieve the rate.
      </li>
      <li>To sum up, this method should return a promise, resolving a json looking like the on above.</li>
      <li>
        Do you think it is pertinent to write unit tests for this method ?
        If you don't, argue why in comments above the method.
      </li>
    </ol>

    <h3>Rules</h3>
    <p>No dependency allowed, except <code>node-fetch</code>.</p>

    <h3>Deliveries</h3>
    <article class="delivery-file js">convert.service.js</article>
    <article class="delivery-file js">convert.service.test.js</article>
    <article class="delivery-file js">change-rate.service.js</article>
    <article class="delivery-file js">change-rate.service.test.js</article>
    <article class="delivery-file img">package.json</article>


    <p>Same as the first exercise.</p>


    <!--EXERCISE 3-->
    <hr>
    <h2 id="ex-3">Bonus (optional)</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Practice building express apps.</li>
      <li>Practice writing complex algorithms</li>
    </ul>

    <h3>Context</h3>
    <p>Well, you have your services, but you don't have the server.</p>
    <p>Build a Nodejs server, exposing those features, and more !</p>

    <h3>Ideas</h3>
    <ul>
      <li>Add a route to return rates, depending on a source Currency.</li>
      <li>Add a route to return the conversion of a amount in another currency. (ex: 10 EUR => xUSD)</li>
      <li>
        Add a route to compute complex conversions.
        For instance, if I have 5 EUR + 6 USD, how many have I got in CAD ?
      </li>
    </ul>

    <h3>Deliveries</h3>

  </section>
</template>

<script>

export default {
  name: 'tp-draw-shapes',
  methods: {
    restoreUrl() {
      setTimeout(() => {
        this.$router.push('/tp6');
      }, 1);
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../styles/colors';

  .tp-background {
    background: url('./assets/money.png') repeat;
    opacity: 0.7;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }

  .tp-img {
    position: relative;
    top: -40px;
    float: right;
    max-width: 375px;
  }

  h1 {
    font-size: 3em;
    color: $meadow;
  }

  h2 {
    color: #E74C3C;
  }

  h3 {
    color: #3498DB;
    padding-left: 1em;
  }

  h4 {
    color: $meadow;
    text-decoration: underline;
  }

  i.accent, strong {
    color: red;
    font-weight: bold;
  }

  code:not(.hljs) {
    padding: 1px 2px;
    line-height: 1.5em;
    color: #d14;
    background-color: #f7f7f9;
    border: 1px solid #e1e1e8;
  }

  li {
    margin-bottom: 4px;
  }

  .delivery-file {
    border-radius: 5px;
    color: #ffffff;
    display: inline-block;
    font-weight: bold;
    margin: 0 5px 10px 0;
    padding: 4px 8px;
    text-shadow: 2px 1px 3px #000;

    &.html {
      background: #08C;
    }
    &.css {
      background: #31cc30;
    }
    &.js {
      background: #f2bf26;
    }
    &.img {
      background: #e64d23;
    }
  }

  nav {
    background-color: #ffffff;
    border: 1px solid #e3e3e3;
    border-radius: 4px;

    ul {
      list-style-type: none;
      text-align: left;
      padding-left: 8px;

      li {
        margin-bottom: 12px;
      }
    }
  }

  .file-loader {
    border: none;
    background: none;
    outline: none;
    color: blue;
    padding: 0;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1330px) {
    nav {
      left: 50%;
      margin-left: -650px;
      padding: 10px;
      position: fixed;
      top: 60px;
      width: 200px;
    }

    section.main-content {
      margin: auto;
      width: 800px;
    }

  }

  section.main-content {
    text-align: left;
    padding: 1em;
    background-color: #FFF;
    box-shadow: 0 0 10px #AAA;

    hr {
      display: block;
      border: 0;
      border-top: 4px solid #34495E;
      margin: 1em 0;
      padding: 0;
    }
  }

</style>
