<template>
    <div>
        <dashboard-view-title :subtitle="taskResult.title">
            Перевірка роботи
        </dashboard-view-title>
        <dashboard-section title="Перевірка роботи" subtitle="Ознайомтесь з роботою учня та оцініть її">
            <default-block block-width="100%">
                <span class="p-like default-text-color">
                    <span class="bright-text-color">
                        Задвання:
                    </span>
                    {{taskResult.title}}
                </span>
                <br><br>
                <span class="p-like default-text-color">
                    <span class="bright-text-color">
                        Учень:
                    </span>
                    {{taskResult.userName}}
                </span>
                <br><br>
                <a :href="taskResult.link" download target="_blank" class="p-like default-text-color">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.969" height="20.233" viewBox="0 0 18.969 20.233" class="default-icon-fill" style="margin-right: 10px">
                        <g data-name="download (1)" transform="translate(-16)">
                            <g id="Group_632" data-name="Group 632" transform="translate(20.426)">
                                <g id="Group_631" data-name="Group 631">
                                    <path id="Path_1746" data-name="Path 1746" d="M138.058,9.223a.631.631,0,0,0-.575-.371h-2.529V.632A.633.633,0,0,0,134.321,0h-2.529a.633.633,0,0,0-.632.632v8.22H128.63a.632.632,0,0,0-.475,1.048l4.426,5.058a.631.631,0,0,0,.951,0L137.958,9.9A.63.63,0,0,0,138.058,9.223Z" transform="translate(-127.998)" />
                                </g>
                            </g>
                            <g id="Group_634" data-name="Group 634" transform="translate(16 13.91)">
                                <g id="Group_633" data-name="Group 633">
                                    <path id="Path_1747" data-name="Path 1747" d="M32.44,352v3.794H18.529V352H16v5.058a1.264,1.264,0,0,0,1.265,1.265H33.7a1.263,1.263,0,0,0,1.265-1.265V352Z" transform="translate(-16 -352)" />
                                </g>
                            </g>
                        </g>
                    </svg>Завантажити
                </a>
                <br><br>
                    <form ref="form">
                        <label for="mark" class="bright-text-color">Оцінка</label>
                        <select class="full-size" name="mark">
                            <option value="1" disabled selected>Оберіть оцінку</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <label for="comment" class="bright-text-color">Коментар</label>
                        <input type="text" class="full-size" placeholder="Введіть коментар" id='comment' name="comment" value="Згенеровано системою">
                        <br><br>
                        <button>
                            Зарахувати
                        </button>
                        <button type="button" @click="reject">
                            Відхилити
                        </button>
                    </form>
            </default-block>
        </dashboard-section>
        <dashboard-section title="Завдання" subtitle="Завдання, яке виконав учень.">
            <default-block block-width="100%">
                <div v-html="taskResult.task" class="dashboard-text-content"></div>
            </default-block>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import API from "@/libs/api" 

    import Validator from "@/libs/validator"

    export default {
        components: {
            ...structureComponents
        },

        data() {
            return {
                api: null,
                taskResult: {}
            }
        },
        
        methods: {
            reject() {
                this.api.delete(`admin/check/reject/${this.$route.params.id}`)
                .then(response => this.$store.commit('ADD_NEW_MESSAGE', response.data))
                .catch(error => {
                    this.$store.commit('ADD_NEW_MESSAGE', {
                        title: "Серверна помилка",
                        msg: "Відбулась критична помилка на стороні серверу. Перегляньте консоль для детальної інформації",
                        type: "error"
                    })

                    console.error(error)
                })
            }
        },

        mounted() {
            this.api = new API()
            this.api.getSecureData(`works/get/${this.$route.params.id}`).then(response => this.taskResult = response)

            const validator = new Validator()
            validator.setTargetForm(this.$refs.form, true, 'put', `admin/check/complete/${this.$route.params.id}`, 
                response => {
                    this.$store.commit('ADD_NEW_MESSAGE', response.data)
                }, 
                error => {
                    this.$store.commit('ADD_NEW_MESSAGE', {
                        title: "Серверна помилка",
                        msg: "Відбулась критична помилка на стороні серверу. Перегляньте консоль для детальної інформації",
                        type: "error"
                    })

                    console.error(error)
                }
            )

            validator.setValidationObserver()
        }
    }
</script>