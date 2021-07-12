<template>
    <transition 
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutRight"
        mode="in-out"
    >
        <div class="user-input-sidebar-container" v-if="visible">
            <div class="close-contianer" @click="closeUserInputSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.889" height="11.339" viewBox="0 0 17.889 11.339" class="default-icon-fill">
                    <rect id="Rectangle_635" data-name="Rectangle 635" width="10" height="1" transform="translate(0 5.365)" />
                    <rect id="Rectangle_636" data-name="Rectangle 636" width="8" height="1" transform="translate(11.525 10.632) rotate(-45)" />
                    <rect id="Rectangle_637" data-name="Rectangle 637" width="8" height="1" transform="translate(12.232) rotate(45)" />
                </svg>
            </div>
            <div class="text-block">
                <span class="h3-like bright-text-color">{{data.title}}</span>
                <p class="sm-top-padding default-text-color less-size">
                    {{data.description}}
                </p>
            </div>
            <group-edit v-if="mode['groupEdit']" @onsuccess="showMessageFromServer" @onerror="showServerError"></group-edit>
            <group-create v-if="mode['groupCreate']" @onsuccess="showMessageFromServer" @onerror="showServerError"></group-create>
            <accept-student v-if="mode['userAccept']" @onsuccess="showMessageFromServer" @onerror="showServerError"></accept-student>
        </div>
    </transition>
</template>

<style lang="sass" scoped>
.user-input-sidebar-container
    position: absolute
    right: 0
    top: 0
    width: 30vw
    max-width: 400px
    height: 100vh
    box-sizing: border-box
    padding: 25px
    z-index: 50

    & .close-contianer
        position: absolute
        right: 25px
        top: 30px
        cursor: pointer
        transition: $transition-time

        &:hover
            right: 20px
.text-block
    margin-bottom: 25px
</style>

<script>
    import GroupEdit from "@/components/Dashboard/Groups/GroupEdit.vue"
    import GroupCreate from "@/components/Dashboard/Groups/GroupCreate.vue"
    import AcceptStudent from '@/components/Dashboard/Users/AcceptStudent.vue'

    export default {
        computed: {
            mode(){
                return this.$store.getters.inputSidebarContentContent
            },
            visible(){
                return this.$store.getters.isInputSidebarVisible
            },
            data(){
                return this.$store.getters.inputSidebarContentData
            }
        },
        components: {
            'group-edit': GroupEdit,
            'group-create': GroupCreate,
            'accept-student': AcceptStudent
        },
        methods: {
            closeUserInputSidebar(){
                this.$store.commit('RESET_DASHBOARD_INPUT_SIDEBAR')
            },
            showServerError(error){
                this.$store.commit('ADD_NEW_MESSAGE', {
                    title: "Серверна помилка",
                    msg: "Відбулась критична помилка на стороні серверу. Перегляньте консоль для детальної інформації",
                    type: "error"
                })

                console.error(error) 
            },
            showMessageFromServer(msg){
                this.$store.commit('ADD_NEW_MESSAGE', msg)
                this.closeUserInputSidebar()
            }
        }
    }
</script>