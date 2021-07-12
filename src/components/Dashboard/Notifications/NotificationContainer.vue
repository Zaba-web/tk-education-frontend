<template>
    <div class="notification-wrapper">
        <div class="notification-trigger" @click="changeNotificationContainerVisibility">
            <svg xmlns="http://www.w3.org/2000/svg" width="12.97" height="14.757" viewBox="0 0 12.97 14.757" class="default-icon-fill">
                <g transform="translate(-30.999)">
                    <path id="Path_1752" data-name="Path 1752" d="M189.262,468.3a2.164,2.164,0,0,0,1.981-1.3h-3.961A2.164,2.164,0,0,0,189.262,468.3Z" transform="translate(-151.778 -453.54)" />
                    <path id="Path_1753" data-name="Path 1753" d="M41.951,7.144V6.2a4.475,4.475,0,0,0-3.17-4.275V1.3a1.3,1.3,0,1,0-2.594,0v.625A4.475,4.475,0,0,0,33.016,6.2v.947a6.788,6.788,0,0,1-1.9,4.72.432.432,0,0,0,.312.732H43.536a.432.432,0,0,0,.312-.732,6.788,6.788,0,0,1-1.9-4.72ZM37.916,1.75c-.142-.014-.286-.021-.432-.021s-.29.007-.432.021V1.3a.432.432,0,0,1,.865,0Z" transform="translate(0)" />
                    <path id="Path_1754" data-name="Path 1754" d="M391.265,56.219a.432.432,0,1,0,.865,0,6.443,6.443,0,0,0-1.9-4.586.432.432,0,1,0-.611.611A5.584,5.584,0,0,1,391.265,56.219Z" transform="translate(-348.161 -50.022)" />
                    <path id="Path_1755" data-name="Path 1755" d="M31.432,56.652a.432.432,0,0,0,.432-.432,5.584,5.584,0,0,1,1.646-3.974.432.432,0,1,0-.611-.611A6.442,6.442,0,0,0,31,56.22.432.432,0,0,0,31.432,56.652Z" transform="translate(-0.001 -50.023)" />
                </g>
            </svg>
            <span class="messages-count p-like sm-top-padding less-size" :class="{'text-accent-first-color': messagesCount > 0, 'default-text-color': messagesCount == 0}">
                {{messagesCount}}
            </span>
        </div>
        <transition
                    enter-active-class="animate__animated animate__fadeInUp"
                    leave-active-class="animate__animated animate__fadeOutDown"
        >
            <div class="notification-container bg-fill-block" v-if="showNotifications">
                <span class="p-like sm-top-padding bright-text-color">Ваші сповіщення</span>
                <br>
                <transition-group
                    enter-active-class="animate__animated animate__fadeInLeft"
                    leave-active-class="animate__animated animate__fadeOutRight"
                >
                    <notification @close="checkCountOfElements" v-for="(message, key) in messages" :key="key" :type="message.type" :title="message.title" :msg="message.msg" :index="key"></notification>
                </transition-group>
            </div>
        </transition>
    </div>
</template>

<script>
    import Notification from '@/components/Dashboard/Notifications/Notification.vue'

    export default {
        components:{
            'notification': Notification
        },

        data() {
            return {
                showNotifications: false
            }
        },

        methods: {
            changeNotificationContainerVisibility(){
                this.showNotifications = !this.showNotifications
            },
            checkCountOfElements(){
                if(this.messagesCount == 0)
                    this.showNotifications = false
            }
        },

        computed: {
            messages() {return this.$store.getters.getAllMessages},
            messagesCount() {return this.messages.length}
        }
    }
</script>

<style lang="sass" scoped>
.notification-wrapper
    margin-left: 20px
    position: relative
.notification-trigger
    cursor: pointer
.messages-count
    padding: 5px
.notification-container
    position: absolute
    z-index: 700
    width: 380px
    min-height: 200px
    max-height: 400px
    box-sizing: border-box
    padding: 20px 25px
    border-radius: 6px
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    overflow-x: hidden
</style>