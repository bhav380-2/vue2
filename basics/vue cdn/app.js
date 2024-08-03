
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
            console.log("you entered your name");
        },
        logAge: function(){
            console.log("you entered your age");
        
        }
    }
})