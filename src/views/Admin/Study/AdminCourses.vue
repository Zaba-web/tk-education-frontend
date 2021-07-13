<template>
    <div>
        <dashboard-view-title subtitle="Керування матеріалами">
            Навчальні матеріали
        </dashboard-view-title>
        <dashboard-section title="Загальна інформація" subtitle="Коротка довідка стосовно роботи системи">
            <default-block>
               <inline-container>
                   <instruction-item item-title="Розділ" >
                        Найбільшою структурною одиницеюнавчальних матеріалів є розділ. Він складається з тем.                   
                    </instruction-item>
                    <instruction-item item-title="Тема">
                        Тема визначає загальне питання, яке буде в ній розглянуто. Теми складаються з завдань.
                   </instruction-item>
                    <instruction-item item-title="Завдання">
                        Завдання розглядає конкретне питання теми. Воно містить в собі теоретичну інформацію та  практичну частину.
                   </instruction-item>
               </inline-container>
            </default-block>
        </dashboard-section>
        <dashboard-section title="Розділи" subtitle="Перелік зареєстрованих у системі розділів">
            <course-list display-mode="admin"></course-list>
        </dashboard-section>
    </div>
</template>

<script>
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    import CoursesList from "@/components/Dashboard/Study/Courses/CoursesList.vue"

    export default {
        components: {
            ...structureComponents,
            'course-list': CoursesList
        }
    }
</script>