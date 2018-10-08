<template>
  <div class="home">
    <div class="home-background"></div>
    <h1>Cours de Javascript : ISEN CIR 2 - 2018</h1>

    <div class="courses">
      <div class="courses-left">

        <!--CLASS 1-->
        <div class="course-container">
          <h2 class="course-title">Cours 1 : Introduction + HTML + CSS</h2>
          <ul class="course-list">
            <li>
              <router-link to="/hello-world/1/1">Web, hello world.</router-link>
            </li>
            <li>
              <router-link to="/markup/1/1">Tag, you're it !</router-link>
            </li>
            <li>
              <router-link to="/pimp-my-page/1/1">Pimp my page !</router-link>
            </li>
          </ul>

          <router-link to="/tp1-tv-show" class="tp-link">Lab 1: TV Shows</router-link>
        </div>

        <!--CLASS 2-->
        <div class="course-container">
          <h2 class="course-title">Cours 2 : JS 101 + DOM + Events</h2>
          <ul class="course-list">
            <li>
              <router-link to="/the-hitchhikers-guide-to-the-javascript/1/1">
                The Hitchhiker's Guide To The Javascript
              </router-link>
            </li>
            <li>
              <router-link to="/dom-events/1/1">
                DOM & HTML Events
              </router-link>
            </li>
          </ul>

          <router-link to="/tp2-beta-series" class="tp-link">Lab 2: Beta Series Calendar</router-link>
        </div>

        <!--CLASS 3-->
        <div class="course-container">
          <h2 class="course-title">Cours 3 : Functions + Object + Prototype</h2>
          <ul class="course-list">
            <li>
              <router-link to="/inception/1/1">Inception</router-link>
            </li>
            <li>
              <router-link to="/object-and-class/1/1">Object and Class</router-link>
            </li>
          </ul>

          <router-link to="/tp3-draw-some-shapes" class="tp-link">Lab 3: Draw some shapes</router-link>
        </div>
      </div>

      <div class="courses-right">

        <!--CLASS 4-->
        <div class="course-container">
          <h2 class="course-title">Cours 4 : Asynchronous Programming + NodeJS</h2>
          <ul class="course-list">
            <li>
              <router-link to="/">In progress...</router-link>
            </li>
          </ul>
        </div>

        <!--CLASS 5-->
        <div class="course-container">
          <h2 class="course-title">Cours 5 : Testing</h2>
          <ul class="course-list">
            <li>
              <router-link to="/">In progress...</router-link>
            </li>
          </ul>
        </div>

        <!--CLASS 6-->
        <div class="course-container">
          <h2 class="course-title">Cours 6 : Modules + TypeScript</h2>
          <ul class="course-list">
            <li>
              <router-link to="/">In progress...</router-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
};
</script>

<style lang="scss">
  @import '../styles/colors';

  .home-background {
    background: url('../assets/gridme.png') repeat;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }

  .home {
    width: 75%;
    margin: auto;

    h1 {
      font-size: 4em;
    }

    .courses {
      display: flex;
      background-color: $bg-primary;
      border: 1px solid $ui-bg;
      border-radius: 4px;
      padding: 0 24px;

      .courses-left, .courses-right {
        width: 50%;
      }
      .course-container {
        text-align: left;

        a, a:link {
          color: #FF6600;
          font-size: 1.2em;

        }

        .course-title {
          font-size: 1.5em;
          text-align: left;
          color: $meadow;
        }

        .course-list {
          text-align: left;

          li {
            list-style-type: none;

            a {
              font-size: 2em;
              color: $text-primary !important;
            }
          }
        }
      }
    }

    .tp-link {
      text-align: left;
    }
  }
</style>
