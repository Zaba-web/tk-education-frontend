<template>
    <div>
        <search-input label="Пошук" placeholder="Введіть назву теми" @search="searchTheme"></search-input>
        <br>
        <inline-container>
            <default-block block-width="45%">
                <reloader @reload='loadThemes' selector-class="themes-list-reload"></reloader>
            </default-block>
            <default-block block-width="45%">
                <creater component-to-open="themeCreate" :additional-data="{
                    title: 'Додати тему',
                    description: 'Для створення нової теми заповніть форму знизу.',
                    meta: courseId
                }"></creater>
            </default-block>
        </inline-container>
        <transition-group
            enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__fadeOutLeft"
        >
            <theme-item v-for="(theme, index) in themeListOutput" :key="index" :theme="theme" :object="themeListOriginal" :field="title" @deletedSuccessful="loadThemes"></theme-item>
        </transition-group>
    </div>
</template>

<script>
    import API from '@/libs/api'

    import {listInterationComponents} from '@/libs/dashboardComponentsLoader'

    import DashboardDefaultBlock from '@/components/Dashboard/DashboardDefaultBlock.vue'
    import InlineContainer from '@/components/Dashboard/InlineContainer.vue'
    import AdminThemeItem from '@/components/Dashboard/Study/Themes/AdminThemeItem.vue'
    import SearchInput from '@/components/Dashboard/SearchInput.vue'

    export default {
        components: {
            'theme-item': AdminThemeItem,
            'search-input': SearchInput,
            'default-block': DashboardDefaultBlock,
            'inline-container': InlineContainer,
            ...listInterationComponents
        },

        data(){
            return {
                api: null,
                themeListOriginal: [],
                themeListOutput: []
            }
        },
        
        props:{
            courseId: Number
        },

        methods: {
            copyThemeList(from){
                this.themeListOutput = []
                from.map(theme => this.themeListOutput.unshift(theme))
            },

            loadThemes(){
                this.api.getSecureData(`education/course/${this.$route.params.id}/themes`).then(response => { 
                    this.themeListOriginal = response
                    this.copyThemeList(this.themeListOriginal)
                })
            },

            searchTheme(searchQuery){
                if(searchQuery.length == 0) {
                    this.copyThemeList(this.themeListOriginal)
                    return ;
                }

                this.copyThemeList(this.themeListOriginal.filter(item => item.title.includes(searchQuery)))
            }
        },

        mounted(){
            this.api = new API()
            this.loadThemes()
        }
    }
</script>