<template>
    <div class="outer-container">
        <default-block block-width = "321px">
            <h3 class="p-like sm-top-padding bright-text-color less-size">{{group.name}}</h3>
            <span class="p-like sm-top-padding default-text-color less-size">Майстер в/н: {{group.master_vn}}</span>
            <br>
            <span class="p-like sm-top-padding default-text-color less-size">Дата створення: {{group.created_at}}</span>
            <h3 class="p-like sm-top-padding default-text-color less-size">Учні</h3>
            <span class="p-like sm-top-padding default-text-color less-size">Підтверджено учнів: {{group.confirmed_students}}</span>
            <br>
            <span class="p-like sm-top-padding default-text-color less-size">Очікують підтвердження: {{group.unconfirmed_students}}</span>
            <operations-container>
                <operation title="Керувати групою">
                    <router-link :to="`/admin/groups/${group.id}`">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.136" height="16.422" viewBox="0 0 17.136 16.422" class="default-icon-fill">
                            <g id="settings_5_" data-name="settings(5)" transform="translate(0 -10.667)">
                                <g id="Group_539" data-name="Group 539" transform="translate(0 22.091)">
                                <g id="Group_538" data-name="Group 538">
                                    <path id="Path_1720" data-name="Path 1720" d="M16.422,353.785h-1.9a2.483,2.483,0,0,0-4.765,0H.714a.714.714,0,0,0,0,1.428H9.755a2.483,2.483,0,0,0,4.765,0h1.9a.714.714,0,0,0,0-1.428Zm-4.284,1.785a1.071,1.071,0,1,1,1.071-1.071A1.072,1.072,0,0,1,12.138,355.57Z" transform="translate(0 -352)" />
                                </g>
                                </g>
                                <g id="Group_541" data-name="Group 541" transform="translate(0 10.667)">
                                <g id="Group_540" data-name="Group 540">
                                    <path id="Path_1721" data-name="Path 1721" d="M16.422,12.452h-1.9a2.483,2.483,0,0,0-4.765,0H.714a.714.714,0,1,0,0,1.428H9.755a2.483,2.483,0,0,0,4.765,0h1.9a.714.714,0,0,0,0-1.428Zm-4.284,1.785a1.071,1.071,0,1,1,1.071-1.071A1.072,1.072,0,0,1,12.138,14.237Z" transform="translate(0 -10.667)" />
                                </g>
                                </g>
                                <g id="Group_543" data-name="Group 543" transform="translate(0 16.379)">
                                <g id="Group_542" data-name="Group 542">
                                    <path id="Path_1722" data-name="Path 1722" d="M16.422,183.119H7.381a2.483,2.483,0,0,0-4.765,0H.714a.714.714,0,0,0,0,1.428h1.9a2.483,2.483,0,0,0,4.765,0h9.041a.714.714,0,0,0,0-1.428ZM5,184.9a1.071,1.071,0,1,1,1.071-1.071A1.072,1.072,0,0,1,5,184.9Z" transform="translate(0 -181.334)" />
                                </g>
                                </g>
                            </g>
                        </svg>
                    </router-link>
                </operation>
                <edit 
                    component-to-open="groupEdit" 
                    :additional-data="{
                        title: 'Редагувати групу',
                        description: 'Для редагування обраної групи скористайтесь відповідною формою знизу.',
                        meta: group.id
                    }"
                ></edit>
                <delete :path="`groups/delete/${group.id}`" @deletedSuccessful="deletedSuccessful"></delete>
            </operations-container>
        </default-block>

        <div class="wait-for-approve bg-fill-secondary-accent" v-if="group.unconfirmed_students > 0" title = "У цю групу є нові заявки">
            <span class="p-like sm-top-padding bright-text-color less-size">
                {{group.unconfirmed_students}}
            </span>
        </div>
    </div>
</template>

<script>
    import DashboardDefaultBlock from "@/components/Dashboard/DashboardDefaultBlock.vue"
    import OperationsContainer from "@/components/Dashboard/Operations/OperationsContainer.vue"

    import {operationsComponents} from "@/libs/dashboardComponentsLoader"

    export default {
        props: {
            group: Object
        },
        components: {
            'default-block': DashboardDefaultBlock,
            'operations-container': OperationsContainer,
            ...operationsComponents
        },
        methods: {
            deletedSuccessful(){
                this.$emit("deletedSuccessful", this.group.id)
            }
        }
    }
</script>

<style lang="sass" scoped>
.outer-container
    position: relative
.wait-for-approve
    width: 24px
    height: 24px
    display: flex
    border-radius: 100px
    position: absolute
    left: -12px
    top: -12px
    & > span
        margin: auto auto
        padding: 0
        line-height: 0
</style>