<template>
  <section class="main-content">
    <article class="tp-background">
    </article>
    <h1>TV Shows</h1>

    <img src="https://cdn.mos.cms.futurecdn.net/Rg8zUgWJbg7BKqTZDkjb8A-320-80.jpg" class="tp-img">

    <nav>
      <p>Table of content</p>
      <ul>
        <li>
          <a href="#ex-1" v-on:click="restoreUrl">Build the core</a>
        </li>
        <li>
          <a href="#ex-2" v-on:click="restoreUrl">Style it !</a>
        </li>
        <li>
          <a href="#ex-3" v-on:click="restoreUrl">The perfect navigation</a>
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

    <p>The lesson contains lots of references to help you find the solution.
      You must find documentation by yourself.</p>
    <p>Remember that the web is your friend ;-)</p>
    <p>Have fun !</p>

    <!--EXERCISE 1-->
    <hr>
    <h2 id="ex-1">Build the core</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Recreate a web page from an example.</li>
      <li>Understand HTML elements use cases.</li>
    </ul>

    <h3>Context</h3>
    <p>We need a web page that presents a famous TV show. This page will contain a synopsis, a list of the seasons,
      the cast, ans some quotes.
    </p>

    <h3>Steps</h3>
    <ol>
      <li>Choose a TV show that you like. It must contains at least 3 seasons, and you should be able to identify a
        casting.
      </li>
      <li>Have a look at the examples given (
        <button v-on:click="loadHTMLExample1" class="file-loader">1</button>,
        <button v-on:click="loadHTMLExample2" class="file-loader">2</button>,
        <button v-on:click="loadHTMLExample3" class="file-loader">3</button>
        ).
        Understand how it has been built, and which elements you will need.</li>
      <li>Gather data. Find some references about the tv show.</li>
      <li>Create a valid HTML5 page that follow the example.</li>
    </ol>

    <h3>Rules</h3>
    <ul>
      <li>You <i class="accent">MUST</i> use at least those elements:
        <code>article</code>,
        <code>section</code>,
        <code>form</code>,
        <code>nav</code>,
        <code>h1</code>,
        <code>h2</code>,
        <code>header</code>,
        <code>input</code>,
        <code>label</code>.
      </li>
      <li>You <i class="accent">CANNOT</i> use
        <code>div</code>,
        <code>span</code>,
        <code>br</code>.
      </li>
      <li>You <i class="accent">MUST</i> validate your HTML and correct the possible errors.</li>
      <li>You <i class="accent">MUST</i> cite your sources of information at the bottom.</li>
      <li>You <i class="accent">CANNOT</i> use any CSS or JavaScript.</li>
    </ul>

    <h3>Deliveries</h3>
    <article class="delivery-file html">tv-show.html</article>

    <!--EXERCISE 2-->
    <hr>
    <h2 id="ex-2">Style it !</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Identify when you should use a class selector or an id selector.</li>
      <li>Understand how the these CSS properties work :
        <code>position</code>,
        <code>float</code>,
        <code>display</code>,
        <code>margin</code>,
        <code>padding</code>,
        <code>border</code>,
        <code>text-align</code>,
        <code>top</code>,
        <code>right</code>,
        <code>bottom</code>,
        <code>left</code>,
        <code>width</code>,
        <code>height</code>.
      </li>
      <li>Rebuild the appearance of a web page with only CSS.</li>
      <li>Make beautiful things...</li>
    </ul>

    <h3>Context</h3>
    <p>Now that we have a valid HTML page, the goal is to add some style to it.
      With the given example and your creativity, design the web page in order to make it awesome.
    </p>

    <h3>Steps</h3>
    <ol>
      <li>Duplicate the file from the first exercise.</li>
      <li>Add a link to a new CSS file.</li>
      <li>Rebuild the layout of your page to match with
        <button class="file-loader" v-on:click="loadCSSExample">the example given</button>.
      </li>
      <li>If needed, add some CSS classes to your elements to help you design your web page.</li>
    </ol>

    <h3>Rules</h3>
    <ul>
      <li>You <i class="accent">CANNOT</i> modify your original HTML. If you find out that your original HTML file has
        a bad design, improve it in the first exercise.
        <br> <i class="accent">NOTE:</i> You are allowed to change the HTML only to add the link to the CSS file, and
        some classes/ids attributes. If you do so, think well about the names of those ids & classes.
      </li>
      <li>You <i class="accent">MUST</i> use at least those properties, and they need to produce a visual change :
        <code>position</code>,
        <code>float</code>,
        <code>display</code>,
        <code>margin</code>,
        <code>padding</code>,
        <code>border</code>,
        <code>text-align</code>,
        <code>top</code>,
        <code>right</code>,
        <code>bottom</code>,
        <code>left</code>,
        <code>width</code>,
        <code>height</code>.
      </li>
      <li>You <i class="accent">CANNOT</i> use any JavaScript.</li>
    </ul>

    <p>Try to make a <i class="accent">responsive</i> web page.</p>

    <h3>Deliveries</h3>
    <article class="delivery-file html">tv-show.html</article>
    <article class="delivery-file css">main.css</article>


    <!--EXERCISE 3-->
    <hr>
    <h2 id="ex-3">The perfect navigation</h2>
    <p>This a <i>be awesome</i> exercise. </p>
    <h3>Learning goals</h3>
    <ul>
      <li>Understand how to make a nav bar.</li>
      <li>Master how to use the <code>display</code> property.</li>
      <li>Discover CSS animations.</li>
      <li>Make beautiful things...</li>
    </ul>

    <h3>Context</h3>
    <p>Have a look at the nav bar of <a href="https://www.amazon.fr">amazon.fr</a>, because you'll need to make
      something like that !
    </p>
    <p>
      The idea is to create only a nav bar that will link to pages. This bar will contain 3 links,
      where one of them contains a sub-level of 3 links,
      and another one containing a first sub-level of two links, each containing another sub level of two links.
    </p>

    <h3>Steps</h3>
    <ol>
      <li>Build the HTML. Choose wisely the HTML elements you need.</li>
      <li>Add some style to create a layout, so that look like a nav bar. Hide sub levels.</li>
      <li>Add some style to display the first sub level on <code>:hover</code>.
        This sub level should appear under the link associated.
      </li>
      <li>Add some style to display the second sub level, on the right side of the link this time.</li>
      <li>Add CSS animations on the nav bar.</li>
    </ol>

    <h3>Rules</h3>
    <ul>
      <li>You <i class="accent">CANNOT</i> use any JavaScript.</li>
    </ul>

    <h3>Deliveries</h3>
    <article class="delivery-file html">nav-bar.html</article>
    <article class="delivery-file css">nav-bar.css</article>

  </section>
</template>

<script>
import cssExample from './assets/tp/css-example.png';
import HTMLExample1 from './assets/tp/Kaamelott.jpg';
import HTMLExample2 from './assets/tp/Kaamelott-2.jpg';
import HTMLExample3 from './assets/tp/Kaamelott-3.jpg';

export default {
  name: 'tp-tv-show',
  methods: {
    restoreUrl() {
      setTimeout(() => {
        this.$router.push('/tp1-tv-show');
      }, 1);
    },
    loadCSSExample() {
      window.open(cssExample);
    },
    loadHTMLExample1() {
      window.open(HTMLExample1);
    },
    loadHTMLExample2() {
      window.open(HTMLExample2);
    },
    loadHTMLExample3() {
      window.open(HTMLExample3);
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../../styles/colors';

  .tp-background {
    background: url('../../assets/bg-crossword.png') repeat;
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

  i.accent {
    color: red;
    font-weight: bold;
  }

  code {
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
    text-shadow: 0px -1px 0px #666;

    &.html {
      background: #08C;
    }
    &.css {
      background: #31cc30;
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
