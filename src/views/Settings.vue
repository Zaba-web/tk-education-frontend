<template>
    <div>
        <dashboard-view-title subtitle="Змінити налаштування профілю">
            Налаштування
        </dashboard-view-title>
        <dashboard-section title="Налаштування" subtitle="Заповніть форми для того, щоб щось змінити.">
            <inline-container>
                <default-block block-width="48%">
                    <h3 class="bright-text-color">Змінити пароль</h3>
                    <br>
                    <form ref="form">
                        <label for="old_password" class="bright-text-color">Старий пароль</label>
                        <input type="password" class="full-size" placeholder="Введіть старий пароль" id='old_password' name="old_password" data-minlength="6" >
                        <label for="description" class="bright-text-color">Новий пароль</label>
                        <input type="password" class="full-size" placeholder="Введіть новий пароль" id='new_password' name="new_password" data-minlength="6" >
                        <label for="description" class="bright-text-color">Повторіть новий пароль</label>
                        <input type="password" class="full-size" placeholder="Введіть новий пароль ще раз" id='new_password_confirm' data-sameas="new_password" name="new_password_confirm" data-minlength="6" >
                        <br><br>
                        <button type="submit">
                                Зберегти
                        </button>
                    </form>
                </default-block>
                <default-block block-width="48%">
                    <h3 class="bright-text-color">Змінити Email</h3>
                    <br>
                    <form ref="form_email">
                        <label for="email" class="bright-text-color">Email</label>
                        <input type="text" class="full-size" placeholder="Введіть новий Email" id='email' name="email" data-minlength="4" data-email="true">
                        <label for="email_confirm" class="bright-text-color">Повторіть Email</label>
                        <input type="text" class="full-size" placeholder="Введіть новий Email ще раз" id='email_confirm' name="email_confirm" data-minlength="4" data-sameas="email" data-email = "true">
                        
                        <br><br>
                        <button type="submit">
                                Зберегти
                        </button>
                    </form>
                </default-block>
            </inline-container>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import Validator from "@/libs/validator"

    export default {
        components: {
            ...structureComponents
        },

        methods: {
            success(msg){
                this.$store.commit('ADD_NEW_MESSAGE', msg)
            },
            error(msg){
                this.$store.commit('ADD_NEW_MESSAGE', {
                    title: "Серверна помилка",
                    msg: "Відбулась критична помилка на стороні серверу. Перегляньте консоль для детальної інформації",
                    type: "error"
                })

                console.error(msg)
            }
        },

        mounted(){
            const passwordValidator = new Validator()
            passwordValidator.setTargetForm(this.$refs.form, true, 'post', `settings/password`, this.success, this.error)
            passwordValidator.setValidationObserver()

            const emailValidator = new Validator()
            emailValidator.setTargetForm(this.$refs.form_email, true, 'post', `settings/email`, this.success, this.error)
            emailValidator.setValidationObserver()
        }
    }
</script>