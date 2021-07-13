<template>
    <div>
        <form ref="form">
            <label for="login" class="bright-text-color">Номер по списку</label>
            <input type="text" class="full-size" placeholder="Введіть номер по списку" id='name' name="student_number" data-minlength="1" >
            <label for="password" class="bright-text-color">Підгрупа</label>
            <input type="text" class="full-size" placeholder="Введіть номер підгрупи" id='master_vn' name="subgroup" data-minlength="1" >
            <br><br>
            <button type="submit">
                    Підтвердити
            </button>
        </form>
    </div>
</template>

<script>
    import Validator from '@/libs/validator'

    export default {
        computed: {
            studentId(){
                return this.$store.getters.inputSidebarContentData.meta
            }
        }, 

        mounted(){
            this.$nextTick(()=>{
                const validator = new Validator();
                validator.setTargetForm(this.$refs.form, true, 'put', `users/confirm/${this.studentId}`, 
                response => {
                    this.$store.commit('UPDATE_LIST', '.group-info-reload')
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