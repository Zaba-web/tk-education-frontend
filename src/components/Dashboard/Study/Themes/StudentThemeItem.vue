<template>
    <div>
        <inline-container mode="to-left">
            <h3 class="bright-text-color">
                {{themeName}}
            </h3>
            <span class="p-like default-text-color sm-top-padding less-size" v-if="avgMark > 0">
                Ваш середній бал за тему: {{avgMark}}
            </span>
        </inline-container>
    </div>
</template>

<script>
    import InlineContainer from "@/components/Dashboard/InlineContainer.vue"

    export default {
        props: {
            themeName: String,
            avgMark: Number
        },

        components: {
            'inline-container': InlineContainer
        }
    }
</script>