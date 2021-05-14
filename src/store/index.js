import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    movies: [],
    myMovies: [],
  },
  mutations: {
    GET_MOVIES: function (state, movies) {
      state.movies = movies
    },
    CREATE_MY_MOVIE: function (state, myMovie) {
      console.log(state.myMovies)
      // find: 찾는 값이 배열에 없으면 undefined 반환
      if (state.myMovies.find((movie) => {
        return movie.title === myMovie.title
      })) {
        alert('중복된 영화입니다. 다른 영화를 입력해주세요')
      } else {
        state.myMovies.push(myMovie)
      }
    },
    UPDATE_MY_MOVIE: function (state, myMovie) {
      // console.log(myMovie)
      state.myMovies = state.myMovies.map((movie) => {
        if (movie === myMovie) {
          return {
            ...movie,
            watched: !movie.watched
          }
        } else {
          return movie
        }
      })
    },
    DELETE_MY_MOVIE: function (state, myMovie) {
      const idx = state.myMovies.indexOf(myMovie)
      state.myMovies.splice(idx, 1)
    }
  },
  actions: {
    getMovies: function (context) {
      const URL = 'https://gist.githubusercontent.com/eduChange-hphk/d9acb9fcfaa6ece53c9e8bcddd64131b/raw/9c8bc58a99e2ea77d42abd41376e5e1becabea69/movies.json' 
      // console.log(context)
      axios.get(URL)
      .then((response) => {
        // console.log(response.data)
        context.commit('GET_MOVIES', response.data)
      })
    },
    createMyMovie: function ({ commit }, myMovie) {
      commit('CREATE_MY_MOVIE', myMovie)
    },
    updateMyMovie: function ({ commit }, myMovie) {
      // console.log(myMovie)
      commit('UPDATE_MY_MOVIE', myMovie)
    },
    deleteMyMovie: function ({ commit }, myMovie) {
      commit('DELETE_MY_MOVIE', myMovie)
    }


  },
  modules: {
  },
  plugins: [
    createPersistedState(),
  ]
})
