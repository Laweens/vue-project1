<script>

export default {
    data() {
        return {
            query:'',
            results: []
        };
    },
    methods: {
        search() {
            fetch("https://freesound.org/apiv2/search/text/?query=piano&token=U08a0ydB5JLZ6alofwKXbn48IPYWXjY8H53IneRy")
            .then(response => response.json())
            .then(data => {
                this.results = data.results;
            })
        .catch(error => {
            console.error(error);
        }) ;
    },
   asyncFunction() {
    fetch("https://freesound.org/apiv2/search/text/?query=piano&token=U08a0ydB5JLZ6alofwKXbn48IPYWXjY8H53IneRy")
    .then(response => {
        console.log(response);
    });
   },
 }
}
</script>
<template>
<v-list-item>
    <v-list-item-title>
        <v-text-field v-model="searchText" label="Search" @Keydown.enter="search" />
         </v-list-item-title>
         </v-list-item>
<v-list-item v-for="result in results" :key="result.id" link>
    <v-list-item-title>{{ results.name }}</v-list-item-title>
</v-list-item>
</template>

<style scoped>
</style>