<template>
    <div>
        <dashboard-view-title subtitle="Відображає поточний стан справ">
            Домашня сторінка
        </dashboard-view-title>
        <dashboard-section title="Розпочати роботу" subtitle="З поверненням, Учень! Чим бажаєте зайнятись?">
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
                    <h3 class="bright-text-color">Ваша активність:</h3>
                </default-block>
            </inline-container>
        </dashboard-section>
        <dashboard-section title="Остання активність" subtitle="Останні виконані завдання" style="border: 0">

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

                return this.api.getSecureData(`groups/single/${this.userData.id}`)
            }).then(response => { 
                this.groupData = response 
                this.schedule = this.groupData.day_vn.split(';')
            })
        }
    }
</script>

<style lang="sass" scoped>
.day-container
    display: flex
    flex-wrap: wrap
    justify-content: center
    gap: 40px
    padding-top: 15px
</style>