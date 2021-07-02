<template>
    <div class="subject-details-wrapper" :class="{'show-block': show, 'hide-block': hide}" ref="container">
        <div class="subject-details-container">
            <div class="hide-details-block-trigger-container">
                <span class="hide-details-block-trigger" @click="$emit('hide', index)">
                    <img src="@/assets/images/left_arrow.svg" alt="Назад"> <span class="p-like black-color">назад</span>
                </span>
            </div>
            <div>
                <span class="transparent-title accent-yellow">{{title}}</span><br>
                <span class="h2-like accent-yellow">{{title}}</span><br>
                <span class="sub-title accent-yellow">{{subTitle}}</span>

                <br><br>

                <span class="p-like gray-color">
                    {{description}}
                </span>

                <br><br>

                <span class="h3-like accent-yellow">
                    {{ aspectsTitle == undefined ? "Ми вивчаємо" : aspectsTitle}}
                </span>

                <br><br>

                <div class="subject-aspects-container">
                    <slot></slot>
                </div>

            </div>

            <div>
                <div class="image-wrapper">
                    <div class="image-container">
                        <img :src="require(`@/assets/images/${image}`)" :alt="title">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            subTitle: String,
            description: String,
            image: String,
            show: Boolean,
            hide: Boolean,
            index: Number,
            aspectsTitle: String
        },
        emmits: {
            hide: "hide"
        }
    }
</script>

<style lang="sass" scoped>

.subject-details-wrapper
    position: fixed
    left: -100vw
    opacity: 0
    top: 100vh
    width: 100%
    height: 100vh
    background: #fff
    z-index: 15
    display: flex
    align-items: center
    justify-content: center

    @media (max-width: $phone-small)
        top: 0

    &.show-block
        animation: 1.5s show
        animation-fill-mode: forwards

    &.hide-block
        animation: .7s hide
        animation-fill-mode: forwards


.subject-details-container
    width: 85%
    height: 85%
    background: $dark-gradient
    display: flex
    justify-content: space-between
    position: relative

    & > div
        box-sizing: border-box
        padding: 40px
        width: 50%
        @media (max-width:$tablet-big)
            width: 100%
        &:last-of-type
            @media (max-width:$tablet-big)
                display: none

.image-wrapper
    width: 467px
    height: 413px
    margin-top: 80px
    position: relative
    z-index: 2

    & .image-container
        width: 100%
        height: 100%
        overflow: hidden

        & > img
            height: 100%

    &::after
        content: ''
        position: absolute
        width: 100%
        height: 100%
        left: 14px
        top: 14px
        background: #3C4148
        z-index: -1

.subject-aspects-container
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr
    grid-gap: 10px
    @media (max-width: $tablet-medium)
        overflow-y: hidden
        height: 200px
    @media (max-width: $phone-big)
        grid-template-columns: 1fr
        grid-template-rows: auto

.sub-title
    @media (max-width: $phone-big)
        display: none

.hide-details-block-trigger-container 
    position: absolute
    left: -40px 
    top: -80px

.hide-details-block-trigger
    cursor: pointer

    & > img
        position: relative
        top: 2px
        transition: $transition-time
        right: 0
    
    &:hover
        & > img
            right: 5px

    

@keyframes show
    0%
        left: -100vw
        opacity: 0
    90%
        left: 1.5vw
    100%
        left: 0
        opacity: 1

@keyframes hide
    0%
        left: 0
        opacity: 1
    100%
        left: -100vw
        opacity: 0

</style>