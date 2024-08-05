<template>
    <div>
        <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>

        <button v-on:click="formOne">Show form one</button>
        <button v-on:click="formTwo">Show form two</button>
    </div>
</template>

<script>

import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue'

export default {

    components:{
        'form-one':formOne,
        'form-two':formTwo
    },

    data(){

        return{
            title:"I am a dynamic slot title",
            component:'form-two'
        }

    },
    methods :{

        formOne: function(){

            this.component = 'form-one'

        },

        formTwo : function(){
            this.component = 'form-two'

        }

    }
 
}
</script>

<style scoped>



</style>
