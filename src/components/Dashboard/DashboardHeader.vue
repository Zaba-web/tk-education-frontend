<template>
    <header class="dashboard-header bg-fill-default">
        <div class="name-and-notifications">
            <div class="user-name-container">
                <span class="p-like default-text-color sm-top-padding less-size">
                    Привіт, {{userName}}
                </span>
            </div>
            <notification-container></notification-container>
        </div>
        <div class="operation-icons-container">
            <color-theme-switcher></color-theme-switcher>
            <div class="icon-container">
                <router-link to="/student/settings">
                    <svg id="Group_520" data-name="Group 520" xmlns="http://www.w3.org/2000/svg" width="16.576" height="17.023" viewBox="0 0 16.576 17.023" class="default-icon-fill">
                        <path id="Path_1162" data-name="Path 1162" d="M23,10.377,21.435,9.153a6.16,6.16,0,0,0,.037-.643,5.974,5.974,0,0,0-.037-.643L23,6.644a.767.767,0,0,0,.185-.977L21.559,2.851a.754.754,0,0,0-.941-.338l-1.846.741a6.33,6.33,0,0,0-1.109-.643L17.382.653A.753.753,0,0,0,16.63,0H13.368a.751.751,0,0,0-.75.647l-.282,1.965a6.525,6.525,0,0,0-1.106.643L9.378,2.512a.769.769,0,0,0-.934.333L6.815,5.664A.763.763,0,0,0,7,6.646L8.564,7.869a5.612,5.612,0,0,0,0,1.285L7,10.378a.767.767,0,0,0-.184.977L8.44,14.171a.753.753,0,0,0,.941.338l1.846-.741a6.386,6.386,0,0,0,1.108.643l.281,1.958a.753.753,0,0,0,.752.654h3.263a.752.752,0,0,0,.751-.647l.282-1.965a6.556,6.556,0,0,0,1.106-.644l1.851.743a.762.762,0,0,0,.278.052.749.749,0,0,0,.656-.384l1.634-2.83A.766.766,0,0,0,23,10.377Zm-8,.972a2.837,2.837,0,1,1,2.837-2.837A2.84,2.84,0,0,1,15,11.348Z" transform="translate(-6.71)" />
                    </svg>
                </router-link>
            </div>
            <div class="icon-container">
                <router-link to="/logout">
                    <svg id="Group_522" data-name="Group 522" xmlns="http://www.w3.org/2000/svg" width="15.998" height="15.999" viewBox="0 0 15.998 15.999" class="default-icon-fill">
                        <g id="Group_521" data-name="Group 521" transform="translate(0)">
                            <path id="Path_1163" data-name="Path 1163" d="M305.295,151.751a.675.675,0,0,0-.145-.217l-2-2a.667.667,0,1,0-.943.943l.862.862h-3.724a.667.667,0,1,0,0,1.333h3.724l-.862.862a.667.667,0,1,0,.943.943l2-2a.669.669,0,0,0,.145-.727Z" transform="translate(-289.347 -144.672)" />
                            <path id="Path_1164" data-name="Path 1164" d="M11.347,9.333A.666.666,0,0,0,10.68,10v3.333H8.013V2.666a.667.667,0,0,0-.475-.639L5.223,1.333H10.68V4.666a.667.667,0,1,0,1.333,0v-4A.666.666,0,0,0,11.347,0H.681A.594.594,0,0,0,.612.013a.658.658,0,0,0-.283.1C.315.121.3.121.283.132S.275.143.27.147A.66.66,0,0,0,.093.358.544.544,0,0,0,.074.414.632.632,0,0,0,.021.57a.415.415,0,0,0,0,.058C.023.641.014.653.014.667V14a.666.666,0,0,0,.536.653l6.666,1.333A.62.62,0,0,0,7.347,16a.667.667,0,0,0,.667-.667v-.667h3.333A.666.666,0,0,0,12.013,14V10A.666.666,0,0,0,11.347,9.333Z" transform="translate(-0.014)"/>
                        </g>
                    </svg>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
    import DashboardColorThemeController from '@/components/Dashboard/DashboardColorThemeController.vue'
    import NotificationContainer from '@/components/Dashboard/Notifications/NotificationContainer.vue'
    
    export default {
        data(){
            return {
                userName: ''
            }
        },
        mounted(){
            this.userName = localStorage.getItem("username")
        },
        components: {
            'color-theme-switcher': DashboardColorThemeController,
            'notification-container': NotificationContainer
        }
    }
</script>

<style lang="sass" scoped>
header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 10px 0
    position: fixed
    top: 0
    width: 78.5%
    z-index: 700

    @media(max-width: $tablet-big)
        width: 76.5%
    
    @media (max-width: $tablet-medium)
        width: 90%

    @media (max-width: 500px)
        width: 87%

    @media (max-width: $phone-small) 
        width: 90%
        padding-right: 30px

.operation-icons-container
    display: flex
    gap: 20px
    align-items: center
    & .icon-container
        cursor: pointer
.name-and-notifications
    display: flex
    align-items: center
</style>