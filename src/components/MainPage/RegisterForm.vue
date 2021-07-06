<template>
    <div class="form-wrapper">
        <div class="form-container">
            <span class="form-title black-color">
                Реєстрація
            </span>
            <br><br>
            <span class="p-like gray-color small-text">
                Заповніть всі поля форми для того, щоб зареєструватись на сайті.
            </span>
            <br><br>
            <form @submit.prevent="submitForm()" ref="form">
                <div class="form-content-wrapper">
                    <div class="form-content-container" :style="{'right': `${rightOffset}%`}">
                        <div>
                            <label for="login" class="black-color">Логін</label>
                            <input 
                                type="text" 
                                placeholder="Уведіть ваш логін" 
                                id='login'
                                data-minlength = "3"
                                v-model.trim="login"
                            >

                            <label for="email" class="black-color">E-mail</label>
                            <input 
                                type="text" 
                                placeholder="Уведіть ваш Email" 
                                id='email'
                                data-minlength = "6"
                                data-email = "true"
                                v-model.trim="email"
                            >

                            <button class="black-button center" type="button" @click="nextSlide">
                                Далі
                            </button>
                        </div>
                        <div>
                            <label for="password" class="black-color">Пароль</label>
                            <input 
                                type="password" 
                                placeholder="Уведіть ваш пароль" 
                                id='password'
                                data-minlength = "6"
                                data-sameas = "password"
                                v-model="password"
                            >

                            <label for="password_re" class="black-color">Повторіть пароль</label>
                            <input 
                                type="password" 
                                placeholder="Повторіть ваш пароль" 
                                id='password_re'
                                data-minlength = "6"
                                data-sameas = "password"
                                v-model="passwordRepeat"
                            >

                            <div class="flex-container">
                                <button class="black-button center" type="button" @click="previousSlide">
                                    Назад
                                </button>
                                <button class="black-button center" type="button" @click="nextSlide">
                                    Далі
                                </button>
                            </div>
                        </div>
                        <div>
                            <label for="name" class="black-color">ПІБ</label>
                            <input 
                                type="text" 
                                placeholder="Уведіть ваше ім'я" 
                                id='name'
                                data-minlength = "6"
                                v-model="name"
                            >

                            <label for="group" class="black-color">Ваша група</label>
                            <select 
                                name="group" 
                                id="group"
                                v-model="group"
                            >
                                <option selected value="0">Оберіть групу</option>
                                <option v-for="(group, key) in groupList" :key="key" :value="group.id">{{group.name}}</option>
                            </select>

                            <div class="flex-container">
                                <button class="black-button center" type="button" @click="previousSlide">
                                    Назад
                                </button>
                                <button class="black-button center" type="submit">
                                    Завершити
                                </button>
                            </div>
                        </div>
                    </div>
                    <p class="form-status">
                       {{registerStatus}}
                    </p>
                </div>
            </form>
            <div class="form-progress-bar" :style="{'width': `${currentStep * 33.35}%`}"></div>
        </div>
    </div>
</template>

<script>
    import Validator from "../../libs/validator.js"
    import API from "../../libs/api"

    export default {
        data(){
            return {
                rightOffset: 0,
                currentStep: 1,
                api: null,
                groupList: [{name:"loading"}, {"id": "loading"}],
                registerStatus: '',
                login: '',
                email: '',
                password: '',
                passwordRepeat: '',
                name: '',
                group: 0
            }
        },
        methods:{
            nextSlide(){
                if(this.currentStep >= 3) return ;

                this.rightOffset < 300 ? this.rightOffset += 100 : this.rightOffset = 0
                this.currentStep < 3 ? this.currentStep++ : this.currentStep
            },
            previousSlide(){
                if(this.currentStep <= 1) return ;

                this.rightOffset > 0 ? this.rightOffset -= 100 : this.rightOffset = 0
                this.currentStep--
            },
            submitForm(){
                if(this.currentStep < 3) {
                    this.nextSlide()
                    return ;
                }

                if(Validator.getResult()) {
                    this.api.post('register', {
                        login: this.login,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.passwordRepeat,
                        name: this.name,
                        group: this.group
                    }).then(response => {
                        if(response.data.registered)
                            this.registerStatus = "Ви успішно зареєструвались"
                    }).catch(error => {
                        console.log(error)
                        this.registerStatus = "Відбулась помилка при реєстрації"
                    })
                } else {
                    Validator.forceValidation()
                }
            }
        },
        mounted(){
            this.api = new API()

            Validator.setTargetForm(this.$refs.form)
            Validator.setValidationObserver()

            this.api.get('groups').then(response=>{
                let result = response.data
                this.groupList = result
            })
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
    box-shadow: rgba(0, 0, 0, 0.15) -1.95px 1.95px 2.6px;
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
        right: -20px
        top: 20px
        z-index: -1

.form-title
    font-size: 28px
    font-family: "Raleway-Thin"

.form-content-wrapper
    width: 100%
    overflow: hidden

.form-content-container
    width: 300%
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    transition: $transition-time
    position: relative

.form-progress-bar
    height: 4px 
    transition: $transition-time
    background: $black-text-color
    position: absolute 
    bottom: 0
    left: 0
</style>