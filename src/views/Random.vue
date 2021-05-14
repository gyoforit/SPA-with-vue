<template>
  <div>
    <h1>랜덤 영화 뽑기 🎲</h1>
    <button class="btn btn-sm btn-dark" @click="getRandomMovie">Pick!</button>
    <p v-if="selectMovie">
      오늘의 영화는!
      {{ selectMovie[0].title }}
    </p>
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