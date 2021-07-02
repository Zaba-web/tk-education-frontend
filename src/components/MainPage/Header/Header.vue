<template>
    <header>
        <div class="container">
            <nav-menu></nav-menu>
            <div class="header-content-wrapper">
                <div>
                    <span>
                        <h1 class="accent-yellow">Виробниче навчання</h1>
                        <span class="sub-title accent-yellow">WEB Розробка</span>
                        <p class="gray-color">
                            Даний проект створено з метою надання інтераткивних навчальних <br>
                            матеріалів з веб-розробки для виробничого навчання професії <br>
                            «Оператор з обробки інформації та програмного забезпечення» <br>
                        </p>
                        <decorative-line height="240px" right="0" top="0" color="#fff"></decorative-line>
                    </span>
                    
                    <span class="welcome-message-container">
                        <h3 class="accent-yellow">Ласкаво просимо</h3>
                        <p class="gray-color">
                            Для того, щоб почати роботу з ресурсом потрібно <br>
                            створити профіль  або увійти у вже існуючий.
                        </p>
                        <button class="accent-button header-slider-button" @click="showSlider">
                            Що ми вивчаємо
                        </button>
                        <button class="accent-button">
                            Реєстрація
                        </button>
                        <button class="accent-button">
                            Авторизація
                        </button>
                        <decorative-line height="300px" left="0" top="0" animation-delay="1.5s" color="#fff"></decorative-line>
                    </span>
                </div>

                <div ref="sliderOuterContainer">
                    <div class="hide-container">
                        <span class="p-like accent-yellow" @click="hideSlider">назад</span>
                    </div>
                    <slider></slider>
                </div>
            </div>
        </div>
       <scroll-hint></scroll-hint>
    </header>
</template>

<style lang="sass" scoped>
header
    background: rgb(38,43,51)
    background: $dark-gradient

.welcome-message-container
    text-align: right
    margin-top: 50px
    @media (min-height: $desktop-hight)
        margin-top: 100px
    @media (max-width: $phone-middle)
        margin-top: 15px

.header-content-wrapper
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 10px
    padding-top: 110px
    @media (max-width: $tablet-medium)
        grid-template-columns: 1fr 0fr
    & > div:last-of-type
        box-sizing: border-box
        padding-left: 20px
        padding-right: 14px
        display: flex
        justify-content: flex-end
        @media (max-width: $tablet-big)
            padding-right: 0
        @media (max-width: $tablet-medium)
            background: $black-text-color
            position: fixed
            left: -150vw
            top: 0
            width: 100vw
            height: 100vh
            z-index: 999
            justify-content: center
            align-items: center
    @media (min-height: $desktop-hight)
        padding-top: 130px
    @media (max-width: $tablet-big)
        padding-top: 60px
    @media (max-width: $phone-middle)
        padding-top: 15px
    & span 
        position: relative
        display: block
.header-slider-button
    display: none
    @media (max-width: $tablet-medium)
        display: inline-block
.hide-container
    display: none
    @media (max-width: $tablet-medium)
        display: block
    position: absolute
    top: 25px
    left: 25px
</style>

<script>
import NavMenu from "./Menu.vue"
import Slider from "./Slider.vue"
import ScrollHind from "./ScrollHint.vue"
import DecorativeLine from "../DecorativeLine.vue"

import gsap from 'gsap'

export default {
    components:{
        "nav-menu":NavMenu,
        "slider":Slider,
        "scroll-hint": ScrollHind,
        "decorative-line": DecorativeLine
    },
    methods: {
        showSlider(){
            gsap.to(this.$refs.sliderOuterContainer, {
                left: 0
            })
        },
        hideSlider(){
            gsap.to(this.$refs.sliderOuterContainer, {
                left: "-150vw"
            })
        }
    }
}
</script>