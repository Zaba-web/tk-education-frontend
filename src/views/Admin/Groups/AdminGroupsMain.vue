<template>
    <div>
        <dashboard-view-title subtitle="Перелік груп та операції з ними">
            Керування групами
        </dashboard-view-title>
        <dashboard-section title="Загальна інформація" subtitle="Коротка довідка стосовно роботи системи">
            <default-block>
               <inline-container>
                   <instruction-item item-title="Створення групи" :filled="true">
                        Створити групу можна шляхом заповнення простої форми, де потрібно вказати назву групи та ім'я майстра в/н.
                   </instruction-item>
                    <instruction-item item-title="Реєстрація">
                        Після створення група стає доступною для вибору під час реєстрації учнів.
                   </instruction-item>
                    <instruction-item item-title="Підтвердження" :filled="true">
                        З метою контролю коректності даних, підтвердження реєстрації учнів здійснюється вручну майстром в/н
                   </instruction-item>
               </inline-container>
            </default-block>
        </dashboard-section>
        <dashboard-section title="Зареєстровані групи" subtitle="Перелік зареєстрованих груп">
            <group-list :reloadable="true" :can-add-new="true"></group-list>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import GroupList from "@/components/Dashboard/Groups/GroupList.vue"

    export default {
        components: {
            ...structureComponents,
            'group-list': GroupList
        }
    }
</script>