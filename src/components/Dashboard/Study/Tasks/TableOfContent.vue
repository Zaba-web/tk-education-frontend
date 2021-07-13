<template>
    <div>
        <transition-group
            enter-active-class="animate__animated animate__fadeInUp"
        >
            <h3 class="bright-text-color">
                Зміст
            </h3>
            <span v-for="(header, index) in headers" :key="index" class="header-item" :class="header.type">
                <a :href="`#h-${index}`" class="default-text-color p-like sm-top-padding">
                    {{header.text}}
                </a>
            </span>
        </transition-group>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                headers: []
            }
        },

        mounted(){
            setTimeout(()=>{
                let headers = document.querySelectorAll(".theory-text h1, .theory-text h2, .theory-text h3, .theory-text h4, .theory-text h5")
                headers.forEach((item, index) => {
                    item.id = `h-${index}`
                    this.headers.push({text: item.innerText, type: item.tagName})
                })
            }, 2000)
        }
    }
</script>

<style lang="sass" scoped>
.header-item
    display: block
    position: relative
    padding-left: 20px
    & a
        text-decoration: none
    &.H3
        padding-left: 35px
        &::after
            left: 20px
    &.H4
        padding-left: 50px
        &::after
            left: 35px
    &.H5
        padding-left: 65px
        &::after
            display: none
    &::after
        position: absolute
        content: ''
        width: 7px
        height: 7px
        left: 5px
        top: 12px
        transform: rotate(45deg)
</style>