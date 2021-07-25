<template>
    <div class="student-welcome-container bg-fill-block">
        <div class="student-welcome-message-container bg-fill-secondary-accent">
            <h3 class="bright-text-color">
                Ласкаво просимо! Чим бажаєте зайнятись?
            </h3>
            <p class="bright-text-color">
                З поверненням в систему! Ви можете приступити 
                до роботи скориставшись головним меню або 
                безпосередньо звідси.
            </p>
        </div>
        <div class="student-welcome-slider">
            <div class="slide-container">
                <div class="slider-inner-container" ref="slider">
                    <div class="slider-item" v-for="(course, index) in courses" :key="index">
                        <router-link style="text-decoration: none" :to="`/student/study/course/${course.id}`">
                            <h3 class="bright-text-color">{{course.name}}</h3>
                            <p class="default-text-color sm-top-padding less-size">
                                {{course.description}}
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-dots">
            <div class="dot" v-for="(course, index) in courses" :key="index" @click="switchSlider(index, $event)" :class="{'slider-dot-active': index == 0}"></div>
        </div>
    </div>
</template>

<script>
    import API from '@/libs/api'

    export default {
        data(){
            return {
                api: {},
                courses: []
            }
        },

        methods: {
            switchSlider(index, event) {
                this.$refs.slider.style.top = `-${index * 306}px`

                document.querySelector('.slider-dot-active').classList.remove('slider-dot-active')
                event.target.classList.add('slider-dot-active')
            }
        },

        mounted(){
            this.api = new API()

            this.api.getSecureData(`education/courses`).then(response => this.courses = response)
        }
    }
</script>

<style lang="sass" scoped>
.student-welcome-container
    width: 65%
    height: 293px
    border-radius: 6px
    display: flex
    position: relative

    @media (max-width: 600px)
        display: none

    @media (max-width: $tablet-medium)
        width: 100%
        margin-bottom: 25px

    & .student-welcome-slider, & .student-welcome-message-container, & .slider-item
        box-sizing: border-box
        padding: 25px

    & .student-welcome-message-container
        width: 57%
        height: 100%
        border-radius: 6px 0 0 6px
        
    & .student-welcome-slider
        position: relative
        width: 43%

    & .slide-container
        position: absolute
        width: 100%
        height: 80%
        left: 0
        top: 0
        overflow: hidden

        & .slider-item
            width: 100%
            height: 250px
            &:not(:first-of-type)
                margin-top: 19%

    & .slider-dots
        position: absolute
        right: 10px
        top: 10px
        display: block

        & .dot
            width: 7px
            height: 7px
            border-radius: 100px
            cursor: pointer
            display: block
            
            &:not(:first-of-type)
                margin-top: 5px

    & .slider-inner-container
        position: relative
        transition: $transition-time
</style>