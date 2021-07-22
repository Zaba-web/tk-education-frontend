<template>
    <div>
        <dashboard-view-title subtitle="Розпочати перевірку робіт учнів">
            Перевірка робіт
        </dashboard-view-title>
        <dashboard-section title="Розділ" subtitle="Оберіть розділ для перевірки">
            <inline-container mode="to-left">
                <default-block 
                    block-width="30%" 
                    v-for="(course, index) in courses" 
                    :key="index" 
                    class="item" 
                    @click="setActiveCourses(course.id)" 
                >
                    <h3 class="bright-text-color" style="text-decoration:none">
                        {{course.name}}
                    </h3>
                    <span class="p-like default-text-color less-size">
                        Кількість тем: {{course.themeCount}}
                    </span>
                    <div class="check-work-select" :class="{'active': course.id == activeCourse}"></div>
                </default-block>
            </inline-container>
        </dashboard-section>
        <dashboard-section title="Група" subtitle="Оберіть групу для перевірки" style="border:0">
            <inline-container mode="to-left">
                <default-block 
                    block-width="30%" 
                    v-for="(group, index) in groups" 
                    :key="index" 
                    class="item"
                    @click="setActiveGroup(group.id)" 
                >
                    <h3 class="bright-text-color" style="text-decoration:none">
                        {{group.name}}
                    </h3>
                    <div class="check-work-select" :class="{'active': group.id == activeGroup}"></div>
                </default-block>
            </inline-container>
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
                courses: [],
                groups: [],
                activeCourse: null,
                activeGroup: null
            } 
        },

        methods: {
            setActiveCourses(courseId) {
                this.activeCourse = courseId
                this.goToWorks()
            },
            setActiveGroup(groupId) {
                this.activeGroup = groupId
                this.goToWorks()
            },
            goToWorks() {
                if(this.activeGroup != null && this.activeCourse != null) {
                    this.$router.push(`/admin/works/${this.activeCourse}/${this.activeGroup}`)
                }
            }
        },

        mounted(){
            this.api = new API()

            this.api.getSecureData('education/courses').then(response => this.courses = response)
            this.api.getSecureData('groups').then(response => this.groups = response)
        }
    }
</script>

<style lang="sass" scoped>
.check-work-select
    width: 10px
    height: 10px
    position: absolute
    right: 15px 
    top: 15px
    border-radius: 100px
.item
    cursor: pointer   
</style>
