<template>
    <div class="instruction-item-contianer" :class="{filled: filled}">
        <h3 class="bright-text-color">
            {{itemTitle}}
        </h3>
        <p class="default-text-color">
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            itemTitle: String,
            filled: Boolean
        }
    }
</script>

<style lang="sass" scoped>
.instruction-item-contianer
    max-width: 30%
    padding: 10px
    box-sizing: border-box
    position: relative
    margin-bottom: 15px
    animation: show-animation .7s forwards

    &::after
        content: ''
        position: absolute
        height: 1px
        width: 92%
        bottom: -15px
        right: 0px
    
    &::before
        content: ''
        position: absolute
        width: 10px
        height: 10px
        border-radius: 100px
        bottom: -19px
        left: 10px
        background: red
</style>