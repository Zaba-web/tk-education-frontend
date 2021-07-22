<template>
    <div>
        <dashboard-view-title :subtitle="taskData.title">
            Перегляд завдання
        </dashboard-view-title>
        <dashboard-section title="Теорія" subtitle="Теоретичні відомості" v-if="taskData.check_mode != 4">
            <default-block>
                <table-of-content></table-of-content>
                <div v-html="taskData.theory" class="dashboard-text-content theory-text"></div>
            </default-block>
        </dashboard-section>
        <dashboard-section title="Практика" subtitle="Практичне завдання" v-if="taskData.check_mode > 1">
            <default-block>
                <div v-html="taskData.task" class="dashboard-text-content"></div>
            </default-block>
        </dashboard-section>
        <transition 
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <dashboard-section title="Результат" subtitle="Завантажте виконану вами роботу у вигляді архіву" v-if="taskData.check_mode > 1 && !workSent">
                <default-block>
                    <form ref="form" @submit.prevent="sendForm">
                        <input type="file" id="work" name="work" @change="getFileName" ref="fileInput" hidden>
                        <input type="hidden" name="_sessTok" :value="taskData.id">
                        <label for="work" style="margin-top: 0">
                            <span class="p-like default-text-color file-load-container">Натисніть сюди, щоб обрати файл</span>
                        </label>
                        <transition 
                            enter-active-class="animate__animated animate__fadeIn"
                            leave-active-class="animate__animated animate__fadeOut"
                        >
                            <span class="default-text-color p-like sm-top-padding less-size" v-if="fileName != ''">
                                <br>
                                Обраний вами файл: {{fileName}}
                            </span>
                        </transition>
                        <br>
                        <button>
                            Надіслати на сервер
                        </button>
                    </form>
                </default-block>
            </dashboard-section>
        </transition>
    </div>
</template>

<script>
    import API from "@/libs/api"
    import {structureComponents} from "@/libs/dashboardComponentsLoader"

    import TableOfContent from "@/components/Dashboard/Study/Tasks/TableOfContent.vue"

    export default {
        components: {
            ...structureComponents,
            'table-of-content': TableOfContent
        },

        data(){
            return {
                taskData: {},
                fileName: '',
                api: null,
                workSent: false
            }
        },

        methods: {
            sendForm(){
                const formData = new FormData(this.$refs.form)
                this.api.enableFormMode()
                this.api.post('study/task/complete', formData).then(response => {
                    this.$store.commit('ADD_NEW_MESSAGE', response.data)
                    this.workSent = true
                }).catch(error => {
                    this.$store.commit('ADD_NEW_MESSAGE', {
                        title: "Серверна помилка",
                        msg: "Відбулась критична помилка на стороні серверу. Перегляньте консоль для детальної інформації",
                        type: "error"
                    })

                    console.log(error)
                })
            },

            getFileName(){
                this.fileName = this.$refs.fileInput.files[0].name
            }
        },

        mounted(){
            this.api = new API()
            this.api.getSecureData(`education/task/${this.$route.params.id}`).then(task => this.taskData = task)
        }
    }
</script>