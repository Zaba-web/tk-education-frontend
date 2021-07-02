<template>
    <div>
        <div class="subject">

            <div class="subject-image">
                <img :src="require(`@/assets/images/${image}`)" :alt="`${name} icon`">
            </div>

            <div class="subject-description">
                <h3 class="black-color">{{ name }}</h3>
                <span class="p-like sm-top-padding black-color">
                    {{title}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            name: String,
            title: String,
            image: String,
        }
    }
</script>

<style lang="sass" scoped>

.subject
    height: 110px
    background: #fff
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: $transition-time
    cursor: pointer
    display: flex
    padding: 8px 0px
    position: relative
    z-index: 2
    overflow: hidden
    
    @media (max-width: $phone-big)
        height: 65px
    
    .subject-image
        width: 40%
        display: flex
        justify-content: center
        align-items: center
        @media (max-width: $phone-big)
            width: 30%

    &:hover
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

</style>