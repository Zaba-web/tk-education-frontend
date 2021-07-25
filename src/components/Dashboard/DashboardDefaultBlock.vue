<template>
    <div class="bg-fill-block" :style="{'width': width}">
        <slot></slot>
    </div>
</template>

<style lang="sass" scoped>
div
    box-sizing: border-box
    padding: 20px
    border-radius: 5px
    position: relative

    @media(max-width: 600px)
        width: 100% !important
</style>

<script>
    export default {
        props: {
            'blockWidth': String
        },
        data(){
            return {
                width: 'auto'
            }
        },
        mounted(){
            if(this.blockWidth)
                this.width = this.blockWidth

            if(window.innerWidth <= 600)
                this.width = "100%"
        }
    }
</script>