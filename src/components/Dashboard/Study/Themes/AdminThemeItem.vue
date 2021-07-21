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
                <operation title="Надати доступ" @click="openAccessWindow">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002;" width="18" xml:space="preserve" class="default-icon-fill">
                        <g>
                            <circle cx="364" cy="140.062" r="32"/>
                        </g>
                        <g>
                            <path d="M506.478,165.937c-10.68-27.194-30.264-66.431-62.915-98.927c-32.535-32.384-71.356-51.408-98.194-61.666
                                c-29.464-11.261-62.945-4.163-85.295,18.082l-78.538,78.17c-23.281,23.171-29.991,58.825-16.698,88.72
                                c4.122,9.272,8.605,18.341,13.395,27.103L5.858,389.793C2.107,393.544,0,398.631,0,403.936v88c0,11.046,8.954,20,20,20h88
                                c11.046,0,20-8.954,20-20v-36l36-0.001c11.046,0,20-8.954,20-20v-35.999h36c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20h-56
                                c-11.046,0-20,8.954-20,20v35.999l-36,0.001c-11.046,0-20,8.954-20,20v36H40V412.22l177.355-177.354
                                c6.516-6.516,7.737-16.639,2.958-24.517c-6.931-11.424-13.298-23.632-18.923-36.285c-6.599-14.841-3.237-32.57,8.366-44.119
                                l78.537-78.169c11.213-11.159,28.011-14.718,42.798-9.068c23.222,8.876,56.69,25.214,84.256,52.652
                                c27.735,27.604,44.62,61.567,53.9,85.197c5.791,14.748,2.272,31.503-8.965,42.687l-79.486,79.114
                                c-11.575,11.519-28.851,14.887-44.016,8.58c-12.507-5.202-24.62-11.382-36-18.367c-9.413-5.778-21.729-2.83-27.507,6.584
                                c-5.778,9.414-2.831,21.73,6.583,27.508c13.152,8.072,27.136,15.207,41.562,21.207c30.142,12.539,64.525,5.8,87.595-17.161
                                l79.486-79.113C511.044,229.157,518.101,195.534,506.478,165.937z"/>
                        </g>
                    </svg>
                </operation>
                <operation title="Керувати темою">
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
            },
            openAccessWindow(){
                this.$store.commit('RESET_DASHBOARD_INPUT_SIDEBAR')
                this.$store.commit('SHOW_DASHBOARD_INPUT_SIDEBAR', {'component': 'grandAccesToTheme', 'data': {
                    title: `Надати доступ до ${this.theme.title}`,
                    description: 'Оберіть групу, якій потрібно надати доступ до обраної теми.',
                    meta: this.theme
                }})
            }
        }
    }
</script>

<style lang="sass" scoped>
.theme-item-container:not(:first-of-type)
    margin-top: 25px
</style>