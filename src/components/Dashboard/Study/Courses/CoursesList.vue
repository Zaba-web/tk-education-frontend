<template>
    <div>
        <inline-container v-if="displayMode == 'admin'" mode="to-left">
            <transition-group
                enter-active-class="animate__animated animate__fadeInLeft"
                leave-active-class="animate__animated animate__fadeOutLeft"
            >
                <course-for-admin 
                    v-for="(course, index) in courses" 
                    :key="index"
                    :title="course.name"
                    :theme-count="course.themeCount"
                    :create-date="course.created_at"
                    :id="course.id"
                    :description="course.description"
                    @deletedSuccessful="loadCoursesList"
                ></course-for-admin>
            </transition-group>

            <default-block block-width="320px">
                <reloader @reload='loadCoursesList' selector-class="courses-list-reload"></reloader>
            </default-block>

            <default-block block-width="320px">
                <creater component-to-open="courseCreate" :additional-data="{
                    title: 'Створити розділ',
                    description: 'Для створення нового розділу заповніть форму знизу. Майте на увазі, що ім\'я розділу повинно бути унікальним.',
                    meta: null
                }"></creater>
            </default-block>
        </inline-container>

        <inline-container v-if="displayMode == 'user'" mode="to-left">
            <course-for-student 
                v-for="(course, index) in courses" 
                :key="index"
                :title="course.name"
                :theme-count="course.themeCount"
                :create-date="course.created_at"
                :id="course.id"
                :description="course.description"
                @deletedSuccessful="loadCoursesList"
            ></course-for-student>
        </inline-container>
    </div>
</template>

<script>
    import API from '@/libs/api'

    import {listInterationComponents} from '@/libs/dashboardComponentsLoader'

    import CourseForAdmin from '@/components/Dashboard/Study/Courses/CourseForAdmin.vue'
    import CourseForStudent from '@/components/Dashboard/Study/Courses/CourseForStudent.vue'
    import DefaultBlock from '@/components/Dashboard/DashboardDefaultBlock.vue'
    import InlineContainer from '@/components/Dashboard/InlineContainer.vue'

    export default {
        methods: {
            loadCoursesList(){
                this.api.getSecureData('education/courses').then(courses => this.courses = courses)
            }
        }, 
        components: {
            'course-for-admin': CourseForAdmin,
            'course-for-student': CourseForStudent,
            'default-block': DefaultBlock,
            'inline-container': InlineContainer,
            ...listInterationComponents
        },
        props: {
            displayMode: String
        },
        data() {
            return {
                api: null,
                courses: []
            }
        },
        mounted() {
            this.api = new API()
            this.loadCoursesList()
        }
    }
</script>