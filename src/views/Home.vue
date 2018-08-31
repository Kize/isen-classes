<template>
  <div class="home">
    <h1>Cours de Javascript : ISEN CIR 2 - 2018</h1>

    <div class="courses">
      <div class="courses-left">

        <!--CLASS 1-->
        <div class="course-container">
          <h2 class="course-title">Cours 1 :</h2>
          <ul class="course-list">
            <li>
              <router-link to="/hello-world/1/1">Web, hello world.</router-link>
            </li>
            <li>
              <router-link to="/markup/1/1">Tag, you're it !</router-link>
            </li>
            <li>
              <router-link to="/pimp-my-page/1/1">Pimp my page ...</router-link>
            </li>
          </ul>
        </div>

        <!--CLASS 2-->
        <div class="course-container">
          <h2 class="course-title">Cours 2 :</h2>
          <ul class="course-list">
            <li>
              <router-link to="/">In progress...</router-link>
            </li>
          </ul>
        </div>

        <!--CLASS 3-->
        <div class="course-container">
          <h2 class="course-title">Cours 3 :</h2>
          <ul class="course-list">
            <li>
              <router-link to="/">In progress...</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="courses-right">

        <!--CLASS 4-->
        <div class="course-container">
          <h2 class="course-title">Cours 4 :</h2>
          <ul class="course-list">
            <li>
              <router-link to="/">In progress...</router-link>
            </li>
          </ul>
        </div>

        <!--CLASS 5-->
        <div class="course-container">
          <h2 class="course-title">Cours 5 :</h2>
          <ul class="course-list">
            <li>
              <router-link to="/">In progress...</router-link>
            </li>
          </ul>
        </div>

        <!--CLASS 6-->
        <div class="course-container">
          <h2 class="course-title">Cours 6 :</h2>
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

        .course-title {
          font-size: 1.5em;
          text-align: left;
          color: $meadow;
          text-decoration: underline;
        }

        .course-list {
          text-align: left;

          li {
            font-size: 2em;
            list-style-type: none;

            a {
              color: $text-primary !important;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
</style>
