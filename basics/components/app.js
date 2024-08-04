Vue.component('greeting',{
    template:'<p>Hey there, I am {{name}} <button v-on:click="changeName">Change name</button> </p>',
    data : function(){
        return {
            name:"Yoshi"
        }
    },
    methods:{
        changeName: function(){
            this.name = "Mario"
        }
    }
})


new Vue ({
    el:"#vue-app-one"
})

new Vue({
    el:"#vue-app-two"
})

new Vue ({
    el:"#vue-app-three",
    data:{
        output:''

    },
    methods:{
        readRefs:function(){
            this.output =  this.$refs.input.value;

        }
    }
    
})