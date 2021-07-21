<template>
    <div>
        <form @submit.prevent="submitForm">
            <select name="group_id" class="full-size" v-model="groupIndex">
                <option value="0" disabled selected>Оберіть групу</option>
                <option v-for="(group, index) in groups" :key="index" :value="index">{{group.name}}</option>
            </select>
            <input type="hidden" :value="themeId">
            <br><br>
            <button>
                    Надати
            </button>
        </form>
    </div>
</template>

<script>
    import API from '@/libs/api'

    export default {
        data(){
            return {
                api: {},
                groups: [],
                groupIndex: 0
            }
        },

        computed: {
            themeId(){
                return this.$store.getters.inputSidebarContentData.meta.id
            },
            themeName(){
                return this.$store.getters.inputSidebarContentData.meta.title
            }
        },

        methods: {
            submitForm(){
                this.api.post(`education/theme/grant-access`, {
                    group_id: this.groups[this.groupIndex].id,
                    group_name: this.groups[this.groupIndex].name,
                    theme_id: this.themeId,
                    theme_title: this.themeName
                }).then(response => {
                    this.$emit('onsuccess', response.data)
                }).catch(error => {
                     this.$emit('onerror', error)
                })
            }
        },

        mounted() {
            this.api = new API()

            this.api.getSecureData(`groups`).then(response => this.groups = response)
        }
    }
</script>