<template>
    <div>
        <search-input label="Пошук" placeholder="Введіть назву завдання" @search="search"></search-input>
        <br>
        <inline-container mode="to-left">
            <transition-group
                enter-active-class="animate__animated animate__fadeInLeft"
                leave-active-class="animate__animated animate__fadeOutLeft"
            >
                <task-item v-for="(task, index) in tasksListOutput" :key="index" :task="task" @deletedSuccessful="loadAllTasks"></task-item>
            </transition-group>

            <default-block block-width="320px">
                <reloader @reload="loadAllTasks" selector-class="tasks-list-reload"></reloader>
            </default-block>
            <default-block block-width="320px">
                <router-link :to="`/admin/task/create/${this.$route.params.id}`">
                    <creater :decorative="true"></creater>
                </router-link>
            </default-block>
        </inline-container>
    </div>
</template>

<script>
    import API from "@/libs/api"

    import {listInterationComponents} from "@/libs/dashboardComponentsLoader"

    import InlineContainer from "@/components/Dashboard/InlineContainer.vue"
    import DashboardDefaultBlock from "@/components/Dashboard/DashboardDefaultBlock.vue"
    import SearchInput from "@/components/Dashboard/SearchInput.vue"

    import AdminTaskItem from "@/components/Dashboard/Study/Tasks/AdminTaskItem.vue"

    export default {
        components: {
            ...listInterationComponents,
            'inline-container': InlineContainer,
            'default-block': DashboardDefaultBlock,
            'search-input': SearchInput,
            'task-item': AdminTaskItem
        },

        data(){
            return {
                tasksListOriginal: [],
                tasksListOutput: []
            }
        }, 

        methods: {
            search(query){
                this.tasksListOutput = this.tasksListOriginal.filter(task => task.title.includes(query))
            },

            loadAllTasks(){
                const api = new API()
                api.getSecureData(`education/tasks/list/${this.$route.params.id}`).then(response => {
                    this.tasksListOriginal = response
                    this.tasksListOutput = this.tasksListOriginal
                })
            }
        },

       mounted(){
           this.loadAllTasks()
       }
    }
</script>