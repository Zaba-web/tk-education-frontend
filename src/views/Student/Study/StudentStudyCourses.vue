<template>
    <div>
        <dashboard-view-title subtitle="Робота з теоретичним та практичним матеріалом">
            Матеріали
        </dashboard-view-title>
        <dashboard-section title="Розділи" subtitle="Оберіть розділ для вивчання">
            <course-list display-mode="user" />
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import CourseList from "@/components/Dashboard/Study/Courses/CoursesList.vue"

    export default {
        components: {
            ...structureComponents,
            'course-list': CourseList 
        }
    }
</script>