<template>
    <block>
        <router-link :to="`/student/study/task/${id}`" style='text-decoration:none'>
            <span class="p-like default-text-color sm-top-padding">{{title}}</span>
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
            title: String,
            id: Number
        }
    }
</script>