<template>
    <div class="schedule-day-container"  @click="activateDay">
        <div :class="{'schedule-day-container-active': startActive}">
            <span>
                {{dayName}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            startActive: Boolean,
            dayName: String,
            dayId: Number 
        },
        methods: {
            activateDay(){
                this.$emit('changedDayStatus', [this.dayName, this.dayId])
            }
        },
    }
</script>

<style lang="sass">
.schedule-day-container
    width: 65px
    height: 65px
    border-radius: 4px
    cursor: pointer
    display: flex
    position: relative
    z-index: 3
    &::before
        content: ''
        width: 61px
        height: 100%
        top: 6px
        left: 2px
        position: absolute
        border-radius: 15px

    & div
        transition: $transition-time
        font-family: 'Raleway-Bold'
        font-size: 24px
        display: block
        background: blue
        border-radius: 6px
        width: 100%
        height: 100%
        z-index: 1
        display: flex
        & span
            margin: auto auto
            opacity: .4
</style>