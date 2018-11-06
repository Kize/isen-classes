<template>
  <section class="main-content">
    <article class="tp-background">
    </article>
    <h1>Make your own kind of Music</h1>

    <img src="./assets/cassettes.jpg" class="tp-img">

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
          <a href="#ex-5" v-on:click="restoreUrl">Add some controls</a>
        </li>
        <li>
          <a href="#ex-6" v-on:click="restoreUrl">Bonus (optional)</a>
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
    <ul>
      <li>Install <a href="http://nodejs.org/">nodejs</a>. Take the latest LTS version.</li>
      <li>Download the <a href="https://github.com/Kize/isen-classes/blob/master/labs-files/tp4-src.tar.gz">archive</a>.</li>
      <li>Install the modules. Just go to the project root and type <code>npm ci</code>.</li>
      <li>Start the server. Just type <code>npm start</code> in the project root.</li>
      <li>You should see an ASCII art and the url at which the project can be browsed.</li>
      <li>Create a directory named <code>music</code> in the project root directory and add music directories and files
        into it.
      </li>
      <li>The project works with ogg, wav and mp3 files on all major recent browsers.
      </li>
      <li>There is some websites where you can legally download musics, free of charges. Have a look at :
        <a href="https://www.jamendo.com/start">jamendo</a>, or
        <a href="https://freesound.org/">freesound</a>.
      </li>
    </ul>

    <p>
      <strong>BE AWARE: </strong> when you modify a file, reload the page with <kbd>CTRL</kbd> + <kbd>F5</kbd>.
      Otherwise, the browser may use its cache to avoid to reload the file, even if it has changed.
    </p>

    <!--EXERCISE 1-->
    <hr>
    <h2 id="ex-1">Getting some help (no Jquery)</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Know how to load some HTML using AJAX.</li>
    </ul>

    <h3>Context</h3>

    <p>
      In this exercise, we'll display some help when the user needs it.
      The idea is to fetch some HTML from an <code>url</code>, and inject this HTML code.
    </p>


    <h3>Steps</h3>

    <ul>
      <li>Have a look at <code>myokom.html</code>. You'll see a <code>.display-help</code> button element.</li>
      <li>Create a file named <code>myokom-client.js</code> in the <code>public</code> directory.</li>
      <li>Add some code to detect clicks on <code>.display-help</code>.</li>
      <li>
        Add some code to load HTML from <code>'/public/myokom-help.html'</code> using a <code>XMLHttpRequest</code>,
        and replace the content of <code>.help</code> with it <b>when</b> the button is clicked.
      </li>
      <li>If the person clicks on the <code>.close-help</code> button, just remove the <code>.help</code> element.</li>
    </ul>


    <h3>Rules</h3>
    <ul>
      <li>You <strong>CANNOT</strong> use jQuery.</li>
      <li>Your code <strong>CANNOT</strong> be global.</li>
    </ul>

    <h3>Deliveries</h3>

    <p>For this lab, commit <strong>ONLY</strong> the following files one time for the all exercises, bonus included.</p>
    <p>Those files corresponds to the <code>public</code> directory,
      if you send me the whole project, with your musics, I won't correct it.
    </p>
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
    <ol>
      <li>Know how to load some JSON using AJAX and jQuery.</li>
    </ol>


    <h3>Context</h3>
    <p>
      In this exercise, we'll display the directories and the track-list.
      The idea is to give information to the client, about the musics available.
      With that information, we will be able to build a view to show the file system in the <code>music</code>
      directory.
    </p>

    <h3>Steps</h3>
    <ul>
      <li>Have a look at <code>myokom.html</code>. You'll see a <code>.track-list</code> element.</li>

      <li>In your <code>myokom-client.js</code> file, add a <code>browseFromUrl</code> function.</li>

      <li>Listen to the <code>load</code> event on the window and use your <code>browseFromUrl</code> function.</li>

      <li>In this function, we'll use the API offered by the server. One of the URLs allows you to find out what's
        available on the server (directories and music files).
      </li>

      <li>
        Try to open a tab with <a href="http://localhost:8080/browse/" target="_blank">http://localhost:8080/browse/</a>,
        you'll see what's in your <code>music</code> directory as JSON.
      </li>

      <li>This URL works with any directory. If you have a directory called <code>Lyre-le-temps</code> in your
        <code>music</code> directory, you can try <code>http://localhost:8080/browse/Lyre-le-temps/</code>.
        It works with sub directory and so on...
        <br>
        <strong>Note:</strong> don't forget the last <code>/</code> or your server will crash.
      </li>

      <li>Here's an example of what the information retrieved in JSON can look like :</li>
    </ul>

    <pre v-highlightjs><code class="json">{
  "dirs": [
    {
      "name": "Lady-swing",
      "path": "/Lyre-le-temps/Lady-swing"
    },
    {
      "name": "Prohibition-swing",
      "path": "/Lyre-le-temps/Prohibition-swing"
    }
    /* other directories... */
  ],
  "tracks": [
    {
      "name": "02 About The Trauma Drum",
      "path": "/music/Lyre-le-temps/02 About The Trauma Drum.mp3",
      "metadatas": "/metadatas/Lyre-le-temps/02 About The Trauma Drum.mp3"
    },
    {
      "name": "03 Against The Grain",
      "path": "/music/Lyre-le-temps/03 Against The Grain.mp3",
      "metadatas": "/metadatas/Lyre-le-temps/03 Against The Grain.mp3"
    },
    {
      "name": "04 Go Down",
      "path": "/music/Lyre-le-temps/04 Go Down.mp3",
      "metadatas": "/metadatas/Lyre-le-temps/04 Go Down.mp3"
    }
    /* other music files... */
  ]
}</code></pre>

    <ul>
      <li>In your <code>browseFromUrl</code> function, use <code>fetch()</code>to retrieve this data.</li>
      <li>Iterate on directories and tracks, in order to add <code>.dir</code> and <code>.track</code> elements
        to the DOM in <code>.track-list</code>, like this :
      </li>
    </ul>

    <pre v-highlightjs><code class="html">&lt;a class="dir" href="/Lyre-le-temps/">Lyre-le-temps&lt;/a>
