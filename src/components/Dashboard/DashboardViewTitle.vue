<template>
    <div>
        <h1 class="text-accent-first-color">
            <slot></slot>
        </h1>
        <h2 class="text-accent-first-color sub-title">
            {{subtitle}}
        </h2>
    </div>
</template>

<script>
    export default {
        props: {
            'subtitle': String
        }
    }
</script>

<style lang="sass" scoped>
h2
    line-height: 50px
div
    margin-top: 20px
</style>