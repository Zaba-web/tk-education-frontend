<template>
    <div class="operations-container-wrapper">
        <div class="operations-container-icon" @click="toggleOperationBlock">
            <svg id="Group_537" data-name="Group 537" xmlns="http://www.w3.org/2000/svg" width="3" height="15" viewBox="0 0 3 15" class="default-icon-fill static-icon">
                <circle id="Ellipse_96" data-name="Ellipse 96" cx="1.5" cy="1.5" r="1.5"/>
                <circle id="Ellipse_97" data-name="Ellipse 97" cx="1.5" cy="1.5" r="1.5" transform="translate(0 6)" />
                <circle id="Ellipse_98" data-name="Ellipse 98" cx="1.5" cy="1.5" r="1.5" transform="translate(0 12)" />
            </svg>
        </div>
        <transition 
                enter-active-class="animate__animated animate__fadeInUp"
                leave-active-class="animate__animated animate__fadeOutUp"
                mode="in-out"
        >
            <div class="operations-container bg-fill-block" v-if="displayOperationsBlock">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import 'animate.css'

    export default {
        data(){
            return {
                displayOperationsBlock: false
            }
        },
        methods: {
            toggleOperationBlock(){
                this.displayOperationsBlock = !this.displayOperationsBlock
            }
        }
    }
</script>

<style lang="sass" scoped>
.operations-container-wrapper
    position: absolute
    right: 15px
    top: 15px
    cursor: pointer
    & .static-icon
        position: relative
        top: 2px
    & .operations-container-icon
        padding: 5px 13px
        text-align: center
        border-radius: 4px 
        transition: $transition-time
.operations-container
    width: 34px
    box-shadow: rgba(1, 1, 1, .4) 0px 1px 4px;
    padding: 10px 3px
    position: absolute
    top: 0
    left: -44px
    border-radius: 4px 
</style>