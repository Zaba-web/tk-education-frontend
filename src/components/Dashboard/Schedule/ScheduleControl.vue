<template>
    <div>
        <inline-container>
            <default-block block-width='30%'>
                <h3 class="bright-text-color">Група</h3>
                <select class="full-size" v-model="selectedGroup" @change="getScheduleData">
                    <option v-for="(group, key) in groupList" :key="key" :value="group.id">
                        {{group.name}}
                    </option>
                </select>
            </default-block>
            <default-block block-width='65%'>
                <div class="schedule-wrapper">
                    <inline-container>
                        <day v-for="(item, key) in dayData" :key="key" :day-name="item.name" @changedDayStatus="changeDayStatus" :start-active="item.active" :day-id="key"></day>
                    </inline-container>
                </div>
            </default-block>
        </inline-container>
    </div>
</template>

<style lang="sass">
.schedule-wrapper
    width: 80%
    margin: auto
</style>

<script>
    import DashboardDefaultBlock from '@/components/Dashboard/DashboardDefaultBlock.vue'
    import InlineContainer from '@/components/Dashboard/InlineContainer.vue'
    import ScheduleDay from '@/components/Dashboard/Schedule/ScheduleDay.vue'

    import API from '@/libs/api'

    export default {
        components: {
            'default-block': DashboardDefaultBlock,
            'inline-container': InlineContainer,
            'day': ScheduleDay
        },
        props: {
            mode: String,
            groupId: Number
        },
        data(){
            return {
                groupList: {},
                selectedGroup: 0,
                api: null,
                dayData: [
                    {
                        name: "ПН",
                        active: false
                    },
                    {
                        name: "ВТ",
                        active: false
                    },
                    {
                        name: "СР",
                        active: false
                    },
                    {
                        name: "ЧТ",
                        active: false
                    },
                    {
                        name: "ПТ",
                        active: false
                    }
                ]
            }
        },
        methods:{
            changeDayStatus(data){
                if(this.mode == 'edit') {
                    this.dayData[data[1]].active = !this.dayData[data[1]].active
                    this.saveSchedule()
                }
            },

            resetDayData(){
                for(let day in this.dayData) 
                    this.dayData[day].active = false
                
            },

            getScheduleData(){
                this.resetDayData()

                for(let group in this.groupList) {
                    if(this.groupList[group].id == this.selectedGroup && this.groupList[group].day_vn != null) {
                        let days = this.groupList[group].day_vn.split(';')
                        days.map(value => this.dayData[parseInt(value)].active = true)
                    }
                }
            },

            getScheduleResult(){
                let result = []
                
                for(let day in this.dayData)
                    if (this.dayData[day].active) result.push(day)
                
                return result.join(';')
            },

            saveSchedule(){
                let scheduleDays = this.getScheduleResult()

                this.api.put(`groups/setup/${this.groupId}`, {day: scheduleDays}).catch(error=>{
                    this.$store.commit('ADD_NEW_MESSAGE', {
                        title: "Серверна помилка",
                        msg: "Відбулась критична помилка на стороні серверу. Перегляньте консоль для детальної інформації",
                        type: "error"
                    })

                    console.error(error) 
                })
            }
        },
        mounted(){
            this.api = new API()

            this.$nextTick(()=>{     
                this.api.get('groups').then(response => {
                    if(response.data) {
                        this.groupList = response.data

                        if(this.groupId) 
                            this.groupList = this.groupList.filter(item => item.id == this.groupId)

                        this.selectedGroup = this.groupList[0].id
                        this.getScheduleData()
                    }
                })
            })
        }
    }
</script>