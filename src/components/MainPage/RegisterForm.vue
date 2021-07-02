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
            <form>
                <div class="form-content-wrapper">
                    <div class="form-content-container" :style="{'right': `${rightOffset}%`}">
                        <div>
                            <label for="login" class="black-color">Логін</label>
                            <input type="text" placeholder="Уведіть ваш логін" id='login'>

                            <label for="name" class="black-color">Ім'я</label>
                            <input type="text" placeholder="Уведіть ваше ПІБ" id='name'>

                            <button class="black-button center" type="button" @click="nextSlide">
                                    Далі
                            </button>
                        </div>
                        <div>
                            <label for="password" class="black-color">Пароль</label>
                            <input type="password" placeholder="Уведіть ваш пароль" id='password'>

                            <label for="password_re" class="black-color">Повторіть пароль</label>
                            <input type="password" placeholder="Повторіть ваш пароль" id='password_re'>

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
                            <input type="text" placeholder="Уведіть ваше ім'я" id='name'>

                            <label for="group" class="black-color">Ваша група</label>
                            <select name="group" id="group">
                                <option selected disabled>Оберіть групу</option>
                            </select>

                            <div class="flex-container">
                                <button class="black-button center" type="button" @click="previousSlide">
                                        Назад
                                </button>
                                <button class="black-button center" type="button" >
                                        Завершити
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="form-progress-bar" :style="{'width': `${currentStep * 33.35}%`}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                rightOffset: 0,
                currentStep: 1
            }
        },
        methods:{
            nextSlide(){
                this.rightOffset < 300 ? this.rightOffset += 100 : this.rightOffset = 0
                this.currentStep++
            },
            previousSlide(){
                this.rightOffset > 0 ? this.rightOffset -= 100 : this.rightOffset = 0
                this.currentStep--
            }
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