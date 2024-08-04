var one = new Vue({

    el:"#vue-app-one",
    data:{

        title:"Vue App One"

    },
    methods:{

    },
    computed:{

        greet: function(){
            return "hello from app 1"
        }

    }


})


var two = new Vue({
    el:"#vue-app-two",
    data:{
        title: "Vue App Two"

    },
    methods:{

        changeTitle:function(){
            one.title = "title changed"
        }

    },
    computed:{
        greet : function(){
            return "this is from app1"
        }
    }
        
    
})

two.title = "changed from outside";