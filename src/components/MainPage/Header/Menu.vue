<template>
    <nav>
        <div class="logo-container">
            <img src="@/assets/images/logo.svg" alt="Виробниче навчання">
        </div>
        <div class="menu-container">
            <ul> 
                <li>
                    <router-link to="SignUp">
                        Реєстрація
                    </router-link>
                </li>
                <li>
                    <router-link to="SignIn">
                        Авторизація
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

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