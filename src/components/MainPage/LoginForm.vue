<template>
    <div class="form-wrapper">
        <div class="form-container">
            <span class="form-title black-color">
                Увійти
            </span>
            <br><br>
            <span class="p-like gray-color small-text">
                Введіть дані, вказані при реєстрації для того, щоб уівйти в свій профіль. 
            </span>
            <br><br>
            <form @submit.prevent="submitForm" ref="form">
                <label for="login" class="black-color">Логін</label>
                <input type="text" placeholder="Уведіть ваш логін" id='login' data-minlength="3" v-model="login">
                <label for="password" class="black-color">Пароль</label>
                <input type="password" placeholder="Уведіть ваш пароль" id='password' data-minlength="6" v-model="password">
                <button class="black-button center" type="submit" :class="{'button-disabled': isUserLogin}">
                        Увійти
                </button>
            </form>
             <p class="form-status">
                {{registerStatus}}
            </p>
        </div>
    </div>
</template>

<script>
    import Validator from "../../libs/validator.js"
    import API from "../../libs/api"

    export default {
        data(){
            return {
                login: '',
                password: '',
                registerStatus: '',
                isUserLogin: false,
                validator: null
            }
        },
        methods: {
            submitForm(){

                if(this.isUserLogin){
                    this.registerStatus = 'Ви вже авторизовані у системі'
                    return ;
                }

                if(this.validator.getResult()) {
                    
                    this.api.post('login', {
                        login: this.login,
                        password: this.password
                    }).then(response => {
                        if(response.data.error)
                            this.registerStatus = response.data.details
                        else {
                            localStorage.setItem("token", response.data.access_token)
                            localStorage.setItem("username", response.data.user.name)
                            localStorage.setItem("email", response.data.user.email)
                            
                            switch(response.data.user.access_level){
                                case 1:
                                    break;
                                case 2:
                                    this.$router.push("admin")
                                    break;
                            }
                        }
                    }).catch(error =>{
                        this.registerStatus = `Відбулась помилка ${error}`
                    })
                } else {
                    this.validator.forceValidation()
                }
            }
        },
        mounted(){
            
            this.api = new API()
            this.isUserLogin = this.api.ifUserLogin()

            this.validator = new Validator()

            this.validator.setTargetForm(this.$refs.form)
            this.validator.setValidationObserver()
        }
    }
</script>

<style lang="sass" scoped>

input, select
    width: 240px

.form-wrapper
    width: 302px
    height: 369px
    z-index: 2
    position: relative
    & * 
        pointer-events: auto

.form-container
    width: 302px
    height: 369px
    background: #fff
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position: relative
    box-sizing: border-box
    padding: 25px

    &::before
        content: ''
        width: 57%
        height: 100%
        background: #fff
        opacity: .05
        position: absolute
        left: -20px
        top: 20px
        z-index: -1

.form-title
    font-size: 28px
    font-family: "Raleway-Thin"

</style>