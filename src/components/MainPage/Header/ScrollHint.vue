<template>
    <div class="scroll-hint-container">
        <div class="scroll-hint">
            <img src="@/assets/images/scroll_hint.svg" alt="Прокрутіть вниз">
        </div>
    </div>
</template>

<style lang="sass" scoped>

.scroll-hint-container
    position: absolute
    width: 100%
    height: 23px
    bottom: 35px
    left: 0
    display: flex
    justify-content: center    

    & .scroll-hint
        width: 30px
    
    @media (max-width:$tablet-big)
        display: none

img
    position: relative
    top: 0
    animation: 2s scroll-hint-moving infinite

@keyframes scroll-hint-moving
    0%
        top: 0
    25% 
        top: 32px
    50%
        top: 0
</style>