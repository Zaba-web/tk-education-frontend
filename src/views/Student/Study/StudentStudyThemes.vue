<template>
    <div>
        <dashboard-view-title subtitle="Робота з теоретичним та практичним матеріалом">
            Матеріали
        </dashboard-view-title>
        <dashboard-section>
            <transition-group
                enter-active-class="animate__animated animate__fadeInLeft"
                leave-active-class="animate__animated animate__fadeOutLeft"
            >
                <div v-for="(theme, index) in courseAccessData.themes" :key="index">
                    <theme :theme-name="theme.title" :avg-mark="theme.avgMark"/>
                    <br>
                    <span class="default-text-color p-like" v-if="theme.tasks == null">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11.466" height="14.594" viewBox="0 0 11.466 14.594" style="margin: 0 10px 0 10px" class="default-icon-fill static-icon">
                            <g id="lock" transform="translate(-51.2)">
                                <g id="Group_111" data-name="Group 111" transform="translate(51.2)">
                                    <g id="Group_110" data-name="Group 110" transform="translate(0)">
                                        <path id="Path_426" data-name="Path 426" d="M62.145,5.212h-.521V4.691a4.691,4.691,0,0,0-9.382,0v.521h-.521a.521.521,0,0,0-.521.521v8.339a.521.521,0,0,0,.521.521H62.145a.521.521,0,0,0,.521-.521V5.733A.521.521,0,0,0,62.145,5.212Zm-8.86-.521a3.648,3.648,0,1,1,7.3,0v.521h-7.3Zm8.339,8.86H52.242v-7.3h9.382Z" transform="translate(-51.2)" />
                                    </g>
                                </g>
                                <g id="Group_113" data-name="Group 113" transform="translate(55.37 7.818)">
                                    <g id="Group_112" data-name="Group 112" transform="translate(0)">
                                        <path id="Path_427" data-name="Path 427" d="M190.793,257.042a1.563,1.563,0,1,0-2,1.99v1.138a.521.521,0,1,0,1.042,0v-1.138A1.56,1.56,0,0,0,190.793,257.042Zm-1.474,1.043a.521.521,0,1,1,.521-.521A.521.521,0,0,1,189.319,258.085Z" transform="translate(-187.756 -256)" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        Ця тема поки що закрита для вашої групи.
                    </span>

                    <inline-container mode="to-left">
                        <task v-for="(task, key) in theme.tasks" :key="key" :title="task.title" :id="task.id" v-show="task.is_draft == 1"/>
                    </inline-container>
                    <br><br>
                </div>
            </transition-group>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import API from "@/libs/api"

    import StudentThemeItem from "@/components/Dashboard/Study/Themes/StudentThemeItem.vue"
    import StudentTaskItem from "@/components/Dashboard/Study/Tasks/StudentTaskItem.vue"

    export default {
        components: {
            ...structureComponents,
            'theme': StudentThemeItem,
            'task': StudentTaskItem
        },

        data(){
            return {
                api: null,
                courseAccessData: {}
            }
        },

        mounted(){
            this.api = new API()
            this.api.getSecureData('education/courses/fulldata/1').then(response => {
                this.courseAccessData = response
            })
        }
    }
</script>