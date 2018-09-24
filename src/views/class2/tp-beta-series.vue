<template>
  <section class="main-content">
    <article class="tp-background">
    </article>
    <h1>Beta series calendar</h1>

    <img src="https://www.betaseries.com/blog/wp-content/uploads/2018/06/betaseries_1980.png" class="tp-img">

    <nav>
      <p>Table of content</p>
      <ul>
        <li>
          <a href="#ex-1" v-on:click="restoreUrl">Build the calendar</a>
        </li>
        <li>
          <a href="#ex-2" v-on:click="restoreUrl">Fill the calendar</a>
        </li>
        <li>
          <a href="#ex-3" v-on:click="restoreUrl">Make it smart !</a>
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
    <h2 id="ex-1">Build the calendar</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Know how to manipulate dates.</li>
      <li>Know how to add elements to the DOM (directly and with jQuery).</li>
    </ul>

    <h3>Context</h3>
    <p>In this exercise, we will make an empty calendar for the next 6 months.
      The result should look like
      <a href="http://cir2-lab2-calendar.surge.sh/">something like that</a>.
    </p>

    <p>Given a HTML file and a CSS file, you will need to add months, weeks and days in JavaScript.</p>

    <h3>Source files</h3>
    <button class="file-loader" type="button" v-on:click="toggleHTML">beta-series.html</button>
    <eg-transition enter="fadeIn" leave="fadeOut">
      <pre v-highlightjs v-if="showHTML"><code class="HTML">
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
  &lt;meta charset="utf-8">
  &lt;title>Beta Series Calendar&lt;/title>
  &lt;link rel="stylesheet" type="text/css" href="beta-series.css">
  &lt;!--&lt;link rel="stylesheet" type="text/css" href="beta-series-custom.css">-->
&lt;/head>
&lt;body>

&lt;header>&lt;h1>Beta Series Calendar&lt;/h1>&lt;/header>

&lt;ul class="months">&lt;/ul>

&lt;ul class="series">&lt;/ul>

&lt;div class="calendar">&lt;/div>

&lt;script src="jquery-3.3.1.min.js">&lt;/script>
&lt;!--&lt;script src="beta-series-calendar.js">&lt;/script>-->
&lt;!--&lt;script src="beta-series-episodes.js">&lt;/script>-->
&lt;/body>
&lt;/html>
      </code></pre>
    </eg-transition>

    <br>
    <button class="file-loader" type="button" v-on:click="toggleCSS">beta-series.css</button>
    <eg-transition enter="fadeIn" leave="fadeOut">
      <pre v-highlightjs v-if="showCSS"><code class="CSS">
