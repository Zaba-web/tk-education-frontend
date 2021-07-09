<template>
    <div>
        <operation @clicked="askForConfirmation" title="Видалити">
            <svg xmlns="http://www.w3.org/2000/svg" width="14.867" height="19.442" viewBox="0 0 14.867 19.442" class="default-icon-fill">
                <g id="XMLID_1473_" transform="translate(-60)">
                    <path id="XMLID_1476_" d="M93.554,176.522a1.711,1.711,0,0,0,1.713,1.63h6.955a1.711,1.711,0,0,0,1.713-1.63l1-11.522H92.552Zm6.906-8.663H101.6v6.29H100.46Zm-2.287,0h1.144v6.29H98.173Zm-2.287,0h1.144v6.29H95.886Z" transform="translate(-31.311 -158.71)" />
                    <path id="XMLID_1481_" d="M70.293,2.859V1.715A1.717,1.717,0,0,0,68.577,0H66.29a1.717,1.717,0,0,0-1.715,1.715V2.859H60V5.146H74.867V2.859Zm-4.575,0V1.715a.572.572,0,0,1,.572-.572h2.287a.572.572,0,0,1,.572.572V2.859Z" />
                </g>
            </svg>
        </operation>
        <transition
            enter-active-class="animate__animated animate__fadeInRight"
            leave-active-class="animate__animated animate__fadeOutRight"
            mode="in-out"
        >
            <div class="confirmation-container bg-fill-block" v-if="showConfirmation">
                <span class="p-like sm-top-padding default-text-color less-size">
                    Ви впевнені?
                </span>
                <br>
                <inline-container mode="to-left">
                    <div @click="confirmDelete" class="confirmation-option">
                        <span class="p-like sm-top-padding default-text-color less-size" >
                            Так
                        </span>
                    </div>
                    <div @click="cancelDelete" class="confirmation-option">
                        <span class="p-like sm-top-padding default-text-color less-size" >
                            Ні
                        </span>
                    </div>
                </inline-container>
            </div>
        </transition>
    </div>
</template>

<script>
    import OperationPlain from './OperationPlain.vue'
    import InlineContainer from '../InlineContainer.vue'

    import API from '../../../libs/api'

    import 'animate.css'

    export default {
        components: {
            'operation': OperationPlain,
            'inline-container': InlineContainer
        },
        props: {
            'path': String
        },
        data(){
            return {
                'showConfirmation': false
            }
        },
        methods: {
            askForConfirmation(){
                if(!this.showConfirmation)
                    this.showConfirmation = true
            },
            cancelDelete(){
                this.showConfirmation = false
            },
            confirmDelete(){
                const api = new API()

                api.getUserAccessLevel().then(accessLevel => {
                    if(accessLevel == 2) 
                        return api.delete(this.path)
                }).then(response => {
                    this.$store.commit('ADD_NEW_MESSAGE', response.data)

                    if(response.data.type == "success") 
                        this.$emit('deletedSuccessful')
                    
                }).catch(error => {
                    this.$store.commit('ADD_NEW_MESSAGE', {
                        title: "Серверна помилка",
                        msg: "Відбулась критична помилка на стороні серверу. Перегляньте консоль для детальної інформації",
                        type: "error"
                    })
                    console.error(error) 
                })
                
            }
        }
    }
</script>

<style lang="sass" scoped>
.confirmation-container
    position: absolute
    width: 180px
    bottom: 0
    left: -200px
    box-sizing: border-box
    padding: 10px
    border-radius: 4px 
    text-align: left

.confirmation-option
    padding: 1px 4px
    border-radius: 4px
    transition: $transition-time

</style>