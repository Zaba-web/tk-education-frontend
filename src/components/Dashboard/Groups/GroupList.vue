<template>
    <div>
        <inline-container mode="to-left">
            <group-item v-for="(group, key) in groups" :key="key" :group="group" @deletedSuccessful="deleteFromList"></group-item>
        </inline-container>
    </div>
</template>

<script>
    import API from '../../../libs/api'
    import InlineContainer from '../InlineContainer.vue'
    import GroupItem from './GroupItem.vue'

    export default {
        data(){
            return {
                groups: []
            }
        },
        components: {
            'inline-container': InlineContainer,
            'group-item': GroupItem
        },
        mounted(){
            const api = new API()
            api.getSecureData('groups/list').then(groups => {
                this.groups = groups
            })
        },
        methods: {
            deleteFromList(id){
                for(let group in this.groups)
                    if(this.groups[group].id == id) this.groups.splice(group, 1)
            }
        }
    }
</script>
