<template>
  <div>
    <h1>랜덤 영화 뽑기 🎲</h1>
    <button class="btn btn-sm btn-dark" @click="getRandomMovie">Pick!</button>
    <div class="my-3"></div>
    <h2 v-if="selectMovie">
      오늘의 영화는!
    </h2>
    <div class="d-flex justify-content-center mb-5">
      <div v-if="selectMovie" class="card text-center mt-3 w-25">
        <div class="card-header">
          <h3 class="card-title m-0">{{ selectMovie[0].title }}</h3>
        </div>
        <div class="card-body">
          <img :src="'http://image.tmdb.org/t/p/w500/' + selectMovie[0].poster_path " class="card-img-top rounded mx-auto d-block" alt="">
          <p class="card-text">{{ selectMovie[0].overview }}</p>
        </div>
        <div class="card-footer text-muted">
          평점 : {{ selectMovie[0].vote_average }}
          <br>
          개봉일 : {{ selectMovie[0].release_date }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Random',
  data : function () {
    return {
      selectMovie : null,
    }
  },
  methods: {
    getRandomMovie: function () {
      this.selectMovie = _.sampleSize(this.$store.state.movies, 1)
    }
  }
}
</script>

<style>

</style>