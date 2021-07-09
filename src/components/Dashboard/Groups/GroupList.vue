<template>
    <div class="group-list-main-container">
        <inline-container mode="to-left">
            <transition-group
                enter-active-class="animate__animated animate__fadeInLeft"
                leave-active-class="animate__animated animate__fadeOutLeft"
            >
                <group-item v-for="(group, key) in groups" :key="key" :group="group" @deletedSuccessful="deleteFromList"></group-item>
            </transition-group>
            
            <block block-width = "321px" v-if="reloadable">
                <reloader @reload='loadGroups' selector-class="group-list-reload"></reloader>
            </block>

            <block block-width = "321px" v-if="canAddNew">
                <creater component-to-open="groupCreate" :additional-data="{
                    title: 'Створити групу',
                    description: 'Для створення нової групи заповніть форму знизу. Майте на увазі, що ім\'я групи повинно бути унікальним.',
                    meta: null
                }"></creater>
            </block>
            
        </inline-container>
    </div>
</template>

<script>
    import API from '@/libs/api'

    import {listInterationComponents} from '@/libs/dashboardComponentsLoader'

    import InlineContainer from '@/components/Dashboard/InlineContainer.vue'
    import GroupItem from '@/components/Dashboard/Groups/GroupItem.vue'
    import DefaultBlock from '@/components/Dashboard/DashboardDefaultBlock.vue'

    export default {
        data(){
            return {
                groups: []
            }
        },
        props: {
            reloadable: Boolean,
            canAddNew: Boolean
        },
        components: {
            ...listInterationComponents,
            'inline-container': InlineContainer,
            'group-item': GroupItem,
            'block': DefaultBlock
        },
        mounted(){
            this.loadGroups()
        },
        methods: {
            loadGroups(){
                const api = new API()

                api.getSecureData('groups/list').then(groups => {
                    this.groups = groups
                })
            },
            deleteFromList(id){
                for(let group in this.groups)
                    if(this.groups[group].id == id) this.groups.splice(group, 1)
            }
        }
    }
</script>

<style lang="sass">
.group-list-main-container
    animation: show-animation 1s forwards
</style>
