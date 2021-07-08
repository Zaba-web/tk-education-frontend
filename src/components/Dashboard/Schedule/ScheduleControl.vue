<template>
    <div>
        <inline-container>
            <default-block block-width='30%'>
                <h3 class="bright-text-color">Група</h3>
                <select class="full-size">
                    <option v-for="(group, key) in groupList" :key="key" :value="group.id">
                        {{group.name}}
                    </option>
                </select>
            </default-block>
            <default-block block-width='65%'>
                <div class="schedule-wrapper">
                    <inline-container>
                        <day v-for="(item, key) in dayData" :key="key" :day-name="item.name" @changedDayStatus="changeDayStatus"></day>
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
        data(){
            return {
                groupList: {},
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
                console.log(data)
            }
        },
        mounted(){
            const api = new API()
            api.get('groups').then(response => {
                if(response.data)
                    this.groupList = response.data
            })
        }
    }
</script>