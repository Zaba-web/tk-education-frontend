<template>
    <div :class="{
        'dark-theme': colorTheme == 'dark',
        'light-theme': colorTheme == 'light'
    }">
        <layout :menu-to-handle="menu">
            <transition 
                enter-active-class="animate__animated animate__fadeInLeft"
                mode="in-out">
                <router-view></router-view>
            </transition>
        </layout>
    </div>
</template>

<script>
    import DashboardLayout from '@/components/Dashboard/DashboardLayout.vue'
    import adminMenu from '@/static/adminMenu'

    export default {
        data(){
            return {
                menu: [],
                colorTheme: 'dark'
            }
        },
        components:{
            "layout": DashboardLayout
        },
        mounted(){

            adminMenu.map(item => this.menu.push(item))
            if(localStorage.getItem('colorTheme') != null) 
                this.colorTheme = localStorage.getItem('colorTheme')
        }
    }
</script>

<style lang="sass" scoped>
.fade-enter-from, .fade-leave-to
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: opacity .7s ease-in
</style>