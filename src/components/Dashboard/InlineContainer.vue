<template>
    <div class="inline-container" :class="{
        'space-between': (mode == 'space-between' || mode == undefined),
        'to-left': (mode == 'to-left'),
        'to-right': (mode == 'to-right')
    }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            mode: String
        }
    }
</script>

<style lang="sass" scoped>
.inline-container
    width: 100%
    display: flex
    flex-wrap: wrap
    &.space-between
        justify-content: space-between
    &.to-left
        justify-content: left
        gap: 35px
    &.to-right
        justify-content: right
        gap: 35px
</style>