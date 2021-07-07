<template>
    <div>
        <div class="diagram-wrapper bg-fill-block">
            <div class="diagram-body bg-fill-secondary-accent" :style="{'width': `${diagramWidth}%`}">

            </div>
        </div>
        <div class="diagram-label-container">
            <div class="diagram-label">
                <span class="p-like less-size sm-top-padding default-text-color">{{users.confirmed}}</span>
            </div>
            <div class="diagram-label">
                <span class="p-like less-size sm-top-padding default-text-color">{{users.unconfirmed}}</span>
            </div>
        </div>
        <div class="diagram-marks-wrapper">
            <div class="diagram-mark-container">
                <div class="diagram-mark bg-fill-secondary-accent"></div>
                <span class="p-like less-size sm-top-padding default-text-color"> - підтверджено</span>
            </div>
            <div class="diagram-mark-container">
                <div class="diagram-mark bg-fill-block"></div>
                <span class="p-like less-size sm-top-padding default-text-color"> - очікують підтвердження</span>
            </div>
        </div>
    </div>
</template>

<script>
    import API from "../../libs/api"

    export default {
        data(){
            return {
                users: {
                    confirmed: 1,
                    unconfirmed: 1
                },
                diagramWidth: 0
            }
        },
        mounted(){
            const api = new API()

            Promise.all([api.getSecureData('user/data/count/confirmed'), api.getSecureData('user/data/count/unconfirmed')]).then(res => {
                this.users.confirmed = res[0]
                this.users.unconfirmed = res[1]

                if(this.users.confirmed + this.users.unconfirmed > 0)
                    this.diagramWidth = (100 * this.users.confirmed) / (this.users.confirmed + this.users.unconfirmed)
            
            })
        }
    }
</script>

<style lang="sass" scoped>
.diagram-wrapper
    width: 390px
    height: 30px
    border-radius: 10px
    overflow: hidden
    & .diagram-body
        height: 100%
        width: 0
        transition: 1.2s

.diagram-label-container
    display: flex
    justify-content: space-between
    & .diagram-label
        width: 10px

.diagram-marks-wrapper
    display: flex
    gap: 60px

.diagram-mark-container
    display: flex
    align-items: center
    gap: 4px

.diagram-mark
    width: 13px
    height: 13px
    border-radius: 3px

</style>