<template>
    <div>
        <dashboard-view-title subtitle="Перелік зареєстрованих користувачів">Користувачі</dashboard-view-title>
        <dashboard-section title="Список" subtitle="Зареєстрованих користувачів">
            <dashboard-table :table-header="['Дата реєстрації', 'ID', 'Ім\'я', 'Рівень доступу', 'Статус', 'Email', 'Операції']">
                <tr v-for="(user, index) of users" :key="index" class="p-like sm-top-padding default-text-color less-size">
                    <td>
                        {{user.created_at}}
                    </td>
                    <td>
                        {{user.id}}
                    </td>
                    <td>
                        {{user.name}}
                    </td>
                    <td>
                        {{user.access_level == 1 ? 'Учень' : 'Адміністратор'}}
                    </td>
                    <td>
                        {{user.confirmed == 1 ? 'Підтверджено' : 'Очкує підтвердження'}}
                    </td>
                    <td>
                        {{user.email}}
                    </td>
                    <td class="tablecell-operation-container" @click="changeAccessLevel(user.id)">
                        <div v-if="user.access_level == 1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.891 19.064" class="default-icon-fill" width='12'>
                                <g id="up-arrow" transform="translate(-64.546 0)">
                                    <g id="Group_609" data-name="Group 609" transform="translate(64.546 0)">
                                    <g id="Group_608" data-name="Group 608" transform="translate(0 0)">
                                        <path id="Path_1742" data-name="Path 1742" d="M76.3,5.536,70.782.136a.377.377,0,0,0-.581,0l-5.516,5.4a.435.435,0,0,0,.29.755h2.613v7a.668.668,0,0,0,.581.552h4.645c.232,0,.29-.29.29-.552v-7h2.9a.435.435,0,0,0,.29-.755Z" transform="translate(-64.546 0)" />
                                        <path id="Path_1743" data-name="Path 1743" d="M126.991,264.722h-4.645a.435.435,0,0,0,0,.871h4.645a.435.435,0,0,0,0-.871Z" transform="translate(-118.724 -250.013)" />
                                        <path id="Path_1744" data-name="Path 1744" d="M126.991,296.069h-4.645a.435.435,0,1,0,0,.871h4.645a.435.435,0,1,0,0-.871Z" transform="translate(-118.724 -279.618)" />
                                        <path id="Path_1745" data-name="Path 1745" d="M126.991,327.415h-4.645a.435.435,0,1,0,0,.871h4.645a.435.435,0,1,0,0-.871Z" transform="translate(-118.724 -309.222)" />
                                    </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div v-if="user.access_level == 2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" class="default-icon-fill" width='12' viewBox="0 0 11.891 19.064">
                                <g id="up-arrow" transform="translate(76.437 19.064) rotate(180)">
                                    <g id="Group_609" data-name="Group 609" transform="translate(64.546 0)">
                                    <g id="Group_608" data-name="Group 608" transform="translate(0 0)">
                                        <path id="Path_1742" data-name="Path 1742" d="M76.3,5.536,70.782.136a.377.377,0,0,0-.581,0l-5.516,5.4a.435.435,0,0,0,.29.755h2.613v7a.668.668,0,0,0,.581.552h4.645c.232,0,.29-.29.29-.552v-7h2.9a.435.435,0,0,0,.29-.755Z" transform="translate(-64.546 0)" />
                                        <path id="Path_1743" data-name="Path 1743" d="M126.991,264.722h-4.645a.435.435,0,0,0,0,.871h4.645a.435.435,0,0,0,0-.871Z" transform="translate(-118.724 -250.013)" />
                                        <path id="Path_1744" data-name="Path 1744" d="M126.991,296.069h-4.645a.435.435,0,1,0,0,.871h4.645a.435.435,0,1,0,0-.871Z" transform="translate(-118.724 -279.618)" />
                                        <path id="Path_1745" data-name="Path 1745" d="M126.991,327.415h-4.645a.435.435,0,1,0,0,.871h4.645a.435.435,0,1,0,0-.871Z" transform="translate(-118.724 -309.222)" />
                                    </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </td>
                </tr>
            </dashboard-table>
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
        
        data(){
            return {
                api: {},
                users: []
            }
        },

        methods: {
            loadUserList(){
                this.api.getSecureData('user/data/list').then(response => {
                    this.users = response
                })
            },
            changeAccessLevel(id){
                this.api.put(`users/access/${id}`).then((response)=>{
                    this.$store.commit('ADD_NEW_MESSAGE', response.data)
                    this.loadUserList()
                })
            }
        },

        mounted(){
            this.api = new API()
            this.loadUserList()
        } 
    }
</script>

<style lang="sass" scoped>

</style>