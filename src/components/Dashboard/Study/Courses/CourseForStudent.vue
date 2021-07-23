<template>
    <div>
        <block block-width="340px">
            <h3 class='bright-text-color'>
                {{title}}
            </h3>
            <p class="default-text-color sm-top-padding less-size">
                {{description}}
            </p>
            <inline-container>
                <router-link :to="`/student/study/course/${id}`">
                    <button>Перейти</button>
                </router-link>
                <span class="default-text-color less-size p-like">Кількість тем: {{themeCount}}</span>
            </inline-container>
        </block>
    </div>
</template>

<script>
    import DashboardDefaultBlock from '@/components/Dashboard/DashboardDefaultBlock.vue' 
    import InlineContainer from '@/components/Dashboard/InlineContainer.vue'

    export default {
        components: {
            'block': DashboardDefaultBlock,
            'inline-container': InlineContainer
        },

        props: {
            title: String,
            description: String,
            id: Number,
            themeCount: Number
        }
    }
</script>