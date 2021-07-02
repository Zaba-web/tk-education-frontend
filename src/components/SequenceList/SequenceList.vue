<template>
    <ul class="sequence-list">
        <sequence-list-item v-for="(item, index) in itemList" :key="index" :item-title="item.title" :is-filled="item.filled">
            {{item.text}}
        </sequence-list-item>
    </ul>
</template>

<script>
    import SequenceListItem from "./SequenceListItem.vue" 

    export default {
        components:{
            "sequence-list-item": SequenceListItem
        },
        props: {
            itemList: Array,
            type: String
        }
    }
</script>

<style lang="sass" scoped>
.sequence-list
    list-style: none
</style>