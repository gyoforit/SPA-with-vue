<template>
  <div>
    <h1>Movies</h1>
    <div class="card-group">
      <MovieCard
        v-for="(movie, idx) in movies"
        :key='idx'
        :movie="movie"    
      />
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard"
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  computed: {
    ...mapState([
      'movies'
    ])
  }


  
}
</script>

<style>

</style>