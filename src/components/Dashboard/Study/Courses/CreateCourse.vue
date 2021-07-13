<template>
    <div>
        <form ref="form">
            <label for="name" class="bright-text-color">Назва</label>
            <input type="text" class="full-size" placeholder="Введіть назву розділу" id='name' name="name" data-minlength="2" >
            <label for="description" class="bright-text-color">Опис</label>
            <input type="text" class="full-size" placeholder="Введіть опис розділу" id='description' name="description" data-minlength="10" >
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
                validator.setTargetForm(this.$refs.form, true, 'post', `education/course/create`, 
                response => {
                    this.$store.commit('UPDATE_LIST', '.courses-list-reload')
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