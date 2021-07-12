<template>
    <div class="notification">
        <div class="notification-title">
            <div :class="type"></div>
            <span class="default-text-color p-like sm-top-padding">
                {{title}}
            </span>
        </div>
        <p class="default-text-color sm-top-padding less-size">
            {{msg}}
        </p>
        <div class="close" @click="closeNotification" :id="index">
            <svg xmlns="http://www.w3.org/2000/svg" width="17.889" height="11.339" viewBox="0 0 17.889 11.339" class="default-icon-fill">
                <rect id="Rectangle_635" data-name="Rectangle 635" width="10" height="1" transform="translate(0 5.365)" />
                <rect id="Rectangle_636" data-name="Rectangle 636" width="8" height="1" transform="translate(11.525 10.632) rotate(-45)" />
                <rect id="Rectangle_637" data-name="Rectangle 637" width="8" height="1" transform="translate(12.232) rotate(45)" />
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: String,
            title: String,
            msg: String,
            index: Number
        },
        methods: {
            closeNotification(){
                this.$store.commit('REMOVE_MESSAGE', this.index)
                this.$emit('close')
            }
        }
    }
</script>

<style lang="sass" scoped>
.notification-title
    display: flex
    align-items: center
    gap: 10px
    & > div:first-of-type
        width: 6px
        height: 6px
        border-radius: 100px
        &.success
            background: #37AF7F
        &.error
            background: #D62947
.notification
    width: 100%
    padding: 10px 0
    box-sizing: border-box
    position: relative
    &:last-of-type
        border: 0 !important
    & .close
        position: absolute
        right: 0
        top: 10px
        cursor: pointer
</style>