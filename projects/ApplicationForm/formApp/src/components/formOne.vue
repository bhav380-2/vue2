<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form One - Contact Us</h3>
                <p>Fill in this form to contact us</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required />
                <label>Your Message:</label>
                <textarea></textarea>
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Send</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
import Form from './Form.vue'

export default {

    components:{
        'form-helper':Form
    },

    
    data() {

        return {
        }

    },
    methods:{
        handleSubmit: function(){
            
        }
    }

}
</script>

<style scoped></style>
