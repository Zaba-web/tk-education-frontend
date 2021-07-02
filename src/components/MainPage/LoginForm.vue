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
            <form>
                <label for="auth_login" class="black-color">Логін</label>
                <input type="text" placeholder="Уведіть ваш логін" id='auth_login'>
                <label for="auth_password" class="black-color">Пароль</label>
                <input type="password" placeholder="Уведіть ваш пароль" id='auth_password'>
                <button class="black-button center" type="button">
                        Увійти
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
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