
console.log('vue')
new Vue({
    el:'#vue-app',
    data:{
        name:"Mendis",
        job: "Shawn",
        website:'https://docentwebscan.live',
        websiteTag : '<a href="https://google.com"> hello google</a>'
    },

    methods:{
        greet:function(time){
        
            return "Good "+time +" "+this.name;
        }
    }
})

console.log("done")