&lt;!-- and so on -->

&lt;button class="track" data-track-idx="0">&lt;span class="track-name">Milky Chance - Sweet Sun&lt;/span>&lt;/button>
&lt;button class="track" data-track-idx="1">&lt;span class="track-name">ELEPHANZ - Time For A Change&lt;/span>&lt;/button>
&lt;!-- and so on --></code></pre>

    <ul>
      <li>The <code>data-track-idx</code> attribute could be useful to go to previous or next track.</li>
      <br>
      <li>Because clicking on the <code>.dir</code> links will change the URL,
        it will reload the page and execute <code>browseFromUrl</code>.
        Your AJAX call must use the URL of the page to load the good data.
      </li>
      <li>Add some code to retrieve the current pathname of the <code>location</code> global object
        and load information from the server via AJAX.
      </li>
      <li>If the pathname is <code>/</code>, you'll do a GET on <code>/browse/</code>.
        If the pathname is <code>/Lyre-le-temps</code>, you'll do a GET on <code>/browse/Lyre-le-temps/</code>.
      </li>
      <li>Keep the information object in memory, it will be useful after...</li>
    </ul>

    <h3>Rules</h3>
    <ul>
      <li>You <strong>CAN</strong> use jQuery.</li>
      <li>You <strong>MUST</strong> use fetch API.</li>
      <li>Your code <strong>CANNOT</strong> be global.</li>
    </ul>


    <h3>Deliveries</h3>

    <p>Same as the first exercise.</p>


    <!--EXERCISE 3-->
    <hr>
    <h2 id="ex-3">Let's play some Music</h2>
    <h3>Learning goals</h3>
    <ol>
      <li>Know how to use event delegation.</li>
      <li>Know how to use the HTML5 audio tag.</li>
    </ol>


    <h3>Context</h3>
    <p>
      In this exercise, we'll use events and audio. Clicks on tracks will start playing the selected music.
    </p>


    <h3>Steps</h3>
    <ul>
      <li>
        Add a method <code>playAMusic</code>, which takes a <code>track</code> in parameter.
        This method should select the <code>.player</code> element, update its <code>src</code> attribute,
        and then execute the method <code>.play()</code>.
      </li>
      <li>
        Now when you add the <code>.track</code> buttons, add a listener on each button.
        This listener should call the method <code>playAMusic</code>, with the track associated.
        Test it, it should play your music.
      </li>
      <li>This method does the minimum, but now we need to update the <code>.current-track .track-title</code> contents.</li>
      <li>You'll also want to change the <code>[data-status]</code> attribute of <code>.current-track</code>
        from <code>stop</code> to <code>play</code>.
      </li>
    </ul>


    <h3>Rules</h3>
    <ul>
      <li>You <strong>CAN</strong> use jQuery.</li>
      <li>Your code <strong>CANNOT</strong> be global.</li>
    </ul>

    <h3>Deliveries</h3>

    <p>Same as the first exercise.</p>


    <!--EXERCISE 4-->
    <hr>
    <h2 id="ex-4">History</h2>
    <h3>Learning goals</h3>
    <ol>
      <li>Know how to use the History API.</li>
    </ol>

    <h3>Context</h3>
    <p>
      Currently, when you click on a directory, it will fully reload the page, which is a little overkill.
      The goal is here is to handle redirection, with links or when the user uses the 'back button' of the browser,
      to prevent redirection and load the data asked.
    </p>

    <p>
      In this exercise, we will use the History API to update the URL's state, without reloading the app.
    </p>

    <h3>Steps</h3>
    <ul>
      <li>Listen to clicks on <code>.dir</code> links and prevent the default behaviour. Use event delegation.</li>

      <li>Use the <code>href</code> attribute of the link that was clicked
        and push a new state on the history (look at documentation links).
      </li>

      <li>Once you pushed a new state, call your <code>browserFromUrl</code> function.</li>

      <li>To complete this history integration, we miss the back button thing.
        Listen to the event that is fired when someone clicks on the back button
        and call your <code>browserFromUrl</code> function. (hint : <code>popstate</code>)
      </li>
    </ul>

    <h3>Rules</h3>
    <ul>
      <li>You <strong>CAN</strong> use jQuery.</li>
      <li>Your code <strong>CANNOT</strong> be global.</li>
    </ul>

    <h3>Deliveries</h3>

    <p>Same as the first exercise.</p>


    <!--EXERCISE 5-->
    <hr>
    <h2 id="ex-5">Add some controls</h2>
    <h3>Learning goals</h3>
    <ol>
      <li>Learn how to listen to HTML events.</li>
    </ol>

    <h3>Context</h3>
    <p>We can play a song, but we can't use controls.
      The goal is now to handle the play/pause button.
    </p>

    <h3>Steps</h3>
    <ul>
      <li>
        Add a listener to the <code>.track-control[data-action="play"]</code> button.
        It should call the method <code>playAMusic</code> without any track in parameter.
        We need to rework this method to handle the fact that <code>track</code> might be <code>undefined</code>.
        <br>
        Note: If the player has no 'src', it can't play a music.
        You choose whether it should play a random music, or the first one, or nothing at all.
      </li>

      <li>Do the same with the pause button.</li>
    </ul>


    <h3>Rules</h3>
    <ul>
      <li>You <strong>CAN</strong> use jQuery.</li>
      <li>Your code <strong>CANNOT</strong> be global.</li>
    </ul>

    <h3>Deliveries</h3>
    <p>Same as the first exercise.</p>

    <!--EXERCISE 6-->
    <hr>
    <h2 id="ex-6">Bonus (optional)</h2>
    <h3>Learning goals</h3>
    <ol>
      <li>Use your imagination and all you knowledge to implement useful feature correctly.</li>
    </ol>

    <h3>Context</h3>
    <p>In this exercise, we'll add all the missing features and more.</p>

    <h3>Ideas</h3>
    <ul>
      <li>Use all the controls (previous & next).
        Don't forget to use the <code>[data-status]</code> attribute on <code>.current-track</code>.
      </li>
      <li>Add a listener to handle the <kbd>space</kbd> keyboard input. It should play/pause the music.</li>

      <li>Add a listener to update the progress bar.</li>

      <li>Go to the next song once the current one is finished.</li>
      <li>Customize the CSS (use a <code>/public/custom-myokom.css</code> file), change the colors, the layout...</li>
    </ul>


    <h3>Rules</h3>
    <ul>
      <li>You <strong>CAN</strong> use jQuery.</li>
      <li>Your code <strong>CANNOT</strong> be global.</li>
    </ul>

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
        this.$router.push('/tp4-myokom');
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
