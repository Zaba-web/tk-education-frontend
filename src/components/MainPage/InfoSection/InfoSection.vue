<template>
    <section>
        <div class="container">
            <div class="text-info-wrapper">
                <span class="transparent-title black-color">МЕТА ПРОЕКТУ</span>
                <h1 class="black-color">Що я дізнаюсь?</h1>
                <span class="sub-title">Що входить в тему веб-розробки</span>

                <div class="subjects-container">
                    <subject-short image="html.svg" name="HTML" title="Мова гіпертекстової розмітки" @click="showSubjectDetails(0)"></subject-short>
                    <subject-short image="css.svg" name="CSS" title="Каскадна таблиця стилів" @click="showSubjectDetails(1)"></subject-short>
                    <subject-short image="js.svg" name="JavaScript" title="Сценарна мова програмування" @click="showSubjectDetails(2)"></subject-short>
                    <subject-short image="server.svg" name="Керування" title="Адміністрування веб-сайтів" @click="showSubjectDetails(3)"></subject-short>
                    <div class="subjects-container-decorative-border"></div>
                </div>

                <div class="about-site-info-container">
                    <h3 class="black-color">Про сайт</h3>
                    <p class="black-color sm-top-padding">
                        Цей веб-сервіс було створено для спрощення та оптимізації вивчення теми «веб-розробка». 
                        Учні отримують доступ до всіх матеріалів теми, а майстри в/н зручні інструменти для
                        перевірки робіт та оцінювання.
                    </p>
                    <button class="black-button about-site" @click="hideInfoAboutSite">
                        Назад
                    </button>
                </div>
                 <decorative-line height="180px" right="0" bottom="0px" animation-delay='.5s' color="#000"></decorative-line>
            </div>

            <explanation-block></explanation-block>

            <div class="logo-container">
                <img src="@/assets/images/logo.svg" alt="Виробниче навчання">
            </div>

        </div>

        <div class="side-cover">
            <decorative-line height="90%" left="40px" top="30px" color="#fff"></decorative-line>
            <decorative-line height="130px" left="-40px" top="30px" animation-delay='3s' color="#000"></decorative-line>
        </div>

        <subject-details
            v-for="(item, index) in subjectsDetails" :key="index" 
            :title="item.title" 
            :sub-title="item.subTitle"
            :description="item.description"
            :image="item.image"
            :show="item.show"
            :hide="item.hide"
            :index="index"
            :aspects-title="item.aspectTitle"
            @hide="hideSubjectDetails" 
            >   
            <subject-aspect v-for="(item, index) in item.aspects" :key="index" 
                            :title="item.title" 
                            :description="item.description" 
                            :image="item.image">
            </subject-aspect>
        </subject-details>

        <button class="black-button about-site" @click="showInfoAboutSite">
            Про сайт
        </button>

    </section>
</template>

<script>

    import Subject from "./Subjects/Subject.vue"
    import ExplanationBlock from "./ExplanationBlock.vue"
    import DecorativeLine from "../DecorativeLine.vue"
    import SubjectDetails from "./Subjects/SubjectDetails.vue"
    import SubjectAspects from "./Subjects/SubjectAspect.vue"

    import gsap from 'gsap'

    import {subjectsDetailsData} from "@/static/subjectsList.js"

    export default {
        components: {
           "subject-short": Subject,
           "decorative-line": DecorativeLine,
           "explanation-block": ExplanationBlock,
           "subject-details": SubjectDetails,
           "subject-aspect": SubjectAspects
        },
        methods: {
            showSubjectDetails(index){
                this.subjectsDetails[index].hide = false
                this.subjectsDetails[index].show = true
            },
            hideSubjectDetails(index){
                this.subjectsDetails[index].show = false
                this.subjectsDetails[index].hide = true
            },
            showInfoAboutSite(){
                gsap.to(".about-site-info-container", {left: 0})
            },
            hideInfoAboutSite(){
                gsap.to(".about-site-info-container", {left: "-150vw"})
            }
        },
        data(){
            return {
                subjectsDetails: null
            }
        },
        created(){
            this.subjectsDetails = subjectsDetailsData
        }
    }
</script>

<style lang="sass" scoped>
.container
    padding-top: 50px
    display: flex
    justify-content: space-between
    @media (min-height: $desktop-hight)
        padding-top: 100px

.text-info-wrapper
    width: 57%
    position: relative
    @media (max-width: $tablet-medium)
        width: 85%
    @media (max-width: $phone-big)
        width: 98%

.subjects-container
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr
    grid-gap: 30px
    position: relative
    margin-top: 40px
    z-index: 2
    @media (min-height: $desktop-hight)
        margin-top: 60px
    @media (max-width: $tablet-medium)
        margin-top: 10px
    @media (max-width: $phone-big)
        grid-template-columns: 1fr
        grid-gap: 20px
        margin-top: 18px

    .subjects-container-decorative-border
        position: absolute
        width: 100%
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        z-index: -1

        &::after
           content: ''
           position: absolute
           width: 380px
           height: 170px
           border: 2px solid #F7F7F8
           z-index: -1
           @media (max-width: $phone-middle)
               display: none

.about-site-info-container
    box-sizing: border-box
    padding-left: 17px
    margin-top: 70px
    border-left: 3px solid $black-text-color
    @media (min-height: $desktop-hight)
        margin-top: 100px
    @media (max-width: $tablet-medium)
        margin-top: 15px
    @media (max-width: $phone-big)
        position: fixed
        background: #fff 
        z-index: 999
        padding:  80px 40px 0px 40px
        width: 100%
        height: 100vh
        left: -150vw
        top: 100vh
        margin-top: 0
    @media (max-width: $phone-small)
        top: 0

.side-cover
    position: absolute
    height: 100%
    width: 30%
    right: 0
    top: 0
    background: $dark-gradient
    @media (min-width: 2200px)
        width: 36%
    @media (max-width: $tablet-medium)
        width: 90px
    @media (max-width: $phone-big)
        width: 10px
        & > .line:first-child
            display: none

.logo-container
    position: absolute
    right: 25px
    top: 35px
    z-index: 1
    @media (max-width: $phone-big)
        display: none

.about-site
    display: none
    @media (max-width: $phone-big)
        display: block
        margin: 0 auto

</style>