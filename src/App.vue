<template>
  <div id="app">
    <router-link id="menu-home" to="/">
      <img src="./assets/menu.png"/>
    </router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #menu-home {
    position: fixed;
    top: 2em;
    left: 2em;
    z-index: 100;
    background-color: white;
    padding: 4px 4px;
    border-radius: 8px;

    img {
      width: 50%;
    }
  }

  .eg-slide-content {
    width: 75%;
  }
</style>
