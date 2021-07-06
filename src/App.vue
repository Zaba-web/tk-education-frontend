<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<style lang="sass">
.fade-enter-from, .fade-leave-to
  opacity: 0
.fade-enter-active, .fade-leave-active
  transition: opacity .7s ease-in
</style>

<script>
  module.exports = {
    mounted(){
        document.title = "Виробниче навчання | Веб розробка"
    }
  }
</script>
