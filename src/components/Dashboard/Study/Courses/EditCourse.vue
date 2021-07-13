<template>
    <div>
        <form ref="form">
            <label for="name" class="bright-text-color">Назва</label>
            <input type="text" class="full-size" placeholder="Введіть назву розділу" id='name' name="name" data-minlength="2" :value="courseData.title">
            <label for="description" class="bright-text-color">Опис</label>
            <input type="text" class="full-size" placeholder="Введіть опис розділу" id='description' name="description" data-minlength="10" :value="courseData.description">
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
            courseData(){
                return this.$store.getters.inputSidebarContentData.meta
            }
        }, 

        mounted(){
    
            let id = this.courseData.id

            this.$nextTick(()=>{
                const validator = new Validator();
                validator.setTargetForm(this.$refs.form, true, 'put', `education/course/update/${id}`, 
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