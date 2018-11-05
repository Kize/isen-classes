<template>
  <section class="main-content">
    <article class="tp-background">
    </article>
    <h1>Make your own kind of Music</h1>

    <img src="" class="tp-img">

    <nav>
      <p>Table of content</p>
      <ul>
        <li>
          <a href="#ex-1" v-on:click="restoreUrl">Getting some help (no Jquery)</a>
        </li>
        <li>
          <a href="#ex-2" v-on:click="restoreUrl">Directories and tracks</a>
        </li>
        <li>
          <a href="#ex-3" v-on:click="restoreUrl">Let's play some Music</a>
        </li>
        <li>
          <a href="#ex-4" v-on:click="restoreUrl">History</a>
        </li>
        <li>
          <a href="#ex-5" v-on:click="restoreUrl">Bonus (optional)</a>
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
      <li>First group: 1542236399053</li>
      <li>Second group: 1542841199053</li>
    </ul>

    <p>The lesson contains lots of references to help you find the solution.
      You must find documentation by yourself.</p>
    <p>Remember that the web is your friend ;-)</p>
    <p>Have fun !</p>

    <!--REQUIREMENTS-->
    <h4>Requirements</h4>

    <!--EXERCISE 1-->
    <hr>
    <h2 id="ex-1">Getting some help (no Jquery)</h2>
    <h3>Learning goals</h3>

    <h3>Context</h3>


    <h3>Steps</h3>


    <h3>Rules</h3>

    <h3>Deliveries</h3>

    <strong>For this lab, commit the following files one time for the all exercises, bonus included.</strong>
    <br>
    <br>
    <article class="delivery-file html">myokom.html</article>
    <article class="delivery-file html">myokom-help.html</article>
    <article class="delivery-file js">myokom-client.js</article>
    <article class="delivery-file js">jquery-3.3.1.min.js</article>
    <article class="delivery-file css">myokom.css</article>
    <article class="delivery-file img">navy-blue.png</article>
    <article class="delivery-file img">next.png</article>
    <article class="delivery-file img">pause.png</article>
    <article class="delivery-file img">previous.png</article>
    <article class="delivery-file img">play.png</article>


    <!--EXERCISE 2-->
    <hr>
    <h2 id="ex-2">Directories and tracks</h2>
    <h3>Learning goals</h3>

    <h3>Context</h3>

    <h3>Steps</h3>

    <h3>Rules</h3>

    <h3>Deliveries</h3>

    <p>Same as the first exercise.</p>


    <!--EXERCISE 3-->
    <hr>
    <h2 id="ex-3">Let's play some Music</h2>
    <h3>Learning goals</h3>

    <h3>Context</h3>

    <h3>Steps</h3>

    <h3>Rules</h3>

    <h3>Deliveries</h3>

    <p>Same as the first exercise.</p>


    <!--EXERCISE 4-->
    <hr>
    <h2 id="ex-4">History</h2>
    <h3>Learning goals</h3>

    <h3>Context</h3>

    <h3>Steps</h3>


    <h3>Rules</h3>

    <h3>Deliveries</h3>

    <p>Same as the first exercise.</p>


    <!--EXERCISE 5-->
    <hr>
    <h2 id="ex-5">Bonus (optional)</h2>
    <h3>Learning goals</h3>


    <h3>Context</h3>


    <h3>Ideas</h3>

    <h3>Rules</h3>


    <h3>Deliveries</h3>
    <p>Same as the first exercise.</p>
  </section>
</template>

<script>

export default {
  name: 'tp-draw-shapes',
  methods: {
    restoreUrl() {
      setTimeout(() => {
        this.$router.push('/tp3-draw-some-shapes');
      }, 1);
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
