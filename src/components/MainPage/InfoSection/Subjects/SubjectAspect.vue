<template>
    <div class="subject-aspect-container">
        <div>
            <img :src="require(`@/assets/images/${image}`)" :alt="title">
        </div>
        <div>
            <span class="h3-like gray-color">{{title}}</span>
            <span class="p-like sm-top-padding gray-color"><br>{{description}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            title: String,
            description: String
        }
    }
</script>

<style lang="sass" scoped>
.subject-aspect-container
    display: flex
    @media (max-width: $phone-big)
        display: block
        & > div:first-child
            display: none
        & > div:last-child > span:last-child
            display: none
            
</style>