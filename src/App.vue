<template>
  <div id="nav">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/styles.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-weight: bold;
}

* {
  box-sizing: border-box;
  text-decoration: none;
}

body {
  background: $body-bgr;
}

#nav {
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
