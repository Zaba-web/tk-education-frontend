<template>
    <div class="theme-item-container">
        <default-block>
            <h3 class="bright-text-color">
                {{theme.title}} <span class="default-text-color p-like sm-top-padding less-size">[#{{theme.id}}]</span>
            </h3>
            <span class="default-text-color p-like sm-top-padding less-size">
                Кількість завдань: {{theme.taskCount}}
            </span>
            <operation-container>
                <operation title="Керувати темами">
                    <router-link :to="`/admin/theme/${theme.id}`">
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
                <edit component-to-open="themeEdit" :additional-data="{
                    title: `Редагувати тему ${theme.title}`,
                    description: 'Використайте форму знизу для того, щоб змінити інформацію про дану тему.',
                    meta: {
                        id: theme.id,
                        title: theme.title
                    }
                }"></edit>
                <delete :path='`education/theme/delete/${theme.id}`' @deletedSuccessful="deleted"></delete>
            </operation-container>
        </default-block>
    </div>
</template>

<script>
    import DashboardDefaultBlock from '@/components/Dashboard/DashboardDefaultBlock.vue'
    import {operationsComponents} from '@/libs/dashboardComponentsLoader.js'
    import OperationsContainer from '@/components/Dashboard/Operations/OperationsContainer.vue'

    export default {
        components: {
            ...operationsComponents,
            'default-block': DashboardDefaultBlock,
            'operation-container': OperationsContainer
        },
        props: {
            theme: Object
        },
        methods: {
            deleted(){
                this.$emit('deletedSuccessful')
            }
        }
    }
</script>

<style lang="sass" scoped>
.theme-item-container:not(:first-of-type)
    margin-top: 25px
</style>