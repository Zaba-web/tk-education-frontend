<template>
    <li :class="{'dashboard-menu-item-active': active}" class="dashboard-menu-item">
        <div class="icon-container" v-html="icon">

        </div>
        <div class="label-container forced-menu-item-color p-like sm-top-padding">
            <router-link :to="link">
                <slot></slot>
            </router-link>
        </div>
    </li>
</template>

<style lang="sass" scoped>
li
    display: flex
    align-items: center 
    padding: 10px 0
    cursor: pointer
    position: relative

    &::before
        content: ''
        top: 0
        left: 0
        height: 100%
        position: absolute
        width: 32px
        left: -32px
        transition: $transition-time
    transition: $transition-time
    & a
        text-decoration: none 
        &::after
          content: ''
          position: absolute
          width: 103% 
          height: 100% 
          left: -32px
          top: 0  
    & .icon-container
        margin-right: 15px 

</style>

<script>
    export default {
        props: {
            'link': String,
            'icon': String,
            'active': Boolean
        }
    }
</script>