<template>
    <main>
        <main-header></main-header>
        <info-section></info-section>
        <login-register-section></login-register-section>
        <main-page-footer></main-page-footer>
    </main>
</template>

<script>
    import MainHeader from '@/components/MainPage/Header/Header.vue'
    import InfoSection from '@/components/MainPage/InfoSection/InfoSection.vue'
    import LoginRegisterSection from '@/components/MainPage/login-reg/LoginRegisterSection.vue'
    import Footer from '@/components/MainPage/Footer/Footer.vue'

    import gsap from 'gsap'
    import Swipe from '@/libs/swiper.js'

    export default {
        components:{
            "main-header": MainHeader,
            "info-section": InfoSection,
            "login-register-section": LoginRegisterSection,
            'main-page-footer': Footer
        },
        data(){
            return {
                scrollingItems: [],
                scrollingPosition: 0,
                scrollingPaused: false
            }
        },
        methods: {
            resetScrollToTop(){
                this.scrollingPosition = 0
                this.doScroll()
            },
            scrollBottom(){
                if(this.scrollingPaused) return

                if(this.scrollingPosition + 1 < this.scrollingItems.length) this.scrollingPosition += 1
                else this.scrollingPosition = 0

                this.doScroll()
            },
            scrollTop(){
                if(this.scrollingPaused) return

                if(this.scrollingPosition - 1 >= 0) this.scrollingPosition -= 1
                else this.scrollingPosition = this.scrollingItems.length - 1

                this.doScroll()
            },
            doScroll(){
                gsap.to("main",{translateY: -this.scrollingItems[this.scrollingPosition].offsetTop, ease: "easeIn", duration: .85})
                this.setScrollTimeOut()
            },
            setScrollTimeOut(){
                this.scrollingPaused = true
                setTimeout(()=>{this.scrollingPaused = false}, 450)
            }
        },
        mounted(){
            // detecting if user has an IOS device
            let isIOS = ['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
            
            console.log(window.innerWidth)

            // if it is an IOS device or device that has small display then custom scroll wouldn't be applied
            if(isIOS || window.innerWidth <= 390) {
                document.querySelector("html").style.overflowY = "scroll"
                return ;
            }

            // get all full-screen sections
            this.scrollingItems = document.querySelector("main").children

            this.resetScrollToTop()

            window.addEventListener('wheel', (event)=>{
                if (event.deltaY < 0) this.scrollTop()
                else if (event.deltaY > 0) this.scrollBottom()
            })

            const swiper = new Swipe(window)

            swiper.onUp(()=>{this.scrollBottom()})
            swiper.onDown(()=>{this.scrollTop()})
            swiper.run()
        }
    }
</script>

<style lang="sass">
body
    overflow-y: hidden
    @supports (-webkit-touch-callout: none)
        overflow-y: scroll
    @media (max-width: $phone-small)
        overflow-y: scroll
    
</style>