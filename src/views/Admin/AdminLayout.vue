<template>
    <div class="dark-theme">
        <layout :menu-to-handle="menu">
            <transition name="fade" mode="in-out">
                <router-view></router-view>
            </transition>
        </layout>
    </div>
</template>

<script>
    import DashboardLayout from '../../components/Dashboard/DashboardLayout.vue'
    import adminMenu from '../../static/adminMenu'
    import "animate.css"

    export default {
        data(){
            return {
                menu: []
            }
        },
        components:{
            "layout": DashboardLayout
        },
        mounted(){
           adminMenu.map(item => this.menu.push(item))
        }
    }
</script>

<style lang="sass" scoped>
.fade-enter-from, .fade-leave-to
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: opacity .7s ease-in
</style>