<template>
    <div class="main-container bg-fill-default">
        <div class="menu-wrapper menu-line bg-fill-default" ref="menu" @click="closeMenu">
            <div class="menu-header">
                <div class="menu-logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28.973" height="24.94" viewBox="0 0 28.973 24.94" class="menu-logo">
                        <g id="Group_268" data-name="Group 268" transform="translate(-40.027 -32.06)">
                            <path id="Subtraction_16" data-name="Subtraction 16" d="M-1423.836,21.865h-3.572L-1436,0h4.466l5.912,16.537,1.526-4.313,3.108,2.342-2.847,7.3Zm3.6-9.234h0l-3.162-2.383.346-.977,3.191,2.4-.373.955Zm1.883-4.827h0l-3.3-2.487L-1419.771,0h4.465l-3.044,7.8Z" transform="translate(1476.028 32.06)" />
                            <text id="n" transform="translate(60 54)" font-size="14" font-family="Raleway-Bold, Raleway" font-weight="700" letter-spacing="0.012em"><tspan x="0" y="0">n</tspan></text>
                        </g>
                    </svg>
                </div>
                <div class="p-like text-accent-first-color sm-top-padding menu-header-title">
                    WEB Розробка
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.969" height="11.484" viewBox="0 0 22.969 11.484" class="default-icon-fill">
                    <g id="menu_1_" data-name="menu(1)" transform="translate(0 -96.243)">
                        <g id="Menu_1_2" data-name="Menu_1_" transform="translate(0 96.243)">
                        <path id="Path_1137" data-name="Path 1137" d="M.718,97.679H22.251a.718.718,0,0,0,0-1.436H.718a.718.718,0,0,0,0,1.436Z" transform="translate(0 -96.243)"/>
                        <path id="Path_1138" data-name="Path 1138" d="M22.251,180.455H.718a.718.718,0,0,0,0,1.436H22.251a.718.718,0,0,0,0-1.436Z" transform="translate(0 -175.431)"/>
                        <path id="Path_1139" data-name="Path 1139" d="M135.376,264.667H121.021a.718.718,0,0,0,0,1.436h14.356a.718.718,0,0,0,0-1.436Z" transform="translate(-113.125 -254.618)"/>
                        </g>
                    </g>
                </svg>
                <span class="p-like default-text-color sm-top-padding menu-icon-label">Меню</span>
            </div>
            <ul class="menu-items-container">
                <div class="menu-group" v-for="(group, groupKey) in menu" :key="groupKey">
                    <h3 class="default-text-color">{{group.title}}</h3>
                    <br>
                    <dashboard-menu-item 
                        v-for="(item, itemKey) in group.items" 
                        :key="itemKey" :link="item.link" 
                        :icon="item.icon" 
                        :active="item.active"
                        @click="setMenuActiveItem(groupKey, itemKey)"
                    >
                        {{item.title}}
                    </dashboard-menu-item>
                </div>
            </ul>
        </div>
        <main>
            <div class="dashboard-content-wrapper">
                <dashboard-header></dashboard-header>
                <div class="menu-trigger-container bg-fill-secondary-accent" @click="showMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.969" height="11.484" viewBox="0 0 22.969 11.484" class="default-icon-fill">
                        <g id="menu_1_" data-name="menu(1)" transform="translate(0 -96.243)">
                            <g id="Menu_1_2" data-name="Menu_1_" transform="translate(0 96.243)">
                            <path id="Path_1137" data-name="Path 1137" d="M.718,97.679H22.251a.718.718,0,0,0,0-1.436H.718a.718.718,0,0,0,0,1.436Z" transform="translate(0 -96.243)"/>
                            <path id="Path_1138" data-name="Path 1138" d="M22.251,180.455H.718a.718.718,0,0,0,0,1.436H22.251a.718.718,0,0,0,0-1.436Z" transform="translate(0 -175.431)"/>
                            <path id="Path_1139" data-name="Path 1139" d="M135.376,264.667H121.021a.718.718,0,0,0,0,1.436h14.356a.718.718,0,0,0,0-1.436Z" transform="translate(-113.125 -254.618)"/>
                            </g>
                        </g>
                    </svg>
                    <span class="p-like sm-top-padding default-text-color ">Меню</span>
                </div>
                <slot></slot>
            </div>
            <sidebar-input-container></sidebar-input-container>
        </main>
    </div>
</template>

<script>
    import DashboardMenuItem from '@/components/Dashboard/DashboardMenuItem.vue'
    import DashboardHeader from '@/components/Dashboard/DashboardHeader.vue'
    import UserInputSidebarContainer from '@/components/Dashboard/UserInputSidebar/UserInputSidebarContainer.vue'
    

    export default {
        data(){
            return {
                menu: [],
                activeMenuItem: 0
            }
        },
        props:["menuToHandle"],
        components:{
            "dashboard-menu-item": DashboardMenuItem,
            "dashboard-header": DashboardHeader,
            "sidebar-input-container": UserInputSidebarContainer
        },
        methods:{
            setMenuActiveItem(groupIndex, itemIndex){
                this.menu.map(group => group.items.map(item => item.active = false))
                this.menu[groupIndex].items[itemIndex].active = true
            },
            showMenu(){
                if(window.innerWidth <= 800)
                    this.$refs.menu.style.left = 0
            },
            closeMenu(){
                if(window.innerWidth <= 800)
                    this.$refs.menu.style.left = "-100%"
            }
        },
        mounted(){
            this.menu = this.menuToHandle

            this.$nextTick(()=>{
                this.menu.map(group => {
                    group.items.map(item => {
                        item.active = false
                        if(this.$route.path == item.link) item.active = true
                    })
                })
            })
        }
    }
</script>

<style lang="sass" scoped>
.main-container
    width: 100vw
    height: auto
    height: 100vh
    display: grid
    grid-template-columns: 2fr 10fr

    @media (min-width: 2000px)
        grid-template-columns: 2fr 15fr

    @media (max-width: $tablet-big)
        grid-template-columns: 2fr 9fr

    @media (max-width: $tablet-medium)
        display: flex

.menu-trigger-container
    display: none
    padding: 5px 15px
    position: absolute
    top: 50px
    left: -10px
    z-index: 3000
    border-radius: 0 12px 12px 0

    & > span
        margin-left: 10px

    @media (max-width: $tablet-medium)
        display: block

.menu-wrapper
    position: relative
    padding: 20px 0 15px 24px
    box-sizing: border-box

    @media (max-width: $tablet-medium)
        position: absolute
        width: 100%
        height: 100vh
        z-index: 5000
        transition: $transition-time
        left: -100%

    & .menu-header
        display: flex
        margin-bottom: 20px
        & .menu-logo-container
            width: 35px
        & .menu-header-title
            font-family: 'Raleway-Regular'
            margin-left: 24px
            position: relative
            &::before
                content: '|'
                position: absolute
                left: -14px
                top: 0
    & .menu-icon-label
        padding-left: 17px

.menu-group
    margin-top: 15px
        
main
    overflow-y: scroll
    @media (max-width: $tablet-medium)
        width: 100%
    

.dashboard-content-wrapper
    box-sizing: border-box
    padding: 10px 35px
    padding-top: 40px

    @media (max-width: $phone-small) 
        padding: 10px 10px
        padding-top: 40px
</style>