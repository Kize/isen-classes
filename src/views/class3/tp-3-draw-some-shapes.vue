<template>
  <section class="main-content">
    <article class="tp-background">
    </article>
    <h1>Draw some shapes</h1>

    <img src="https://www.extrem-network.com/wp-content/uploads/2015/02/paint.jpg" class="tp-img">

    <nav>
      <p>Table of content</p>
      <ul>
        <li>
          <a href="#ex-1" v-on:click="restoreUrl">Model the Rectangle</a>
        </li>
        <li>
          <a href="#ex-2" v-on:click="restoreUrl">Rework some code !</a>
        </li>
        <li>
          <a href="#ex-3" v-on:click="restoreUrl">Model the Square and the circle</a>
        </li>
        <li>
          <a href="#ex-4" v-on:click="restoreUrl">Stay in the area</a>
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
      <li>First group: 1539813599844</li>
      <li>Second group: 1540418399844</li>
    </ul>

    <p>The lesson contains lots of references to help you find the solution.
      You must find documentation by yourself.</p>
    <p>Remember that the web is your friend ;-)</p>
    <p>Have fun !</p>

    <!--EXERCISE 1-->
    <hr>
    <h2 id="ex-1">Model the Rectangle</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Know how to understand existing code</li>
      <li>Know how to use JavaScript inheritance</li>
    </ul>

    <h3>Context</h3>
    <p>
      Have a look at this
      <a href="http://cir2-lab3.surge.sh/">page</a>.
    </p>

    <p>
      We have a wonderful app to draw some random shapes. Sadly, the work isn't finished.
      The goal here is to finish the work, in order to draw other things than random shapes.
    </p>

    <p>The first step will be to understand how to model a rectangle, using the <strong>inheritance</strong> concept.
    </p>

    <h3>Steps</h3>
    <ol>
      <li>
        Download the app from the link above. (open the link a new tab, then right click, 'save page')
        <br>
        You should retrieve the 3 files:
        <br>
        index.html, main.js, main.css
      </li>
      <li>
        If you have problems with the font, add this import in the &lt;head>.
        <pre v-highlightjs>
          <code class="HTML">&lt;link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"></code>
        </pre>
      </li>
      <li>
        Open the <code>main.js</code> file, understand the structure.
      </li>
      <li>
        Add a <code>Rectangle</code> constructor. It should inherit from <code>Shape</code>.
      </li>
      <li>
        In the <code>Rectangle</code> constructor, override the method <code>generatePoints</code>.
        For the Rectangle, you should generate firstly a random point, then calculate the position of the 3 others.
        In order to calculate those positions, you should assume that the <code>options</code> object in parameter
        will have 2 properties : <code>width</code>, and <code>height</code>.
      </li>
    </ol>

    <h3>Rules</h3>
    <ul>
      <li>You <i class="accent">CANNOT</i> modify the HTML.</li>
      <li>You <i class="accent">CANNOT</i> modify the CSS.</li>
      <li>You <i class="accent">CANNOT</i> add external dependencies.</li>
      <li>You <i class="accent">CANNOT</i> break the app.</li>
    </ul>

    <h3>Deliveries</h3>

    <strong>For this lab, commit the following files one time for the 3 exercises.</strong>
    <br>
    <br>

    <article class="delivery-file html">index.html</article>
    <article class="delivery-file css">main.css</article>
    <article class="delivery-file js">main.js</article>


    <!--EXERCISE 2-->
    <hr>
    <h2 id="ex-2">Rework some code !</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Know how to understand existing code</li>
      <li>Learn how to refactor existing code</li>
    </ul>

    <h3>Context</h3>
    <p>We have modelled the <code>Rectangle</code>, but we haven't used it yet.</p>

    <p>
      The goal of this exercise is to update the method <code>createShape</code> in order to dynamically select
      which type of shape the user wants.
    </p>

    <h3>Steps</h3>
    <ol>
      <li>
        Understand how the <code>drawShapeHandler</code> method works. You <strong>CANNOT</strong> modify this method.
      </li>
      <li>
        Now understand how the <code>createShape</code> method is coded.
        As you can see, it can only create a <code>Shape</code>.
      </li>
      <li>
        Update this method by adding a <code>switch case</code> block.
        You will create a <code>Rectangle</code> if the <code>mode</code> is 'rectangle',
        otherwise, you need to create a <code>Shape</code>.
        <br>
        In order to get the mode, use this snippet :
        <pre v-highlightjs><code class="javascript">var mode = document.querySelector('input[name="mode"]:checked').value;</code></pre>
      </li>
      <li>
        Don't forget to customize the <code>options</code> object, depending on the mode selected.
        In order to provide to this object the width and the height properties of the rectangle,
        retrieve the values of the inputs with the ids : <code>rect-width-input</code> and
        <code>rect-height-input</code>.
      </li>
      <li>
        If you have done everything correctly, you should now be able to draw rectangles, using the form.
      </li>
    </ol>

    <h3>Rules</h3>
    <ul>
      <li>You <i class="accent">CANNOT</i> modify the HTML.</li>
      <li>You <i class="accent">CANNOT</i> modify the CSS.</li>
      <li>You <i class="accent">CANNOT</i> modify any other part of the JS file
        than the method <code>createShape</code>.
      </li>
      <li>You <i class="accent">CANNOT</i> add external dependencies.</li>
      <li>You <i class="accent">CANNOT</i> break the app.</li>
    </ul>

    <h3>Deliveries</h3>

    <p>Same as the first exercise.</p>


    <!--EXERCISE 3-->
    <hr>
    <h2 id="ex-3">Model the Square and the circle</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Master the art of <strong>Inheritance</strong>.</li>
      <li>Learn and to draw in a canvas.</li>
    </ul>

    <h3>Context</h3>
    <p>
      Well now that we know how to draw a rectangle, other shapes should be a piece of cake.
      The goal now is to finish the app, in order to draw squares and circles.
    </p>

    <p>
      But, it's no that easy to draw a circle...
    </p>

    <h3>Steps</h3>
    <ol>
      <li>
        Create a <code>Square</code> constructor. If you think well about what it should inherit,
        then you can really easily model this entity.
      </li>
      <li>
        Update the <code>createShape</code> method to handle Squares. The mode associated is: 'square'.
      </li>
      <li>
        Now to the fun part. Create a constructor <code>Circle</code> that should inherit from Shape.
        It should have a property radius, initialized to an integer, for example: <code>25</code>.
      </li>
      <li>
        Override its method <code>generatePoints</code>; a circle should have only 1 point, set at a random location.
        This method should also set the radius of the circle, given the <code>options.radius</code> that you will provide
        in the method <code>createShape</code>.
      </li>
      <li>
        Override the method <code>draw</code> of the circle. This new method takes a <strong>context</strong> in parameter,
        as the original one, but it should now draw a circle instead of a shape.
        <br>
        You have an example on how to draw a circle in a canvas
        <a href="https://www.html5canvastutorials.com/tutorials/html5-canvas-circles/">here</a>.
      </li>
    </ol>

    <h3>Rules</h3>
    <ul>
      <li>You <i class="accent">CANNOT</i> modify the HTML.</li>
      <li>You <i class="accent">CANNOT</i> modify the CSS.</li>
      <li>You <i class="accent">CANNOT</i> add external dependencies.</li>
      <li>You <i class="accent">CANNOT</i> break the app.</li>
    </ul>

    <h3>Deliveries</h3>

    <p>Same as the first exercise.</p>


    <!--EXERCISE 4-->
    <hr>
    <h2 id="ex-4">Stay in the area</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>I don't know.</li>
    </ul>

    <h3>Context</h3>
    <p>
      Well it's done, we can draw any shape the form as to offer.
      But sometimes, some shapes are not fully in the visible area of the canvas.
    </p>

    <p>
      The goal of this last exercise if to update your code in order to make sure that every shape drawn will
      fit into the visible area.
    </p>

    <h3>Steps</h3>
    <ol>
      <li>
        For each shape, identify when some random points are generated.
      </li>
      <li>
        Figure out a smart way to still generate a random position, but where it is a safe position.
        (meaning, the whole shape will be visible)
      </li>
      <li>
        Now to the fun part. Create a constructor <code>Circle</code> that should inherit from Shape.
        It should have a property radius, initialized to an integer, for example: <code>25</code>.
      </li>
    </ol>

    <h3>Rules</h3>
    <ul>
      <li>You <i class="accent">CANNOT</i> modify the HTML.</li>
      <li>You <i class="accent">CANNOT</i> modify the CSS.</li>
      <li>You <i class="accent">CANNOT</i> add external dependencies.</li>
      <li>You <i class="accent">CANNOT</i> break the app.</li>
    </ul>

    <h3>Deliveries</h3>

    <p>Same as the first exercise.</p>


    <!--EXERCISE 4-->
    <hr>
    <h2 id="ex-5">Bonus (optional)</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Master the art of drawing in a canvas.</li>
      <li>Master your skill in CSS.</li>
    </ul>

    <h3>Context</h3>
    <p>
      If you want to go further, duplicate the 3 files from the previous exercises,
      in order to separate it from the lab.
    </p>

    <p>
      The app is nice, but it always can be better.
    </p>

    <h3>Ideas</h3>
    <ul>
      <li>
        Override the <code>draw</code> method of the Rectangle.
        Instead of drawing a shape, there is a method to directly draw a rectangle. (look up how to do that).
        <br>
        You will need to add some properties to the rectangle, like its width and its height, in order to make it work.
        <br>
        The function <code>generatePoints</code> should now generate only 1 random point.
      </li>
      <li>
        Add some new shapes, like a diamond, or an ellipse.
      </li>
      <li>
        Rework the style of the app, be creative.
      </li>
    </ul>

    <h3>Rules</h3>
    <ul>
      <li>You <i class="accent">CANNOT</i> modify the main.css file.
        If you want to add some style, create a new file named <code>custom.css</code> and import it.
      </li>
      <li>You <i class="accent">CANNOT</i> break the app.</li>
    </ul>

    <h3>Deliveries</h3>

    <article class="delivery-file html">index.html</article>
    <article class="delivery-file css">main.css</article>
    <article class="delivery-file js">main.js</article>
    <article class="delivery-file css">custom.css</article>


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
