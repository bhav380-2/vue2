<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type = "text" v-model="search" placeholder="search blogs"/>
        <div v-for="blog in filteredBlogs" class="single-blog">

            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
            <article>{{ blog.body  | snippet}}</article>

        </div>
    </div>
</template>
  
<script>
// Imports

export default {
    components: {
    },
    data() {
        return {
            blogs: [],
            search: ""

        }
    },
    methods: {

    },
    created() {
        this.$http.get("http://jsonplaceholder.typicode.com/posts")
            .then(function (data) {
                console.log(data);
                this.blogs = data.body.slice(0, 10)
            })
    },

    computed:{
        filteredBlogs: function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
    },
    filters:{

// _____technique 1_____
        // 'to-uppercase':function(value){
        //     return value.toUpperCase();
        // }
// _____technique 2 __neater__
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    
    directives:{
        'rainbow':{
            bind(el,binding,vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2,8)
            }
        }

    }


}
</script>
  
<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
}
</style>