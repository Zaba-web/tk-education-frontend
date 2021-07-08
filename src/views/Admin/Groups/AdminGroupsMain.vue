<template>
    <div>
        <dashboard-view-title subtitle="Перелік груп та операції з ними">
            Керування групами
        </dashboard-view-title>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"

    export default {
        components: {
            ...structureComponents,
        }
    }
</script>