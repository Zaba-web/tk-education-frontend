<template>
    <div>
        <dashboard-view-title subtitle="Зведена інформація про стан справ у системі">
            Домашня сторінка
        </dashboard-view-title>
        <dashboard-section title="Розпочати роботу" :subtitle="`З поверненням, ${name}! Чим бажаєте зайнятись?`">
            <inline-container mode="space-between">
                <action-proposition image="group_control.svg" text="Керування групами"></action-proposition>
                <action-proposition image="study_control.svg" text="Керування матеріалами"></action-proposition>
                <action-proposition image="user_control.svg" text="Керування користувачами"></action-proposition>
            </inline-container>
        </dashboard-section>
        <dashboard-section title="Інформація про учнів" :subtitle="`Всього в системі зареєстровано ${userCount} користувачів`">
            <inline-container mode="to-left">
                <diagram></diagram>
                <default-block block-width="27%">
                    <h3 class="bright-text-color">
                        Групи
                    </h3>
                    <p class="sm-top-padding default-text-color">
                        Перейдіть до керування групами для того, щоб підтвердити або відхилити запит учня.
                    </p>
                </default-block>
                <default-block block-width="27%">
                    <h3 class="bright-text-color">
                        Користувачі
                    </h3>
                    <p class="sm-top-padding default-text-color">
                        Для керування рівнями доступу перейдіть в пункт меню "Користувачі".
                    </p>
                </default-block>
            </inline-container>
        </dashboard-section>
        <dashboard-section title="Зареєстровані групи" subtitle="Перелік зареєстрованих груп">
            <group-list></group-list>
        </dashboard-section>
        <dashboard-section title="Останні зареєстровані користувачі" subtitle="Користувачі, які нещодавно зареєструвались">
            <dashboard-table 
            :table-header="['Дата реєстрації', 'Логін', 'Ім\'я', 'Статус']"
            :table-content="this.lastUsers"
            ></dashboard-table>
        </dashboard-section>
        <dashboard-section title="Розклад" subtitle="Дні, у які проходить виробниче навчання">
            <schedule></schedule>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import DashboardActionProposition from "@/components/Dashboard/DashboardActionProposition.vue"
    import DashboardAdminOverviewDiagram from "@/components/Dashboard/DashboardAdminOverviewDiagram.vue"
    import GroupList from "@/components/Dashboard/Groups/GroupList.vue"
    import ScheduleControl from '@/components/Dashboard/Schedule/ScheduleControl.vue'

    import API from "@/libs/api"

    export default {
        components: {
            ...structureComponents,
            "action-proposition": DashboardActionProposition,
            "diagram": DashboardAdminOverviewDiagram,
            "group-list": GroupList,
            'schedule': ScheduleControl
        },
        data(){
            return {
                api: {},
                name: '',
                userCount: 0,
                lastUsers: [
                    
                ]
            }
        },
        mounted(){
            const api = new API()

            api.getSecureData('user/data/count/all').then(res => this.userCount = res)
            api.getSecureData('user/data/list/5').then(res => {
                for(let element in res) {
                    let status = res[element].confirmed == 1 ? `<span class='green-color'>Підтверджено</span>` : `<span class='yellow-color'>Очікує</span>`
                    this.lastUsers.unshift([res[element].created_at, res[element].login, res[element].name, status])
                }
            })
            
            this.name = localStorage.getItem('username')
        }
    }
</script>