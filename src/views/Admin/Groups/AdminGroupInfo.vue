<template>
    <div>
        <dashboard-view-title subtitle="Перегляд інформації та керування групою">
            Керування групами — {{groupData.name}}
        </dashboard-view-title>
        <dashboard-section title="Список учнів" subtitle="Зареєстровані та підтверджені учні">
            
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"

    import API from '@/libs/api'

    export default {
        components: {
            ...structureComponents
        },
        computed: {
            groupId(){
                return this.$route.params.id
            }
        },
        data(){
            return {
                api: null,
                groupData: {},
                students: {
                    all: [],
                    confirmed: [],
                    unconfirmed: []
                }
            }
        },
        methods:{
            loadGroupData(){
                this.api.get(`groups/single/${this.groupId}`).then(response => {
                    this.groupData = response.data
                    this.loadStudents()
                }).catch(error => {
                    console.error(error)
                })
            },
            loadStudents(){
                this.api.getSecureData(`groups/${this.groupId}/students`).then(response => {
                    this.students.all = response

                    this.students.all.map(student => {
                        if(student.confirmed) this.students.confirmed.push(student)
                        else this.students.unconfirmed.push(student)
                    })
                })
            }
        },
        mounted(){
            this.api = new API()

            this.loadGroupData()
        }
    }
</script>