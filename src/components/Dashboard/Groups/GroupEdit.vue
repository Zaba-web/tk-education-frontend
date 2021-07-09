<template>
    <div>
        <form ref="form">
            <label for="login" class="bright-text-color">Назва</label>
            <input type="text" class="full-size" placeholder="Введіть назву групи" id='name' name="group-name" data-minlength="4" v-model="groupData.groupName">
            <label for="password" class="bright-text-color">Майстер</label>
            <input type="text" class="full-size" placeholder="Введіть ім'я майстра в/н" id='master_vn' name="master-name" data-minlength="6" v-model="groupData.masterVn">
            <br><br>
            <button type="submit">
                    Зберегти
            </button>
        </form>
    </div>
</template>

<script>
    import Validator from '@/libs/validator'
    import API from '@/libs/api'

    export default {
        computed: {
            groupId(){
                return this.$store.getters.inputSidebarContentData.meta
            }
        },
        data(){
            return {
                groupData: {
                    masterVn: '',
                    groupName: ''
                }
            }
        },
        mounted(){
            const api = new API()
            api.get(`groups/single/${this.groupId}`).then(response => {
                if(response.data != null) {
                    this.groupData.masterVn = response.data.master_vn
                    this.groupData.groupName = response.data.name
                }
            })

            this.$nextTick(()=>{
                const validator = new Validator();
                validator.setTargetForm(this.$refs.form, true, 'put', `admin/groups/update/${this.groupId}`, 
                response => {
                    this.$store.commit('UPDATE_LIST', '.group-list-reload')
                    this.$emit('onsuccess', response.data)
                }, 
                error => {
                    this.$emit('onerror', error)
                })

                validator.setValidationObserver()
            })
        }
    }
</script>