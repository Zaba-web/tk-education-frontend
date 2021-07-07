<template>
    <header class="dashboard-header">
        <div class="user-name-container">
            <span class="p-like default-text-color sm-top-padding less-size">
                Привіт, {{userName}}
            </span>
        </div>
        <div class="operation-icons-container">
            <div class="icon-container">
                <svg id="call-split" xmlns="http://www.w3.org/2000/svg" width="16.126" height="16.126" viewBox="0 0 16.126 16.126" class="default-icon-fill">
                    <g id="Group_584" data-name="Group 584">
                        <g id="Group_583" data-name="Group 583">
                        <path id="Path_1740" data-name="Path 1740" d="M6.047,0H0V6.047L2.313,3.734,7.055,8.481v7.645H9.071V7.645L3.734,2.313Z" />
                        <path id="Path_1741" data-name="Path 1741" d="M201.443,0l2.313,2.313-2.9,2.9,1.426,1.426,2.9-2.9,2.313,2.313V0Z" transform="translate(-191.364)" />
                        </g>
                    </g>
                </svg>
            </div>
            <div class="icon-container">
                <svg id="Group_520" data-name="Group 520" xmlns="http://www.w3.org/2000/svg" width="16.576" height="17.023" viewBox="0 0 16.576 17.023" class="default-icon-fill">
                    <path id="Path_1162" data-name="Path 1162" d="M23,10.377,21.435,9.153a6.16,6.16,0,0,0,.037-.643,5.974,5.974,0,0,0-.037-.643L23,6.644a.767.767,0,0,0,.185-.977L21.559,2.851a.754.754,0,0,0-.941-.338l-1.846.741a6.33,6.33,0,0,0-1.109-.643L17.382.653A.753.753,0,0,0,16.63,0H13.368a.751.751,0,0,0-.75.647l-.282,1.965a6.525,6.525,0,0,0-1.106.643L9.378,2.512a.769.769,0,0,0-.934.333L6.815,5.664A.763.763,0,0,0,7,6.646L8.564,7.869a5.612,5.612,0,0,0,0,1.285L7,10.378a.767.767,0,0,0-.184.977L8.44,14.171a.753.753,0,0,0,.941.338l1.846-.741a6.386,6.386,0,0,0,1.108.643l.281,1.958a.753.753,0,0,0,.752.654h3.263a.752.752,0,0,0,.751-.647l.282-1.965a6.556,6.556,0,0,0,1.106-.644l1.851.743a.762.762,0,0,0,.278.052.749.749,0,0,0,.656-.384l1.634-2.83A.766.766,0,0,0,23,10.377Zm-8,.972a2.837,2.837,0,1,1,2.837-2.837A2.84,2.84,0,0,1,15,11.348Z" transform="translate(-6.71)" />
                </svg>
            </div>
            <div class="icon-container">
                <svg id="Group_522" data-name="Group 522" xmlns="http://www.w3.org/2000/svg" width="15.998" height="15.999" viewBox="0 0 15.998 15.999" class="default-icon-fill">
                    <g id="Group_521" data-name="Group 521" transform="translate(0)">
                        <path id="Path_1163" data-name="Path 1163" d="M305.295,151.751a.675.675,0,0,0-.145-.217l-2-2a.667.667,0,1,0-.943.943l.862.862h-3.724a.667.667,0,1,0,0,1.333h3.724l-.862.862a.667.667,0,1,0,.943.943l2-2a.669.669,0,0,0,.145-.727Z" transform="translate(-289.347 -144.672)" />
                        <path id="Path_1164" data-name="Path 1164" d="M11.347,9.333A.666.666,0,0,0,10.68,10v3.333H8.013V2.666a.667.667,0,0,0-.475-.639L5.223,1.333H10.68V4.666a.667.667,0,1,0,1.333,0v-4A.666.666,0,0,0,11.347,0H.681A.594.594,0,0,0,.612.013a.658.658,0,0,0-.283.1C.315.121.3.121.283.132S.275.143.27.147A.66.66,0,0,0,.093.358.544.544,0,0,0,.074.414.632.632,0,0,0,.021.57a.415.415,0,0,0,0,.058C.023.641.014.653.014.667V14a.666.666,0,0,0,.536.653l6.666,1.333A.62.62,0,0,0,7.347,16a.667.667,0,0,0,.667-.667v-.667h3.333A.666.666,0,0,0,12.013,14V10A.666.666,0,0,0,11.347,9.333Z" transform="translate(-0.014)"/>
                    </g>
                </svg>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                userName: ''
            }
        },
        mounted(){
            this.userName = localStorage.getItem("username")
        }
    }
</script>

<style lang="sass" scoped>
header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 10px 0
.operation-icons-container
    display: flex
    gap: 20px
    & .icon-container
        cursor: pointer
</style>