<template>
    <div>
        <dashboard-view-title subtitle="Перегляд інформації та керування групою">
            Керування групами — {{groupData.name}}
        </dashboard-view-title>
        <dashboard-section title="Список учнів" subtitle="Зареєстровані та підтверджені учні">
            <dashboard-table :table-header="['Дата реєстрації', '№ у списку', 'Ім\'я', 'Підгрупа', 'Операції']">
                <tr v-for="(student, studentIndex) of students.confirmed" :key="studentIndex" class="p-like sm-top-padding default-text-color less-size">
                    <td >
                        {{student.created_at}}
                    </td>
                    <td>
                        {{student.student_number}}
                    </td>
                    <td>
                        <div :class="`user-status user-status-${student.online}`">
                            {{student.name}}
                        </div>
                    </td>
                    <td>
                        {{student.subgroup}}
                    </td>
                    <td style="width: 30px">
                        <delete :path="`user/delete/${student.id}`" @deletedSuccessful="loadStudents"></delete>
                    </td>
                </tr>
            </dashboard-table>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import {operationsComponents} from "@/libs/dashboardComponentsLoader"

    import API from '@/libs/api'

    export default {
        components: {
            ...structureComponents,
            ...operationsComponents
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
                this.students.all = [] 
                this.students.confirmed = []
                this.students.unconfirmed = []

                this.api.getSecureData(`groups/${this.groupId}/students`).then(response => {
                    this.students.all = response

                    this.students.all.map(student => {
                        if(student.confirmed) this.students.confirmed.push(student)
                        else this.students.unconfirmed.push(student)
                    })

                    this.students.confirmed.sort((a, b) => a.student_number > b.student_number)
                })
            }
        },

        mounted(){
            this.api = new API()
            this.loadGroupData()
        }
    }
</script>