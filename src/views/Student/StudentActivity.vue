<template>
    <div>
        <dashboard-view-title subtitle="Інформація про ваш прогрес у навчанні">
            Активність
        </dashboard-view-title>
        <dashboard-section title="Таблиця" subtitle="З даними про поточний стан надісланих вами робіт">
            <dashboard-table :table-header="['Завдання', 'Перевірено', 'Дата здачі роботи', 'Оцінка', 'Коментар']">
                <tr v-for="(task, index) in activity" :key="index">
                    <td class='p-like default-text-color less-size'>{{task.task}}</td>
                    <td class='p-like default-text-color less-size'>
                        <span :class="{
                            'green-color': task.checked == 1,
                            'yellow-color': task.checked == 0
                        }">
                            {{task.checked == 0 ? 'Ні' : 'Так'}}
                        </span>
                    </td>
                    <td class='p-like default-text-color less-size'>{{task.date}}</td>
                    <td class='p-like default-text-color less-size'>{{task.mark != null ? task.mark : '-'}}</td>
                    <td class='p-like default-text-color less-size'>{{task.comment}}</td>
                </tr>
            </dashboard-table>
        </dashboard-section>
    </div>
</template>

<script>
    import API from "@/libs/api"
    import {structureComponents} from "@/libs/dashboardComponentsLoader"
    
    export default {
        components: {
            ...structureComponents
        },

        data() {
            return {
                api: null,
                activity: []
            }
        },

        mounted() {
            this.api = new API()
            this.api.getSecureData('study/activity').then(response => {
                for(let item in response.works)
                    this.activity.unshift(response.works[item])
                    
            })
        }
    }
</script>