<template>
    <div @click="clicked" :title="title">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            'title': String
        },
        methods: {
            clicked(){
                this.$emit("clicked")
            }
        }
    }
</script>

<style lang="sass" scoped>
div
    text-align: center
    box-sizing: border-box
    padding: 5px 2px 5px 0
</style>