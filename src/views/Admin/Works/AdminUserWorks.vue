<template>
    <div>
        <dashboard-view-title subtitle="Перегляд робіт певного учня">
            Роботи учня
        </dashboard-view-title>
        <dashboard-section title="Роботи, що очікують перевірки" subtitle="Перелік робіт по темі, надісланих учнями">
            <inline-container>
                <transition-group
                    enter-active-class="animate__animated animate__fadeInLeft"
                    leave-active-class="animate__animated animate__fadeOutLeft"
                >
                    <task v-for="(work, index) in studentWorksUnchecked" :key="index" :work="work" />
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

    export default {
        components: {
            ...structureComponents,
            'task': AdminTaskForChecking
        },

        data(){
            return {
                studentWorksUnchecked: [],
                studentWorksChecked: []
            }
        },

        mounted(){
            const api = new API()
            api.getSecureData(`works/get/${this.courseId}/${this.groupId}/${this.$route.params.id}`).then(response => {
                response.map(item => item.checked == 0 ? this.studentWorksUnchecked.unshift(item) : this.studentWorksChecked.unshift(item))
            })
        }
    }
</script>