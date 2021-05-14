<template>
  <div>
    <h1>보고싶은 영화 목록 📽</h1>
    <MyListForm />
    <MyList />
  </div>
</template>

<script>
import MyListForm from '@/components/MyListForm'
import MyList from '@/components/MyList'

export default {
  name: 'MyMovieList',
  components: {
    MyListForm,
    MyList,
  },
}
</script>

<style>

</style>