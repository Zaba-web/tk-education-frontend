<template>
    <section class="dashboard-section">
        <h3 class="bright-text-color" v-if="title">{{title}}</h3>
        <span class="p-like sm-top-padding less-font-size default-text-color" v-if="subtitle">{{subtitle}}</span>

        <div class="dashboard-section-container">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="sass" scoped>
.dashboard-section
    margin-top: 40px
    padding-bottom: 20px
    &:last-child
        border-bottom: 0
.dashboard-section-container
    margin-top: 20px
</style>

<script>
    export default {
        props: {
            'title': String,
            'subtitle': String 
        }
    }
</script>