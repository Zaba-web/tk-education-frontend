<template>
    <div>
        <dashboard-view-title subtitle="Відображає поточний стан справ">
            Домашня сторінка
        </dashboard-view-title>
        <dashboard-section title="Розпочати роботу" :subtitle="`З поверненням, ${userName}! Чим бажаєте зайнятись?`">
            <inline-container>
                <welcome />
                <default-block block-width="33%">
                    <h3 class="bright-text-color">Розклад</h3>
                    <div class="day-container">
                        <schedule-day day-name="ПН" :start-active="schedule.indexOf('0') != -1" />
                        <schedule-day day-name="ВТ" :start-active="schedule.indexOf('1') != -1" />
                        <schedule-day day-name="СР" :start-active="schedule.indexOf('2') != -1" />
                        <schedule-day day-name="ЧТ" :start-active="schedule.indexOf('3') != -1" />
                        <schedule-day day-name="ПТ" :start-active="schedule.indexOf('4') != -1" />
                        <schedule-day day-name="СБ" :start-active="false" />
                    </div>
                </default-block>
            </inline-container>
        </dashboard-section>
        <dashboard-section title="Загальна інформація" subtitle="Інформація про ваш профіль та навчальний прогрес.">
            <inline-container>
                <default-block block-width="30%">
                    <h3 class="bright-text-color">Ваш профіль:</h3>
                    <br>
                    <span class="p-like bright-text-color less-size">
                        Логін: 
                        <span class="default-text-color">
                            {{userData.login}}
                        </span>
                    </span>
                    <br><br>
                    <span class="p-like bright-text-color less-size">
                        Email: 
                        <span class="default-text-color">
                            {{userData.email}}
                        </span>
                    </span>
                    <br><br>
                    <span class="p-like bright-text-color less-size">
                        Ім'я: 
                        <span class="default-text-color">
                            {{userData.name}}
                        </span>
                    </span>
                    <br><br>
                    <span class="p-like bright-text-color less-size">
                        Група: 
                        <span class="default-text-color">
                            {{groupData.name}}
                        </span>
                    </span>
                </default-block>
                <default-block block-width="67%">
                    <h3 class="bright-text-color">Ваш прогрес:</h3>
                    <div class="progress-container">
                        <div class="progress-item" v-for="(course, index) in progress" :key="index">
                            <div class="progress-bar-container bg-fill-default">
                                <div class="progress-bar bg-fill-secondary-accent" :style="{height: `${course.progress}%`}"></div>
                            </div>
                            <span class="p-like default-text-color less-size sm-top-padding">{{course.name}}</span>
                        </div>
                        <div class="bottom-line bg-fill-default"></div>
                    </div>
                </default-block>
            </inline-container>
        </dashboard-section>
        <dashboard-section title="Остання активність" subtitle="Останні виконані завдання" style="border: 0">
            <dashboard-table :table-header="['Завдання', 'Перевірено', 'Дата здачі роботи', 'Оцінка']">
                <tr v-for="(task, index) in activity" :key="index">
                    <td class='p-like default-text-color less-size'>{{task.task}}</td>
                    <td class='p-like default-text-color less-size'>
                        <span :class="{
                            'green-color': task.checked == 1,
                            'yellow-color': task.checked == 0
                        }">
                            {{task.checked == 0 ? 'Ні' : 'Так'}}
                        </span>
                    </td>
                    <td class='p-like default-text-color less-size'>{{task.date}}</td>
                    <td class='p-like default-text-color less-size'>{{task.mark != null ? task.mark : '-'}}</td>
                </tr>
            </dashboard-table>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import API from "@/libs/api"

    import StudentWelcome from "@/components/Dashboard/StudentWelcome.vue"
    import ScheduleDay from "@/components/Dashboard/Schedule/ScheduleDay.vue"

    export default {
        components: {
            ...structureComponents,
            'welcome': StudentWelcome,
            'schedule-day': ScheduleDay
        },

        data() {
            return {
                userData: {},
                groupData: {},
                schedule: [],
                activity: [],
                progress: {},
                api: null
            }
        },

        computed: {
            userName(){
                return localStorage.getItem('username')
            }
        },

        created() {
            this.api = new API()

            this.api.getSecureData('user/userdata').then(response => {
                this.userData = response
                return this.api.getSecureData(`user/group`)
            }).then(response => { 
                this.groupData = response
                this.schedule = this.groupData.day_vn.split(';')

                return this.api.getSecureData(`study/activity/10`)
            }).then(response => {
                for(let item in response.works) 
                    this.activity.unshift(response.works[item])

                return this.api.getSecureData(`education/courses/progress`)
            }).then(response => {
                this.progress = response
                console.log(response)
            })
        }
    }
</script>

<style lang="sass" scoped>
.welcome-container
    @media (max-width: $tablet-medium)
        display: none

.day-container
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 40px
    padding-top: 15px

.progress-container
    display: flex
    height: 150px
    justify-content: center
    margin-top: 20px
    gap: 20px
    position: relative

.bottom-line
    width: 100%
    height: 2px
    position: absolute
    bottom: 0
    left: 0

.progress-item
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    & span
        height: 1px

.progress-bar-container
    width: 29px
    height: 100%
    border-radius: 6px 6px 0 0
    position: relative

    & .progress-bar
        border-radius: 6px 6px 0 0
        position: absolute
        width: 100%
        left: 0
        bottom: 0

</style>