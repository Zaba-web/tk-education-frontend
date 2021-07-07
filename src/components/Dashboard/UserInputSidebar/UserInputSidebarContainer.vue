<template>
    <transition 
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutRight"
        mode="in-out"
    >
        <div class="user-input-sidebar-container" v-if="visible">
            <div v-if="mode.groupCreate">GroupCreate</div>
            <div v-if="mode.groupUpdate">GroupUpdate</div>
        </div>
    </transition>
</template>

<style lang="sass" scoped>
.user-input-sidebar-container
    position: fixed
    right: 0
    top: 0
    width: 30vw
    height: 100vh
</style>

<script>
    import 'animate.css'

    export default {
        computed: {
            mode(){
                return this.$store.getters.inputSidebarContentContent
            },
            visible(){
                return this.$store.getters.isInputSidebarVisible
            }
        }
    }
</script>