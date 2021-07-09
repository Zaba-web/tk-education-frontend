<template>
    <div class="list-reload dashboard-lists-action-icon-block"  @click="createAction">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class="default-icon-fill">
            <g>
                <g>
                    <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
                    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
    export default {
        methods: {
            createAction(){
                this.$store.commit('RESET_DASHBOARD_INPUT_SIDEBAR')
                this.$store.commit('SHOW_DASHBOARD_INPUT_SIDEBAR', {'component': this.componentToOpen, 'data': this.additionalData})
            }
        },
        props: {
            componentToOpen: String,
            additionalData: Object
        }
    }
</script>
