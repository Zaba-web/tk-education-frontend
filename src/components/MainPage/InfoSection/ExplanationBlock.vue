<template>
    <div class="explanation-block-wrapper">
        <div class="explanation-block-container">
            <h3>Як це працює?</h3>
            <sequence-list 
            :item-list = 
                "[
                    {title:`Реєстрація`,text:`Для початку роботи потрібно створити профіль на сайті`, filled: true}, 
                    {title:`Підтвердження`,text:`Дочекайтесь підтвердження профілю від майстра в/н`, filled: false},
                    {title:`Авторизація`,text:`Увійдіть в свій профіль і розпочніть роботу`, filled: true}
                ]" 
            type="HORIZONTAL"></sequence-list>
        </div>
    </div>
</template>

<script>
    import SequenceList from "../../SequenceList/SequenceList.vue"

    export default {
        components: {
            "sequence-list": SequenceList
        }
    }
</script>

<style lang="sass" scoped>
.explanation-block-wrapper
    width: 38%
    z-index: 2
    @media (max-width: $tablet-medium)
        display: none

.explanation-block-container
    background: #fff
    width: 400px
    height: 390px
    margin-top: 140px
    box-sizing: border-box
    padding: 25px
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    position: relative
    margin-left: 25px
    @media (max-width: $tablet-big)
        width: auto
        margin-left: 0

    @media (min-height: $desktop-hight)
        margin-top: 160px

    &::after
        content: ''
        position: absolute
        width: 100%
        height: 100%
        top: 20px
        left: 20px
        background: #fff
        z-index: -1
        opacity: .05

    &::before
        content: ''
        position: absolute
        width: 89px
        height: 187px
        background: url('~@/assets/images/arrow_exp_block.svg')
        left: -50px
        z-index: -1
        top: 90px
        @media (max-width: $tablet-big)
            left: -25px
</style>