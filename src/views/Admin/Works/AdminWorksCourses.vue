<template>
    <div>
        <dashboard-view-title subtitle="Надіслані учнями роботи">
            Роботи
        </dashboard-view-title>
        <dashboard-section title="Розділ" subtitle="Оберіть розділ для перевірки">
            <inline-container>
                <default-block block-width="30%" v-for="(course, index) in courses" :key="index">
                    <router-link :to="`/admin/works/course/${course.id}`" style="text-decoration:none">
                        <h3 class="bright-text-color" style="text-decoration:none">
                            {{course.name}}
                        </h3>
                        <span class="p-like default-text-color less-size">
                            Кількість тем: {{course.themeCount}}
                        </span>
                    </router-link>
                </default-block>
            </inline-container>
        </dashboard-section>
        <dashboard-section title="Останні" subtitle="Останні роботи, завантажені на перевірку">

        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import API from "@/libs/api"

    export default {
        components: {
            ...structureComponents
        },

        data() {
            return {
                api: {},
                courses: []
            } 
        },

        mounted(){
            this.api = new API()

            this.api.getSecureData('education/courses').then(response => this.courses = response)
        }
    }
</script>
