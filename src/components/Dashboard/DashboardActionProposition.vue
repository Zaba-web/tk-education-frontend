<template>
    <div class="action-proposition-wrapper" :style="{'background-image': `url(${imageLink})`}">
        <div class="cover">
            <div class="inner-container">
                <span class="p-like sm-top-padding bright-text-color">
                    {{text}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            'image': String,
            'text': String
        },
        computed: {
            imageLink(){
                try {
                    return require(`@/assets/images/${this.image}`)
                } catch {
                    console.error(`Не вдається завантажити зображення ${this.image}`)
                    return ''
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
.action-proposition-wrapper
    width: 30%
    min-width: 220px
    height: 220px
    position: relative
    background-size: cover !important
    background-position: top top !important
    & .cover
        position: absolute
        width: 100%
        height: 100%
        left: 0
        top: 0 
        display: flex
        & .inner-container
            margin: auto auto
            text-align: center
</style>