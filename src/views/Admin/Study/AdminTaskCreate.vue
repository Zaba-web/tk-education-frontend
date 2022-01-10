<template>
    <div>
        <dashboard-view-title :subtitle="`Створити завдання на тему ${theme.title}`">
            Керування матеріалами
        </dashboard-view-title>
        <form ref="form">
            <dashboard-section title="Дані про завдання" subtitle="Заповніть форму, вказавши заголовок завдання та його параметри">
                <inline-container>
                    <default-block block-width="48%">
                        <label for="title" class="bright-text-color">Заголовок</label>
                        <input 
                            type="text" 
                            class="full-size" 
                            placeholder="Введіть заголовок завдання" 
                            id='title' 
                            name="title" 
                            data-minlength="4" >

                        <label for="theme_id" class="bright-text-color">Тема</label>
                        <select name="theme_id" id="theme_id" class="full-size">
                            <option :value="theme.id" selected>{{theme.title}}</option>
                        </select>

                        <label for="check_mode" class="bright-text-color">Перевірка</label>
                        <select name="check_mode" id="check_mode" class="full-size">
                            <option value="1" disabled selected>Оберіть режим перевірки</option>
                            <option value="1">Не перевіряти (теоретичне завдання)</option>
                            <option value="3">Перевіряти (надсилання файлів)</option>
                            <option value="4">Перевіряти (надсилання файлів), без теорії</option>
                        </select>

                    </default-block>
                    <default-block block-width="48%">
                        <label for="publication_setting" class="bright-text-color">Публікація</label>
                        <select name="publication_setting" id="publication_setting" class="full-size">
                            <option value="2" disabled selected>Оберіть режим публікації</option>
                            <option value="1">Опублікувати</option>
                            <option value="2">Чернетка</option>
                        </select>

                        <label for="summary_work" class="bright-text-color">Тип завдання:</label>
                        <select name="summary_work" id="summary_work" class="full-size">
                            <option value="off" disabled selected>Оберіть режим публікації</option>
                            <option value="off">Звичайне завдання</option>
                            <option value="on">Підсумкова робота</option>
                        </select>
                    </default-block>
                </inline-container>
            </dashboard-section>

            <dashboard-section title="Теоретичні відомості" subtitle="Введіть теоретичну частину завдання (у випадку, якщо це передбачено обраним режимом перевірки)">
                <default-block block-width="100%">
                    <div class="editor-container dashboard-text-content">
                        <VSTEdit :display-group-name="false" input-name="theory" :theme="editorTheme" />
                    </div>
                </default-block>
            </dashboard-section>

            <dashboard-section title="Практичне завдання" subtitle="Введіть практичну частину завдання (у випадку, якщо це передбачено обраним режимом перевірки)">
                <default-block block-width="100%">
                    <div class="editor-container dashboard-text-content">
                        <VSTEdit :display-group-name="false" input-name="task" :theme="editorTheme" />
                    </div>
                </default-block>
            </dashboard-section>

            <button>
                Опублікувати
            </button>
        </form>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import {VSTEdit} from "vst-edit"

    import API from "@/libs/api"
    import Validator from "@/libs/validator"

    export default {
        components: {
            ...structureComponents,
            VSTEdit
        },
        data() {
            return {
                api: null,
                theme: {}
            }
        },
        computed: {
            editorTheme(){
                return localStorage.getItem('colorTheme') == 'dark' || undefined ? 'dark-theme' : 'light-theme'
            }
        },
        mounted(){
            this.api = new API()

            this.api.getSecureData(`education/theme/${this.$route.params.id}`).then(response => {
                this.theme = response
            })

            const validator = new Validator()

            validator.setTargetForm(this.$refs.form, true, 'post', `education/task/create`, 
                response => {
                    this.$store.commit('ADD_NEW_MESSAGE', response)
                }, 
                error => {
                    this.$store.commit('ADD_NEW_MESSAGE', {
                        title: "Серверна помилка",
                        msg: "Відбулась критична помилка на стороні серверу. Перегляньте консоль для детальної інформації",
                        type: "error"
                    })

                    console.error(error) 
                })

                validator.setValidationObserver()
        }
    }
</script>

<style lang="sass" scoped>
.editor-container
    width: 100%
    height: 600px
</style>