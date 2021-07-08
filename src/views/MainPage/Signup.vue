<template>
    <div>
         <register-form></register-form>
    </div>
</template>

<script>
    import RegisterForm from '@/components/MainPage/RegisterForm.vue'

    export default {
        components: {
            "register-form": RegisterForm
        }
    }
</script>

<style lang="sass" scoped>
div
    width: 100vw
    height: 100vh
    background: $black-text-color
    display: flex
    margin: auto auto
</style>