<template>
    <div>
        <dashboard-view-title subtitle="Перелік завдань теми">
            Керування темою {{themeData.title}}
        </dashboard-view-title>
        <dashboard-section :title="`Завдання теми ${themeData.title}`" subtitle="Перелік завдань обраної теми">
            <tasks-list></tasks-list>
        </dashboard-section>
        <dashboard-section title="Доступ" subtitle="Групи, у яких є доступ">
            <dashboard-table :table-header="['Дата надання доступу', 'Назва групи (не оновлюється)', 'ID групи']">
                <tr v-for="(groupAccess, index) in themeAccess" :key="index">
                    <td class="p-like less-size default-text-color">
                        {{groupAccess.created_at}}
                    </td>
                    <td class="p-like less-size default-text-color">
                        {{groupAccess.group_name}}
                    </td>
                     <td class="p-like less-size default-text-color">
                        {{groupAccess.group_id}}
                    </td>
                </tr>
            </dashboard-table>
        </dashboard-section>
    </div>
</template>

<script>
    import API from "@/libs/api"
    import {structureComponents} from "@/libs/dashboardComponentsLoader"

    import AdminTasksList from '@/components/Dashboard/Study/Tasks/AdminTasksList.vue'

    export default {
        components: {
            ...structureComponents,
            'tasks-list': AdminTasksList
        }, 

        data(){
            return {
                api: null,
                themeData: {},
                themeAccess: []
            }
        },

        mounted(){
            this.api = new API()

            this.api.getSecureData(`education/theme/${this.$route.params.id}`).then(response => { 
                this.themeData = response
                
                return this.api.getSecureData(`education/theme/access/${this.themeData.id}`) 
            }).then(response => this.themeAccess = response)
        }
    }
</script>