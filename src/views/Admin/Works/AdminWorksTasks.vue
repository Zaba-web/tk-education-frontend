<template>
    <div>
        <dashboard-view-title subtitle="Оберіть роботу для перевірки">
            Перевірка робіт
        </dashboard-view-title>
        <dashboard-section title="Загальна інформація" subtitle="Коротка довідка стосовно роботи системи">
            <default-block>
               <inline-container>
                   <instruction-item item-title="Перевірка" >
                       Для того, щоб приступити до перевірки завдання натисніть на нього. Ви зможете завантажити роботу учня та переглянути умову завдання.
                    </instruction-item>
                    <instruction-item item-title="Пошук">
                        Комбінований пошук дозволяє шукати роботи учнів за кількома параметрами одразу.
                   </instruction-item>
                    <instruction-item item-title="Пошукові запити">
                        Пошук підтримує 3 пошукових запити: Учень, Завдання та Група. Приклад використання: Завдання:Форматування тексту
                   </instruction-item>
               </inline-container>
            </default-block>
        </dashboard-section>
        <dashboard-section title="Роботи, що очікують перевірки" subtitle="Перелік робіт по темі, надісланих учнями">
            <search label="Пошук робіт" placeholder="Введіть пошуковий запит" @search="search" />
            <br>
            <inline-container>
                <transition-group
                    enter-active-class="animate__animated animate__fadeInLeft"
                    leave-active-class="animate__animated animate__fadeOutLeft"
                >
                    <task v-for="(work, index) in studentWorksUncheckedResult" :key="index" :work="work" />
                </transition-group>
            </inline-container>
        </dashboard-section>
        <dashboard-section title="Перевірені роботи" subtitle="Роботи, які вже пройшли перевірку">
            <inline-container>
                <transition-group
                    enter-active-class="animate__animated animate__fadeInLeft"
                    leave-active-class="animate__animated animate__fadeOutLeft"
                >
                    <task v-for="(work, index) in studentWorksChecked" :key="index" :work="work" />
                </transition-group>
            </inline-container>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import API from "@/libs/api" 

    import AdminTaskForChecking from "@/components/Dashboard/Study/Tasks/AdminTaskForChecking.vue"
    import SearchInput from "@/components/Dashboard/SearchInput.vue"

    export default {
        components: {
            ...structureComponents,
            'task': AdminTaskForChecking,
            'search': SearchInput
        },

        computed: {
            groupId(){
                return this.$route.params.groupId
            },
            courseId(){
                return this.$route.params.courseId
            }
        },

        data(){
            return {
                api: null,
                studentWorksUnchecked: [],
                studentWorksUncheckedResult: [],
                studentWorksChecked: [],
                filterFunctions: {
                    'Учень': query => this.studentWorksUncheckedResult = this.studentWorksUnchecked.filter(value => value.userName.includes(query)),
                    'Завдання': query => this.studentWorksUncheckedResult = this.studentWorksUnchecked.filter(value => value.taskName.includes(query))
                }
            }
        },

        methods: {
            search(query){
                if(query.length <= 1) {
                    this.studentWorksUncheckedResult = this.studentWorksUnchecked
                    return ;
                }

                let queryList = query.split(',')

                queryList.map(item => {
                    let queryItem = item.split(':')

                    if(this.filterFunctions[queryItem[0]])
                        this.filterFunctions[queryItem[0]](queryItem[1])
                })
            }
        },

        mounted() {
            this.api = new API()
            this.api.getSecureData(`works/get/${this.courseId}/${this.groupId}`).then(response => {
                response.map(item => item.checked == 0 ? this.studentWorksUnchecked.unshift(item) : this.studentWorksChecked.unshift(item))
                this.studentWorksUnchecked.map(item => this.studentWorksUncheckedResult.push(item))
            })
        }
    }
</script>