<template>
  <div>
    <input
      type="text"
      @keypress.enter="createMyMovie"
      v-model="movieTitle"
      placeholder="보고싶은 영화를 입력해주세요"
    >
    <button class="btn btn-sm btn-outline-dark" @click="createMyMovie">➕</button>
  </div>
</template>

<script>
export default {
  name: 'MyListForm',
  data: function () {
    return {
      movieTitle: '',
    }
  },
  methods: {
    createMyMovie: function () {
      const myMovie = {
        title: this.movieTitle,
        watched: false,
      }
      if (myMovie.title) {
        this.$store.dispatch('createMyMovie', myMovie)
      }
      this.movieTitle = ''
    }
  }
}
</script>

<style>
input {
  width: 300px;
}
</style>