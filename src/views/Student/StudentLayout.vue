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
    import studentMenu from '@/static/studentMenu'

    export default {
        data(){
            return {
                menu: [],
            }
        },
        computed: {
            colorTheme(){
                if(localStorage.getItem('colorTheme') != null) return localStorage.getItem('colorTheme')
                else return 'dark'
            }
        },
        components:{
            "layout": DashboardLayout
        },
        mounted(){
            studentMenu.map(item => this.menu.push(item))
        }
    }
</script>

<style lang="sass" scoped>
.fade-enter-from, .fade-leave-to
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: opacity .7s ease-in
</style>