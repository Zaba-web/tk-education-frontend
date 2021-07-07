<template>
    <section class="login-register-section-wrapper">
        <div class="active-option-text-wrapper" :class="{
            'auth-text': mode == modes.auth,
            'register-text': mode == modes.reg
            }">
            <div class="semi-container right-align">
                <div class="text-container auth-text-container" v-if="mode == modes.auth">
                    <span class="transparent-title accent-yellow">УВІЙТИ</span>
                    <h2 class="accent-yellow">Авторизація</h2>
                    <span class="sub-title accent-yellow">З поверненням!</span>
                    <p class="gray-color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p class="gray-color">
                        Якщо ви ще не зареєстровані на сайті, ви можете 
                        скористатись формою реєстрації.
                    </p>
                    <button class="accent-button" @click='toggleMode'>
                        Реєстрація
                    </button>
                </div>
            </div>
            <div class="semi-container right-align">
                <div class="text-container register-text-container" v-if="mode == modes.reg">
                    <span class="transparent-title accent-yellow">РЕЄСТРАЦІЯ</span>
                    <h2 class="accent-yellow">Реєстрація</h2>
                    <span class="sub-title accent-yellow">Ласкаво просимо!</span>
                    <p class="gray-color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <p class="gray-color">
                        Якщо у вас вже є профіль на сайті, ви можете увійти 
                        скориставшись формою авторизації.
                    </p>
                    <button class="accent-button" @click='toggleMode'>
                        Авторизація
                    </button>
                </div>
            </div>
            <decorative-line height="150px" right="170px" bottom="20px" animation-delay='.5s' color="#fff"></decorative-line>
        </div>
        <div class="toggle-mode-container" :class="{
            'auth-toggle': mode == modes.auth,
            'register-toggle': mode == modes.reg
            }">
            <span class="h3-like black-color toggle-mode" @click='toggleMode'>
                <span v-if="mode == modes.auth">Реєстрація</span>
                <span v-if="mode == modes.reg">Авторизація</span> 
            </span>
        </div>
        <div class="form-wrapper">
            <div class="form-container">
                <login-form v-if="mode == modes.auth"></login-form>
                <register-form v-if="mode == modes.reg"></register-form>
            </div>
        </div>
    </section>
</template>

<script>
    import LoginForm from '../LoginForm.vue'
    import RegisterForm from '../RegisterForm.vue'
    import DecorativeLine from "../DecorativeLine.vue"

    export default {
        data(){
            return {
                modes: {
                    auth: 'authorization',
                    reg: 'register'
                },
                mode: "authorization"
            }
        },
        methods: {
            toggleMode(){
                this.mode == "authorization" ? this.mode = "register" : this.mode = "authorization"
            }
        },
        components:{
            'login-form': LoginForm,
            'register-form': RegisterForm,
            'decorative-line': DecorativeLine
        }
    }
</script>

<style lang="sass" scoped>

.login-register-section-wrapper
    display: grid
    grid-template-columns: 1fr 1fr
    position: relative
    @media (max-width: $tablet-medium)
        grid-template-columns: 1fr 0fr
    @media (max-width: $phone-small)
        min-height: 100vh
.active-option-text-wrapper
    background: $black-text-color
    position: relative
    transition: $transition-time
    @media (max-width: $phone-small)
        height: 100%

    &.auth-text
        left: 0

    &.register-text
        left: 100%
        text-align: right
        @media (max-width: $tablet-medium)
            left: 0
            text-align: left
    
.text-container
    box-sizing: border-box

    @media (max-width: $phone-big)
        & p:first-of-type
            display: none

    @media (max-width: $phone-middle)
        text-align: center !important
        & p 
            display: none
        & button 
            position: absolute
            top: 550px
            right: 20px
            @media (min-height: 720px)
                top: 650px

    &.auth-text-container
        padding: 65px 200px 20px 5px
        @media(max-width: $desktop-1440)
            padding: 65px 180px 20px 50px
        @media (max-width: $tablet-medium)
            padding: 65px 350px 20px 0px
        @media (max-width: $phone-big)
            padding: 25px
    
    &.register-text-container
        padding: 65px 120px 20px 90px
        @media(max-width: $desktop-1440)
            padding: 65px 50px 20px 180px
            position: relative
            & .transparent-title
                position: absolute
                right: 0
                top: 70px
        @media (max-width: $tablet-medium)
            padding: 65px 350px 20px 0px
        @media (max-width: $phone-big)
            padding: 25px

.toggle-mode-container
    display: flex
    margin: auto auto
    position: relative
    transition: $transition-time
    
    @media (max-width: $tablet-medium)
        display: none

    &.auth-toggle
        right: 0

    &.register-toggle
        right: 100%

    & .toggle-mode
        cursor: pointer
        transition: $transition-time
        &:hover
            color: $accent-color

.form-wrapper
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    pointer-events: none
    display: flex
    margin: auto auto
    @media (max-width: $tablet-medium)
        justify-content: flex-end
    @media (max-width: $phone-big)
        justify-content: center

.form-container
    width: 302px
    height: 369px
    position: relative
    display: flex
    margin: auto auto
    pointer-events: auto
    @media (max-width: $tablet-medium)
        margin: auto 0
        margin-right: 25px
</style>