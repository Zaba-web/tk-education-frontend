<template>
    <div>
        <dashboard-view-title :subtitle="taskData.title">
            Перегляд завдання
        </dashboard-view-title>
        <dashboard-section title="Теорія" subtitle="Теоретичні відомості" v-if="taskData.check_mode != 4">
            <default-block>
                <table-of-content></table-of-content>
                <div v-html="taskData.theory" class="dashboard-text-content theory-text">

                </div>
            </default-block>
        </dashboard-section>
        <dashboard-section title="Практика" subtitle="Практичне завдання" v-if="taskData.check_mode > 1">
            <default-block>
                <div v-html="taskData.task" class="dashboard-text-content">

                </div>
            </default-block>
        </dashboard-section>
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
                taskData: {}
            }
        },

        mounted(){
            const api = new API()
            api.getSecureData(`education/task/${this.$route.params.id}`).then(task => this.taskData = task)
        }
    }
</script>