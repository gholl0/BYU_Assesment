<template>
    <div>
        <h1>Search for Movies</h1>
        <input
            type="movieName"
            name="movieName"
            v-model="movieName"
            placeholder="Movie Name Here!"/>
        <button @click="search">
            Search
        </button>

    </div>
</template>

<script>
    import SearchTitle from '@/services/SearchTitle';
    export default {
        data () {
            return {
                movieName: ""
            }
        },
        methods: {
            async search () {
                const response = await SearchTitle.search({
                    title: this.movieName
                })
                console.log(response.data)
            }
        }
    }
</script>

<style scoped>

</style>