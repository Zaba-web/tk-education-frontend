<template>
    <div>
        <form ref="form">
            <label for="login" class="bright-text-color">Назва</label>
            <input type="text" class="full-size" placeholder="Введіть назву групи" id='name' name="group-name" data-minlength="4" >
            <label for="password" class="bright-text-color">Майстер</label>
            <input type="text" class="full-size" placeholder="Введіть ім'я майстра в/н" id='master_vn' name="master-name" data-minlength="6" >
            <br><br>
            <button type="submit">
                    Створити
            </button>
        </form>
    </div>
</template>

<script>
    import Validator from '@/libs/validator'

    export default {
        mounted(){
            this.$nextTick(()=>{
                const validator = new Validator();
                validator.setTargetForm(this.$refs.form, true, 'post', `admin/groups/create`, 
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