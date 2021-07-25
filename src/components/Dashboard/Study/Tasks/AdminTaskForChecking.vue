<template>
    <block block-width="48%" class="container">
        <router-link :to="`/admin/works/check/${work.id}`" style="text-decoration: none">
            <span class="p-like default-text-color sm-top-padding less-size">
                {{work.groupName}}
            </span>
            <h3 class="bright-text-color">
                {{work.taskName}}
            </h3>
            <span class="p-like default-text-color sm-top-padding less-size">
                {{work.created_at}} | {{work.userName}} <span v-if="work.mark != null" class="mark-container bright-text-color bg-fill-secondary-accent">{{work.mark}}</span>
            </span>
        </router-link>
    </block>
</template>

<script>
    import DashboardDefaultBlock from "@/components/Dashboard/DashboardDefaultBlock.vue"

    export default {
        components: {
            'block': DashboardDefaultBlock
        },
        
        props: {
            work: Object
        }
    }
</script>

<style lang="sass" scoped>
.mark-container
    padding: 0 10px
    font-size: 10px
    border-radius: 100px
    position: absolute
    top: -10px
    left: -10px
    cursor: default

.container:not(:first-child)
    @media (max-width: 600px)
        margin-top: 15px    
</style>