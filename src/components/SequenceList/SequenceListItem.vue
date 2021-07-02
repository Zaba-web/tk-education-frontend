<template>
    <li :class="{'filled': isFilled}">
        <span class="p-like black-color">
            {{itemTitle}}
            <br>
            <span class="small-text">
                <slot></slot>
            </span>
        </span>
    </li>
</template>

<script>
    export default {
        props: ["itemTitle", "isFilled"]
    }
</script>

<style lang="sass" scoped>
li 
    display: block
    position: relative
    padding-top: 15px
    padding-left: 15px

    &::before
        content: ''
        position: absolute
        width: 6px 
        height: 6px
        border: 1px solid $black-text-color
        border-radius: 100px
        left: -4px 
        top: 25px
    
    &.filled
        &::before
            background:  $black-text-color

    &::after
        content: ''
        position: absolute
        width: 1px 
        background: #E7E8E9
        height: 60%
        left: 0px 
        top: 48px
</style>