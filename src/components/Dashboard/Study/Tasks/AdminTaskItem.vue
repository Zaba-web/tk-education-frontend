<template>
    <default-block block-width="350px">
        <div class="task-item-inner-container">
            <h3 class="bright-text-color">
                {{task.title}}
                <span class="p-like sm-top-padding default-text-color less-size">[#{{task.id}}]</span>
            </h3>
        </div>

        <operation-container>
            <operation title="Переглянути">
                <router-link :to="`/admin/task/view/${task.id}`">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 461.312 461.312" style="enable-background:new 0 0 461.312 461.312;" xml:space="preserve" class="default-icon-fill" width="18">
                        <g>
                            <g>
                                <path d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"/>
                            </g>
                        </g>
                    </svg>
                </router-link>
            </operation>

            <operation title="Редагувати">
                <router-link :to="`/admin/task/edit/${task.id}`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.446" height="16.446" viewBox="0 0 16.446 16.446" class="default-icon-fill">
                        <g id="edit" transform="translate(0 -0.501)">
                            <path id="Path_1723" data-name="Path 1723" d="M13.02,91.3a.685.685,0,0,0-.685.685v5.482a.686.686,0,0,1-.685.685H2.056a.686.686,0,0,1-.685-.685V87.872a.686.686,0,0,1,.685-.685H7.538a.685.685,0,0,0,0-1.371H2.056A2.058,2.058,0,0,0,0,87.872v9.594a2.058,2.058,0,0,0,2.056,2.056H11.65a2.058,2.058,0,0,0,2.056-2.056V91.984a.685.685,0,0,0-.685-.685Zm0,0" transform="translate(0 -82.575)" />
                            <path id="Path_1724" data-name="Path 1724" d="M182.393,73.684a.347.347,0,0,0-.094.175l-.484,2.423a.342.342,0,0,0,.337.41.326.326,0,0,0,.067-.007l2.422-.484a.341.341,0,0,0,.175-.094l5.422-5.422-2.422-2.422Zm0,0" transform="translate(-175.968 -65.584)" />
                            <path id="Path_1725" data-name="Path 1725" d="M394.816,1a1.714,1.714,0,0,0-2.422,0l-.948.948,2.422,2.422.948-.948a1.713,1.713,0,0,0,0-2.422Zm0,0" transform="translate(-378.871)"/>
                        </g>
                    </svg>
                </router-link>
            </operation>

            <delete :path='`education/task/delete/${task.id}`' @deletedSuccessful="deleted"></delete>
        </operation-container>
    </default-block>
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
            task: Object
        },

        methods: {
            deleted(){
                this.$emit('deletedSuccessful')
            }
        }
    }
</script>

<style lang="sass" scoped>
.task-item-inner-container
    padding-right: 15px
    padding-bottom: 15px
</style>