<template>
  <div>
    <div v-for="(myMovie, idx) in myMovies" :key="idx">
      <p :class="{ watched: myMovie.watched }" class="d-inline" @click="updateMyMovie(myMovie)">
        {{ myMovie.title }}
      </p>
      <button type="button" class="d-inline btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#deleteModal">x</button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">알림</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            정말로 삭제하시겠습니까?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">아니오</button>
            <button type="button" class="btn btn-primary" @click="deleteMyMovie(myMovie)">네</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MyList',
  computed: {
    ...mapState([
      'myMovies',
    ])
  },
  methods: {
    ...mapActions([
      'updateMyMovie',
      'deleteMyMovie',
    ])
    
      
    }
}
</script>

<style scoped>
.watched {
  text-decoration: line-through;
}
</style>