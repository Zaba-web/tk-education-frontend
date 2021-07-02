<template>
    <div class="line" :style="`height:${height}; left:${left}; right:${right}; top:${top}; bottom:${bottom}; background: ${color}`">
        <div class="moving-item" :style="`animation-delay: ${animationDelay}; background: ${color}`"></div>
    </div>
</template>

<script>
    export default {
        props: ["height", "left", "top", "right", "bottom", "animationDelay", "color"]
    }
</script>

<style lang="sass" scoped>
.line
    position: absolute
    width: 1px
    opacity: .1

.moving-item
    width: 5px
    height: 14px
    position: relative
    right: 2px
    top: 0
    animation: 6s moving infinite

@keyframes moving 
    0%
        top: 0
    50%
        top: 100%
    100%
        top: 0
</style>