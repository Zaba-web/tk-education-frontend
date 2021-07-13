<template>
    <div>
        <dashboard-view-title subtitle="Перелік завдань теми">
            Керування темою {{themeData.title}}
        </dashboard-view-title>
        <dashboard-section :title="`Завдання теми ${themeData.title}`" subtitle="Перелік завдань обраної теми">
            <tasks-list></tasks-list>
        </dashboard-section>
    </div>
</template>

<script>
    import API from "@/libs/api"
    import {structureComponents} from "@/libs/dashboardComponentsLoader"

    import AdminTasksList from '@/components/Dashboard/Study/Tasks/AdminTasksList.vue'

    export default {
        components: {
            ...structureComponents,
            'tasks-list': AdminTasksList
        }, 

        data(){
            return {
                api: null,
                themeData: {}
            }
        },

        mounted(){
            this.api = new API()

            this.api.getSecureData(`education/theme/${this.$route.params.id}`).then(response => this.themeData = response)
        }
    }
</script>