@font-face {
    font-family: 'Bangers';
    font-style: normal;
    font-weight: 400;
    src: local('Bangers'), local('Bangers-Regular'), url(http://themes.googleusercontent.com/static/fonts/bangers/v4/DqeGA7eaz0hhOYTfkeJBIA.woff) format('woff');
}
@font-face {
    font-family: 'Yanone Kaffeesatz';
    font-style: normal;
    font-weight: 200;
    src: local('Yanone Kaffeesatz ExtraLight'), local('YanoneKaffeesatz-ExtraLight'), url(http://themes.googleusercontent.com/static/fonts/yanonekaffeesatz/v4/We_iSDqttE3etzfdfhuPRYa6iXjgqaxY3DU3RqApPOI.woff) format('woff');
}
@font-face {
    font-family: 'Yanone Kaffeesatz';
    font-style: normal;
    font-weight: 400;
    src: local('Yanone Kaffeesatz Regular'), local('YanoneKaffeesatz-Regular'), url(http://themes.googleusercontent.com/static/fonts/yanonekaffeesatz/v4/YDAoLskQQ5MOAgvHUQCcLRTHiN2BPBirwIkMLKUspj4.woff) format('woff');
}
@font-face {
    font-family: 'Yanone Kaffeesatz';
    font-style: normal;
    font-weight: 700;
    src: local('Yanone Kaffeesatz Bold'), local('YanoneKaffeesatz-Bold'), url(http://themes.googleusercontent.com/static/fonts/yanonekaffeesatz/v4/We_iSDqttE3etzfdfhuPRWwXwFHHZlCwprwJOQ-Se7k.woff) format('woff');
}

html {
    background-image: url(./diagonal-striped-brick.png);
    background-attachment: fixed;
}

body {
    color: #333;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    margin: 0;
}

header,
.months,
.series,
.cal-month,
footer {
    background: #FFF;
    background: rgba(255, 255, 255, .8);
    border-radius: 5px;
    box-shadow: 0 0 10px #777;
    padding: 10px;
}

header,
.months,
.series,
footer {
    left: 10px;
    position: fixed;
    width: 220px;
}

header {
    top: 10px;
}

h1 {
    font-family: Bangers, sans-serif;
    font-size: 28px;
    font-weight: normal;
    margin: 0;
    text-align: center;
}

header, h1 {
    height: 60px;
    line-height: 60px;
    padding: 0;
    width: 240px;
}

.months,
.series {
    list-style: none;
    font-family: Bangers, sans-serif;
    font-size: 26px;
}

.month-name,
.serie-name {
    height: 34px;
    line-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}

.months {
    bottom: 52%;
    margin: 0 0 5px 0;
    top: 80px;
}

.series {
    bottom: 10px;
    margin: 5px 0 0 0;
    top: 48%;
}

.cal-month {
    margin: 10px 10px 10px 260px;
}

/* Shift the first day by 0.2% + 14.27% * nb of days */

/* Thursday */
[data-day-start="2"] .day:first-child {
    margin-left: 14.47%;
}

/* Wednesday */
[data-day-start="3"] .day:first-child {
    margin-left: 28.74%;
}

/* Tuesday */
[data-day-start="4"] .day:first-child {
    margin-left: 43.01%;
}

/* Friday */
[data-day-start="5"] .day:first-child {
    margin-left: 57.28%;
}

/* Saturday */
[data-day-start="6"] .day:first-child {
    margin-left: 71.55%;
}

/* Sunday */
[data-day-start="0"] .day:first-child {
    margin-left: 85.82%;
}

.cal-month-name {
    font-family: Bangers, sans-serif;
    font-size: 30px;
    font-weight: normal;
    margin: 0 0 10px 0;
}

.day-names {
    overflow: hidden;
}

.day-name {
    background: #DDD;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    font-size: 24px;
    font-weight: bold;
    margin: 0.2%;
    overflow: hidden;
    padding: 5px;
    text-overflow: ellipsis;
    text-overflow: '.';
    white-space: nowrap;
    width: 13.87%;
}

.days {
    overflow: hidden;
}

.day {
    background: #F7F7F7;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    height: 110px;
    margin: 0.2%;
    padding: 5px;
    position: relative;
    overflow: auto;
    width: 13.87%;
}

.day-number {
    color: #777;
    font-size: 20px;
}

.day:nth-child(2n+1) {
    background: #F0F0F0;
}

.day.past {
    opacity: .5;
}

.day.today {
    border: 2px solid #269;
    border-radius: 5px;
}

.episode {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

    </code></pre>
    </eg-transition>

    <br>
    <button class="file-loader" v-on:click="toggleImg">diagonal-striped-brick.png</button>
    <eg-transition enter="fadeIn" leave="fadeOut">
      <div v-if="showImg">
        <img src="./assets/tp/diagonal-striped-brick.png"/>
      </div>
    </eg-transition>

    <h3>Steps</h3>
    <h4>Init</h4>

    <p>Create a file <code>beta-series.html</code>, and copy paste the content of the link above.</p>
    <p>Do the same for the CSS.</p>
    <p>Download the image. Finally, download the last version of JQuery.</p>

    <h4>Months (No JQuery)</h4>
    <ul>
      <li>Create a file named <code>beta-series-calendar.js</code>.</li>
      <li>Add an array of all the 12 months names in this file.</li>
      <li>Starting from current month, add some code to display 6 months names in the existing <code>.calendar</code>
        div with this structure :
      </li>
    </ul>

    <pre v-highlightjs><code class="HTML">
&lt;div class="calendar">
  &lt;div class="cal-month" data-month="8" data-year="2018">
    &lt;h2 class="cal-month-name">September 2018&lt;/h2>
  &lt;/div>
  &lt;div class="cal-month" data-month="9" data-year="2018">
    &lt;h2 class="cal-month-name">October 2018&lt;/h2>
  &lt;/div>
  &lt;div class="cal-month" data-month="10" data-year="2018">
    &lt;h2 class="cal-month-name">November 2018&lt;/h2>
  &lt;/div>
  &lt;div class="cal-month" data-month="11" data-year="2019">
    &lt;h2 class="cal-month-name">December 2019&lt;/h2>
  &lt;/div>
  &lt;div class="cal-month" data-month="0" data-year="2019">
    &lt;h2 class="cal-month-name">January 2019&lt;/h2>
  &lt;/div>
  &lt;div class="cal-month" data-month="1" data-year="2019">
    &lt;h2 class="cal-month-name">February 2019&lt;/h2>
  &lt;/div>
&lt;/div>
    </code></pre>

    <ul>
      <li>In the same loop, you must also insert months names in the .months unordered list with this structure :</li>
    </ul>

    <pre v-highlightjs><code class="HTML">
&lt;ul class="months">
  &lt;li class="month-name">September 2018&lt;/li>
  &lt;li class="month-name">October 2018&lt;/li>
  &lt;li class="month-name">November 2018&lt;/li>
  &lt;li class="month-name">December 2019&lt;/li>
  &lt;li class="month-name">January 2019&lt;/li>
  &lt;li class="month-name">February 2019&lt;/li>
&lt;/ul>
    </code></pre>

    <h4>Day names(using JQuery)</h4>
    <ul>
      <li>Add an array of all the 7 day names in your file.</li>
      <li>In the same loop, for each months, you're going to add the day names of the week. Here's an example for a
        month :
      </li>
    </ul>

    <pre v-highlightjs><code class="HTML">
&lt;div class="cal-month" data-month="8" data-year="2018">
  &lt;h2 class="cal-month-name">September 2018&lt;/h2>
  &lt;div class="day-names">
    &lt;div class="day-name">Monday&lt;/div>
    &lt;div class="day-name">Tuesday&lt;/div>
    &lt;div class="day-name">Wednesday&lt;/div>
    &lt;div class="day-name">Thursday&lt;/div>
    &lt;div class="day-name">Friday&lt;/div>
    &lt;div class="day-name">Saturday&lt;/div>
    &lt;div class="day-name">Sunday&lt;/div>
  &lt;/div>
&lt;/div>
    </code></pre>

    <ul>
      <li>Look carefully at the jQuery documentation on how to add elements to another.</li>
    </ul>

    <h4>Days (using JQuery)</h4>
    <ul>
      <li>To finish this empty calendar, we just miss the days of the months.</li>
      <li>We'll need a function that computes the number of days in a month, add it to your file. Number of days in
        February is not as easy as you think. Verify what you are doing.
      </li>
      <li>In your loop that iterates over the 6 months,
        add some code to insert the right amount of days in the <code>.cal-month</code> div. Use this structure :
      </li>
    </ul>

    <pre v-highlightjs><code class="HTML">
&lt;div class="cal-month" data-month="8" data-year="2018">
  &lt;h2 class="cal-month-name">September 2018&lt;/h2>
  &lt;div class="day-names">&lt;!-- day names... -->&lt;/div>
  &lt;div class="days">
    &lt;div class="day" data-day="1">
      &lt;div class="day-number">1&lt;/div>
    &lt;/div>
    &lt;div class="day" data-day="2">
      &lt;div class="day-number">2&lt;/div>
    &lt;/div>
    &lt;!-- and so on... -->
  &lt;/div>
&lt;/div>
    </code></pre>

    <h4>Last details (no JQuery)</h4>
    <ul>
      <li>If you have a closer look at your calendar, all the months start on monday. Because we use CSS floats, we only
        need to shift the first day to the right and all the other days will be in the right place.
      </li>
      <li>In order to achieve that, we'll use the already existing CSS rules :</li>
    </ul>

    <pre v-highlightjs><code class="CSS">/* Thursday */
[data-day-start="2"] .day:first-child {
  margin-left: 14.47%;
}
/* Wednesday */
[data-day-start="3"] .day:first-child {
  margin-left: 28.74%;
}
/* Tuesday */
[data-day-start="4"] .day:first-child {
  margin-left: 43.01%;
}
/* Friday */
[data-day-start="5"] .day:first-child {
  margin-left: 57.28%;
}
/* Saturday */
[data-day-start="6"] .day:first-child {
  margin-left: 71.55%;
}
/* Sunday */
[data-day-start="0"] .day:first-child {
  margin-left: 85.82%;
}</code></pre>

    <ul>
      <li>These rules add a margin on the first day of each month. The <code>data-day-start</code> value correspond to
        the result of <code>getDay()</code> from <code>Date</code> : <code>0 =&gt; "Sunday"</code>, <code>1 =&gt;
          "Monday"</code>...
      </li>
      <li>Modify your code so each <code>.cal-month</code> div has this particular attribute with the correct value.
        Here's an example :
      </li>
    </ul>

    <pre v-highlightjs><code class="HTML">
&lt;div class="cal-month" data-day-start="6" data-month="8" data-year="2018">
  &lt;h2 class="cal-month-name">September 2018&lt;/h2>
&lt;/div>
    </code></pre>

    <h3>Rules</h3>
    <ul>
      <li>You <strong>CANNOT</strong> use <code>innerHTML</code> for the no-jQuery parts.</li>
      <li>You <strong>MUST</strong> split your code into functions. Be organized and smart.</li>
      <li>You <strong>CANNOT</strong> add unspecified external dependencies (Javascript or CSS).</li>
    </ul>

    <h3>Deliveries</h3>
    <article class="delivery-file html">beta-series.html</article>
    <article class="delivery-file css">beta-series.css</article>
    <article class="delivery-file js">beta-series-calendar.js</article>
    <article class="delivery-file js">jquery-3.1.1.min.js</article>
    <article class="delivery-file img">diagonal-striped-brick.png</article>

    <!--EXERCISE 2-->
    <hr>
    <h2 id="ex-2">Fill the calendar</h2>
    <h3>Learning goals</h3>
    <ul>
      <li>Know how retrieve elements from the DOM and modify them (directly and with jQuery).</li>
      <li>Know how to parse and read JSON.</li>
    </ul>

    <h3>Context</h3>
    <p>Now that we have our beautiful empty calendar, it's time to fill it with some episodes of TV shows.</p>
    <p>The result should look like
      <a href="http://cir2-lab2-episodes.surge.sh/">something like that</a>.
    </p>
    <p>In real life, these events would be retrieved from a server or something.
      We haven't covered that in the lessons, we'll see more about that next week.
    </p>

    <p>The beta-series-episodes.js script provides a JSON strings that contains some episodes of some TV shows.</p>

    <h3>Steps</h3>
    <h4>Episode List (JQuery)</h4>

    <ul>
      <li>Parse the JSON string <code>tvShows</code> and try to figure out how it is structured. Use
        <code>console.log</code> and/or the JavaScript debugger.
      </li>
      <li>Add some code in beta-series-episodes.js to iterate over the different series.
      </li>
      <li>For each serie, add its name to the <code>.series</code> ul like this :</li>
    </ul>

    <pre v-highlightjs><code class="HTML">
&lt;ul class="series">
  &lt;li class="serie-name zenith">Better Call Saul&lt;/li>
  &lt;li class="serie-name aeronef">Burger Quizz&lt;/li>
  &lt;!-- and so on... -->
&lt;/ul>
    </code></pre>

    <h4>Episodes (JQuery)</h4>

    <ul>
      <li>
        Each serie contains some seasons. In those seasons, you will find episodes, with a date property.
        This date corresponds to the release date of the episode.
        Iterate over all apisodes in orer to place them in the calendar, in the <code>div.day</code> that match the
        release date.
      </li>
      <li>Once you retrieved the <code>.day</code> element, insert a new element into it like this example :</li>
    </ul>

    <pre v-highlightjs><code>
&lt;div class="day" data-day="05">
  &lt;div class="day-number">05&lt;/div>
  &lt;div class="episode" data-serie="burger-quizz" title="Burger Quizz">Burger Quizz - S02E22&lt;/div>
&lt;/div>
    </code></pre>

    <ul>
      <li>The <code>.day-number</code> div was already a child of <code>.day</code>,
        you just have to append your <code>.episode</code> div after.
      </li>
      <li>The title attribute allows use to have tooltips when the name is very long.</li>
      <li>The <code>data-serie</code> will be useful for adding colors to each serie.</li>
    </ul>

    <h3>Rules</h3>
    <ul>
      <li>You <strong>MUST</strong> split your code into functions. Be organized and smart.</li>
      <li>You <strong>CANNOT</strong> add unspecified external dependencies (Javascript or CSS).</li>
    </ul>

    <h3>Deliveries</h3>
    <article class="delivery-file html">beta-series.html</article>
    <article class="delivery-file css">beta-series.css</article>
    <article class="delivery-file js">beta-series-calendar.js</article>
    <article class="delivery-file js">beta-series-episode.js</article>
    <article class="delivery-file js">jquery-3.1.1.min.js</article>
    <article class="delivery-file img">diagonal-striped-brick.png</article>

    <!--EXERCISE 3-->
    <hr>
    <h2 id="ex-3">Make it smart !</h2>
    <p>This a <i data-v-d25aa3fa="">be awesome</i> exercise.</p>

    <h3>Learning goals</h3>
    <ul>
      <li>Learn new stuffs from another website.</li>
      <li>Try out and experiment stuffs.</li>
      <li>Experiment with HTML events.</li>
    </ul>

    <h3>Context</h3>
    <p>The calendar works fine. There is information about upcoming episodes, but you can still perfect it.</p>
    <p>In this exercise, you will try to enhance this calendar with advanced features, like a filter.</p>
    <br>
    <p>And, this is your app, so if you have more ideas, do what you want !</p>

    <h3>Steps</h3>

    <h4>Easy tasks</h4>
    <ul>
      <li>Add some anchors to the months in list menu, in order to scroll the page to the selected month.</li>
      <li>Add colors to each serie. You already have everything you need in the HTML to add style per serie.</li>
      <li>Change the style of the current day.</li>
      <li>Change the style of episodes before today.</li>
    </ul>

    <h4>A serie filter</h4>
    <p>Here, you will have to use HTML events to select a serie, and hide all other items.</p>
    <ul>
      <li>Add an event listener to the <code>ul.serie</code> element. When the user clicks on a <code>li</code>,
        change the style of this element, like it is selected. If the user clicks again, reset the style.
      </li>
      <li>Now the fun part, when a serie is selected, hide all episodes that does not match with the selected serie.
      </li>
    </ul>

    <p><i class="accent">BONUS: </i>Rework the filter by adding a checkbox per serie in the list.
      Then hide episodes that does not belongs to any checked series.
    </p>

    <h4>Ideas you can implement</h4>
    <ul>
      <li>Enrich the data with one or more series you like.</li>
      <li>On double click on a episode, open a "pop-up" that displays the image of the serie related.
        Hide the image by double clicking on it.
      </li>
      <li>Improve the design, add more style.</li>
    </ul>

    <h4>Go mobile</h4>
    <p>Try to add some responsivity with media queries. Have some different CSS for phone, tablet... resolutions.</p>

    <h3>Rules</h3>
    <ul>
      <li>You <strong>MUST</strong> be totally awesome on this lab ;-)</li>
      <li>You <strong>CANNOT</strong> modify <code>beta-series.css</code> and <code>beta-series.html</code>.
        If you wanna modify the CSS, use <code>beta-series-custom.css</code>. If you wanna add some HTML, use the
        DOM.
      </li>
    </ul>

    <h3>Deliveries</h3>
    <article class="delivery-file html">beta-series.html</article>
    <article class="delivery-file css">beta-series.css</article>
    <article class="delivery-file css">beta-series-custom.css</article>
    <article class="delivery-file js">beta-series-calendar.js</article>
    <article class="delivery-file js">beta-series-episode.js</article>
    <article class="delivery-file js">jquery-3.1.1.min.js</article>
    <article class="delivery-file img">diagonal-striped-brick.png</article>
  </section>
</template>

<script>
import diagonalStripedBrick from './assets/tp/diagonal-striped-brick.png';

export default {
  name: 'tp-tv-show',
  data() {
    return {
      showHTML: false,
      showCSS: false,
      showImg: false,
    };
  },
  methods: {
    restoreUrl() {
      setTimeout(() => {
        this.$router.push('/tp2-beta-series');
      }, 1);
    },
    toggleHTML() {
      this.showHTML = !this.showHTML;
    },
    toggleCSS() {
      this.showCSS = !this.showCSS;
    },
    toggleImg() {
      this.showImg = !this.showImg;
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
