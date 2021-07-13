<template>
    <div>
        <label for="query" class="bright-text-color">{{label}}</label>
        <input type="text" class="full-size" :placeholder="placeholder" id='query' v-model="searchQuery" @change="search">
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            placeholder: String
        },

        data(){
            return {
                searchQuery: ''
            }
        },

        methods: {
            search(){
                this.$emit('search', this.searchQuery)
            }
        }
    }
</script>