<template>
  <div id="app">
    <div id="nav">
      <div @click="getMovies">
        <router-link :to="{ name: 'Home'}">Home</router-link>|
        <router-link :to="{ name: 'Random'}">Random</router-link>|
        <router-link :to="{ name: 'MyMovieList'}">MyMovieList</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import Random from '@/views/Random'
// import MyMovieList from '@/views/MyMovieList'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  // components: {
  //   Random,
  //   MyMovieList,
  // },
  methods: {
  ...mapActions([
      'getMovies',
    ])
  }
}

</script>

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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
