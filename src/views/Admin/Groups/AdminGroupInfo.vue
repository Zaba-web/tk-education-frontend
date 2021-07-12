<template>
    <div>
        <dashboard-view-title subtitle="Перегляд інформації та керування групою">
            Керування групами — {{groupData.name}} | <reloader selector-class="group-info-reload" mode="small" @click="loadGroupData"></reloader>
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
                    <td class="tablecell-operation-containr">
                        <delete :path="`user/delete/${student.id}`" @deletedSuccessful="loadStudents"></delete>
                        <operation-plain>
                            <router-link :to="`/admin/user/tasks/${student.id}`">
                                <svg id="Group_552" data-name="Group 552" xmlns="http://www.w3.org/2000/svg" width="20.298" height="15.507" viewBox="0 0 20.298 15.507" class="default-icon-fill"> 
                                    <g id="Group_551" data-name="Group 551" transform="translate(0 0)">
                                        <path id="Path_1729" data-name="Path 1729" d="M35.557,35.049h0a.716.716,0,0,0-.509.211.723.723,0,0,0-.214.516V46.667a.729.729,0,0,0,.727.726,8.985,8.985,0,0,1,6.477,2.4V38.4a.7.7,0,0,0-.1-.368C40.334,35.445,37.252,35.053,35.557,35.049Z" transform="translate(-32.452 -35.049)" />
                                        <path id="Path_1730" data-name="Path 1730" d="M163.955,46.666V35.774a.723.723,0,0,0-.214-.516.716.716,0,0,0-.509-.211h0c-1.694,0-4.776.4-6.38,2.979a.7.7,0,0,0-.1.368v11.4a8.985,8.985,0,0,1,6.477-2.4A.729.729,0,0,0,163.955,46.666Z" transform="translate(-146.038 -35.048)"/>
                                        <path id="Path_1731" data-name="Path 1731" d="M179.334,71.8h-.527v9.106a1.858,1.858,0,0,1-1.852,1.854,8.056,8.056,0,0,0-5.473,1.869,17.486,17.486,0,0,1,7.689.148.726.726,0,0,0,.889-.708V72.527A.727.727,0,0,0,179.334,71.8Z" transform="translate(-159.762 -69.289)" />
                                        <path id="Path_1732" data-name="Path 1732" d="M1.253,80.907V71.8H.726A.727.727,0,0,0,0,72.527V84.07a.726.726,0,0,0,.889.708,17.484,17.484,0,0,1,7.689-.148,8.056,8.056,0,0,0-5.473-1.869A1.858,1.858,0,0,1,1.253,80.907Z" transform="translate(0 -69.289)"/>
                                    </g>
                                </svg>
                            </router-link>
                        </operation-plain>
                    </td>
                </tr>
            </dashboard-table>
        </dashboard-section>
        <dashboard-section title="Список учнів" subtitle="Очікують підтвердження">
            <dashboard-table :table-header="['Дата реєстрації', 'Ім\'я', 'Операції']">
                <tr v-for="(student, studentIndex) of students.unconfirmed" :key="studentIndex" class="p-like sm-top-padding default-text-color less-size">
                    <td >
                        {{student.created_at}}
                    </td>
                    <td>
                        {{student.name}}
                    </td>
                    <td class="tablecell-operation-containr">
                        <operation-plain @click="openUserAcceptForm(student.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14.016" height="14.016" viewBox="0 0 14.016 14.016" class="default-icon-fill">
                                <g id="checked_1_" data-name="checked(1)" transform="translate(0.441 0.435)">
                                    <path id="Path_1738" data-name="Path 1738" d="M62.5,72.074l-4.37,4.37L56.8,75.114a.47.47,0,1,0-.664.664L57.8,77.441a.47.47,0,0,0,.664,0l4.7-4.7a.47.47,0,1,0-.664-.664Z" transform="translate(-53.077 -68.183)"/>
                                    <path id="Path_1739" data-name="Path 1739" d="M6.574-.435A7.355,7.355,0,0,0-.441,6.574a7.354,7.354,0,0,0,7.016,7.007,7.339,7.339,0,0,0,7-7.007A7.341,7.341,0,0,0,6.574-.435Zm0,12.31a5.1,5.1,0,0,1-5.311-5.3A5.112,5.112,0,0,1,6.574,1.252a5.115,5.115,0,0,1,5.314,5.322A5.1,5.1,0,0,1,6.574,11.875Z" />
                                </g>
                            </svg>
                        </operation-plain>
                        <delete :path="`user/delete/${student.id}`" @deletedSuccessful="loadStudents"></delete>
                    </td>
                </tr>
            </dashboard-table>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents, listInterationComponents, operationsComponents} from "@/libs/dashboardComponentsLoader"
    import OperationPlain from "@/components/Dashboard/Operations/OperationPlain.vue"

    import API from '@/libs/api'

    export default {
        components: {
            ...structureComponents,
            ...operationsComponents,
            ...listInterationComponents,
            'operation-plain': OperationPlain
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
            },

            openUserAcceptForm(id){

                this.$store.commit('RESET_DASHBOARD_INPUT_SIDEBAR')
                this.$store.commit('SHOW_DASHBOARD_INPUT_SIDEBAR', {'component': 'userAccept', 'data': {
                    title: "Підтвердити учня",
                    desciprion: "Введіть номер учня по списку та підгрупу, до якої він належить. Після цього користувача буде підтверджено.",
                    meta: id
                }})
            }
        },

        mounted(){
            this.api = new API()
            this.loadGroupData()
        }
    }
</script>