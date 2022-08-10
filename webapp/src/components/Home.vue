<template>
  <div>
    <h1>Search for Movies</h1>
      <input
        type="search"
        name="movieName"
        v-model="movieName"
        placeholder="Movie Name Here!"
        v-on:keyup.enter="search"/>
    <button @click="search">
      Search
    </button>
    <br>
    <div v-for='result in results' :key='result.id'>
      <p>Title: {{result.title}}</p>
      <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" width='100px'>
      <p>Popularity Score: {{result.popularity}}</p>
    </div>
  </div>
</template>

<script>
import SearchTitle from '@/services/SearchTitle'
export default {
  data () {
    return {
      movieName: '',
      results: ''
    }
  },
  methods: {
    async search () {
      const response = await SearchTitle.search({
        title: this.movieName
      })
      this.results = response.data.data
    }
  }
}
</script>

<style scoped>

</style>
