<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'EventList' }">Events</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'EventCreate' }">Add Lighting</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
h1 {
  color: #fff;
}
h4 {
  font-size: 20px;
}
.circle-shape {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 30px;
}
ul,
li {
  list-style: none !important;
  padding: 0;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
}
p {
  margin: 0;
  color: #fff;
}
body {
  min-height: 100vh;
  background: linear-gradient(to bottom, #030015, #080d4f, #061f34);
  color: #fff;
}
</style>
