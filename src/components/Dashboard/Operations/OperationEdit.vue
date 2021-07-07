<template>
    <div>
        <operation title="Редагувати" @clicked="openInputSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.446" height="16.446" viewBox="0 0 16.446 16.446" class="default-icon-fill">
                <g id="edit" transform="translate(0 -0.501)">
                    <path id="Path_1723" data-name="Path 1723" d="M13.02,91.3a.685.685,0,0,0-.685.685v5.482a.686.686,0,0,1-.685.685H2.056a.686.686,0,0,1-.685-.685V87.872a.686.686,0,0,1,.685-.685H7.538a.685.685,0,0,0,0-1.371H2.056A2.058,2.058,0,0,0,0,87.872v9.594a2.058,2.058,0,0,0,2.056,2.056H11.65a2.058,2.058,0,0,0,2.056-2.056V91.984a.685.685,0,0,0-.685-.685Zm0,0" transform="translate(0 -82.575)" />
                    <path id="Path_1724" data-name="Path 1724" d="M182.393,73.684a.347.347,0,0,0-.094.175l-.484,2.423a.342.342,0,0,0,.337.41.326.326,0,0,0,.067-.007l2.422-.484a.341.341,0,0,0,.175-.094l5.422-5.422-2.422-2.422Zm0,0" transform="translate(-175.968 -65.584)" />
                    <path id="Path_1725" data-name="Path 1725" d="M394.816,1a1.714,1.714,0,0,0-2.422,0l-.948.948,2.422,2.422.948-.948a1.713,1.713,0,0,0,0-2.422Zm0,0" transform="translate(-378.871)"/>
                </g>
            </svg>
        </operation>
    </div>
</template>

<script>
    import OperationPlain from './OperationPlain.vue'

    export default {
        components: {
            'operation': OperationPlain
        },
        props: {
            'componentToOpen': String,
            'additionalData': String
        },
        methods: {
            openInputSidebar(){
                this.$store.commit('RESET_DASHBOARD_INPUT_SIDEBAR')
                this.$store.commit('SHOW_DASHBOARD_INPUT_SIDEBAR', {'component': this.componentToOpen, 'data': this.additionalData})
            }
        }
    }
</script>