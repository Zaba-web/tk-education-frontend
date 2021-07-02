<template>
    <div class="slider-wrapper tiltable">
        <div class="slider-container">
            <div class="slides-content" ref="slidesContent">
                <div class="slides-content-movable">
                    <div class="slide" v-for="(item, index) in slides" :key="index">
                        <img :src="item.image" :alt='item.title'>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-controls-container">
            <div class="control-element" v-for="(item, index) in slides" :key="index" :class="{active: isActive(index)}" @click="setSelectedSlide(index)"></div>
        </div>
        <div class="slide-name-container">
            <span class="slide-title">
                {{ slideLabel }}
            </span>
            <span class="slider-text">
                Що вивчаємо?
            </span>
        </div>
    </div> 
</template>

<script>
    import gsap from 'gsap'

    export default {
        data(){
            return {
                slides: [
                    {
                        image: require("@/assets/images/html-img.png"),
                        title: "HTML"
                    },
                    {
                        image: require("@/assets/images/css-img.png"),
                        title: "CSS"
                    },
                    {
                        image: require("@/assets/images/js-img.png"),
                        title: "JAVASCRIPT"
                    }
                ],
                activeSlide: 0,
                slideLabel: "HTML",
                interval: 5000,
                timer: null,
            }
        },
        methods: {
            setSlide(slide){
                this.activeSlide = slide
            },
            turnSlide(){
                let offset = this.activeSlide > 0 ? 5 : 0

                gsap.to('.slides-content-movable', {
                    y: `-${(this.activeSlide * this.$refs.slidesContent.offsetHeight) + offset}px`,
                    ease: "expo",
                    duration: 2
                });

                this.slideLabel = this.slides[this.activeSlide].title
            },
            increaseSlideNumber(){
                this.activeSlide < 2 ? this.setSlide(this.activeSlide + 1) : this.setSlide(0)
            },
            isActive(index){
                return index === this.activeSlide
            },
            setSelectedSlide(index){
                clearInterval(this.timer)
                this.setSlide(index)
                this.turnSlide()
                this.setSliderTimer()
            },
            setSliderTimer(){
                this.timer = setInterval(() => {
                    this.increaseSlideNumber()
                    this.turnSlide()
                }, this.interval);
            }
        },
        mounted(){
            this.setSliderTimer()
        }
    }
</script>

<style lang="sass" scoped>
.slider-wrapper
    position: relative
    z-index: 3
    height: 400px
    @media (max-width: $tablet-big)
        transform: scale(.9)
    @media (max-width: $tablet-medium)
       transform: scale(1)
    @media (max-width: $phone-big)
        transform: scale(.8)
    @media (max-width: $phone-small)
        transform: scale(.6)

.slider-container
    width: 419px
    height: 371px
    position: relative
    @media (max-width: $tablet-big)
        transform: scale(.9)
    
    &::before  
      content: ''
      width: 100%
      height: 100% 
      background: #3C4148
      position: absolute
      z-index: -1
      left: 14px
      top: 14px

.slides-content
    height: 100%
    position: relative
    overflow: hidden

.slides-content-movable
    width: 100%
    height: 100%
    position: absolute

    & .slide
        width: 100%
        height: 100%
        display: inline-block
        overflow: hidden
        & > img 
            height: 100%


.slide-name-container
    width: 179px
    height: 179px
    border: 3px solid $accent-color 
    position: absolute
    bottom: -20px
    left: -40px
    z-index: -2

.slide-title
    position: absolute
    bottom: -35px
    color: $accent-color
    font-family: "Raleway-Bold"
    font-size: 16px

.slider-text
    writing-mode: vertical-lr;
    position: absolute
    left: -30px
    top: 33px
    color: $gray-text-color
    font-family: "Raleway-Light"

.slider-content
    width: 100%
    height: 100%

.slider-controls-container
    position: absolute
    right: 0
    bottom: 0
    padding-top: 10px
    display: flex

    .control-element
        width: 28px
        height: 4px
        background: #343A42
        margin-right: 10px
        cursor: pointer

        &:last-of-type
          margin-right: 0  

        &.active
            position: relative
            &::after
                content: ''
                position: absolute
                height: 100%
                top: 0
                background: $accent-color
                animation: next-slide-loading 5s linear        

@keyframes next-slide-loading
    0%
        width: 0% 
    100%
        width: 100%
</style>