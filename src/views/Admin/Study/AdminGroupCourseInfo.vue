<template>
    <div>
        <dashboard-view-title subtitle="Керування темами розділу">
            {{courseData.name}}
        </dashboard-view-title>
        <dashboard-section :title="`Теми розділу ${courseData.name}`" subtitle="Перелік тем обраного розділу">
            <themes-list :course-id="courseData.id"></themes-list>
        </dashboard-section>
    </div>
</template>

<script>
    import API from "@/libs/api"
    import {structureComponents} from "@/libs/dashboardComponentsLoader"

    import AdminThemesList from "@/components/Dashboard/Study/Themes/AdminThemesList.vue"

    export default {
        components: {
            ...structureComponents,
            'themes-list': AdminThemesList
        },
        data(){
            return {
                api: null,
                courseData: {}
            }
        },
        mounted(){
            this.api = new API()
            this.api.getSecureData(`education/course/${this.$route.params.id}`).then(response => this.courseData = response[0])
        }
    }
</script>