
console.log('vue')
new Vue({
    el:'#vue-app',
    data:{
        name:"Mendis",
        job: "Shawn",
        age:35,
        website:'https://docentwebscan.live',
        websiteTag : '<a href="https://google.com"> hello google</a>'
    },

    methods:{
        greet:function(time){
        
            return "Good "+time +" "+this.name;
        },

        add:function(inc){
            this.age+=inc;
        },

        subtract:function(dec){
            if(this.age-dec>=0)
            this.age-=dec
        },

      
    }
})

new Vue({
    el:"#events",
    data:{
        x:0,
        y:0,
        age:'',
        name:''
    
    },
    methods:{
        updateXY:function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;

        },

        click:function(){
            alert("link clicked")
        },

        logName:function(event){

        },
        logAge: function(){
            console.log("you entered your age");
        
        }
    }
})


new Vue({
    el:"#instance3",
    data:{
        age:20,
        a:0,
        b:0
    },
    methods:{
        // addToA:function(){
        //     return this.a+this.age
        // },

        // addToB: function(){
        //     return this.b+this.age;
        // }
    },

    computed:{

        addToA:function(){
            console.log("add to A")
            return this.a+this.age
        },

        addToB: function(){
            console.log("add to B")
            return this.b+this.age;
        }

    }
})