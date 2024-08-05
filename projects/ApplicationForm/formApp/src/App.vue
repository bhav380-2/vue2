<template>

    <div>
        <form-helper>

            <div slot="form-header">
                <h3>This is title of form</h3>
                <p> info about form</p>
            </div>

            <div slot="form-fields">
                <input type="text" placeholder="name" required>
                <input type="password" placeholder="password" required >

            </div>

            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>
        </form-helper>
    </div>
 
</template>

<script>

import Form from './components/Form.vue';

export default {

    components:{
        'form-helper':Form
    },

    data(){

        return{
            title:"I am a dynamic slot title"
        }

    }
 
}
</script>

<style scoped>



</style>
