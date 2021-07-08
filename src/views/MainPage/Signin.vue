<template>
    <div>
         <login-form></login-form>
    </div>
</template>

<script>
    import LoginForm from '@/components/MainPage/LoginForm.vue'

    export default {
        components: {
            "login-form": LoginForm
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