<template>
    <block block-width="48%">
        <router-link :to="`/admin/works/check/${work.id}`" style="text-decoration: none">
            <span class="p-like default-text-color sm-top-padding less-size">
                {{work.groupName}}
            </span>
            <h3 class="bright-text-color">
                {{work.taskName}}
            </h3>
            <span class="p-like default-text-color sm-top-padding less-size">
                {{work.created_at}} | {{work.userName}}
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