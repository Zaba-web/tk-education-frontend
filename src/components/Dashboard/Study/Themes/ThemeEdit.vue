<template>
    <div>
        <form ref="form">
            <label for="name" class="bright-text-color">Назва</label>
            <input type="text" class="full-size" placeholder="Введіть назву теми" id='name' name="name" data-minlength="4" :value="themeData.title">
            <br><br>
            <button type="submit">
                    Зберегти 
            </button>
        </form>
    </div>
</template>

<script>
    import Validator from '@/libs/validator'

    export default {
        computed: {
            themeData(){
                return this.$store.getters.inputSidebarContentData.meta
            }
        },

        mounted(){
            this.$nextTick(()=>{
                const validator = new Validator();
                validator.setTargetForm(this.$refs.form, true, 'put', `education/theme/update/${this.themeData.id}`, 
                response => {
                    this.$store.commit('UPDATE_LIST', '.themes-list-reload')
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