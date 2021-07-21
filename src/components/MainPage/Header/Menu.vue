<template>
    <nav>
        <div class="logo-container">
            <img src="@/assets/images/logo.svg" alt="Виробниче навчання">
        </div>
        <div class="menu-container">
            <ul> 
                <li v-if="!isUserInSystem">
                    <router-link to="SignUp">
                        Реєстрація
                    </router-link>
                </li>
                <li v-if="!isUserInSystem">
                    <router-link to="SignIn">
                        Авторизація
                    </router-link>
                </li>
                <li v-if="isUserInSystem" @click='logout'>
                    Вийти
                </li>
                <li v-if="isUserInSystem && accessLevel >= 1">
                    <router-link to="student">
                        Особистий кабінет
                    </router-link>
                </li>
                <li v-if="isUserInSystem && accessLevel >= 2">
                    <router-link to="admin">
                        Керування
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import API from '../../../libs/api.js'

    export default {
        data(){
            return {
                api: null,
                isUserInSystem: false,
                accessLevel: 0
            }
        },
        methods: {
            logout(){
                this.api.userLogout().then(()=>{
                    this.$router.go()
                })
            }
        },
        mounted(){
            this.api = new API()
            this.isUserInSystem = this.api.ifUserLogin()

            if(this.isUserInSystem){
                this.api.getUserAccessLevel().then(accessLevel => {
                    this.accessLevel = accessLevel
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
nav
    display: flex
    justify-content: space-between
    padding-top: 25px
    padding-right: 16px
    @media (min-height: $desktop-hight)
        padding-top: 50px
    @media (max-width: $phone-middle)
        padding-top: 10px

.menu-container
    & li
        display: inline-block
        margin: 0 25px
        cursor: pointer
        position: relative
        z-index: 1
        color: $gray-text-color

        & a
            color: $gray-text-color
            text-decoration: none

        &:last-of-type
            margin-right: 0

        &:hover
            &::after
                right: -20px
            &::before
                width: 120%  

        &::before
            content: ''
            width: 40%
            height: 100%
            background: #272C34
            position: absolute
            z-index: -1
            padding: 3px
            top: -3px
            left: -10px
            transition: $transition-time

        &::after
            content: ''
            display: block
            width: 8px
            height: 8px
            background: url("~@/assets/images/rightArrow.svg") center no-repeat
            position: absolute
            right: -16px
            top: 5px
            transition: $transition-time
</style>