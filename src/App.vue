<template>
  <div id="app">
    <div id="nav">
      <img class="logo" src="./assets/blockchain.svg" width="70" height="70" alt />
      <div class="nav-link">
        <router-link to="/">Home</router-link>
        <router-link to="/Author">Author</router-link>
        <router-link to="/Reviewer">Reviewer</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}
#app {
  margin: 0;
}
.logo {
  position: absolute;
  left: 50vw;
  top: 15px;
  transform: translate(-250px, -10%);
}
#nav {
  /* width: 70vw; */
  padding: 30px 0px;
  width: 100vw;
  background-color: aliceblue;
}
.nav-link {
  margin: 0 auto;
}
#nav a {
  text-decoration: none;
  padding-right: 1rem;
  font-weight: bold;
  color: #2c3e50;
}
#nav a:hover {
  opacity: 70%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
