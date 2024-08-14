<template>
  <div>

    <app-header>
      
    </app-header>

    <router-view></router-view>
      <!-- <add-blog></add-blog> -->
      <!-- <show-blogs></show-blogs>
      <list-blogs></list-blogs> -->
  </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue'
import listBlogs from './components/listBlogs.vue'

import header from './components/header.vue'


export default {
  components: {
      'add-blog': addBlog,
      'show-blogs': showBlog,
      'list-blogs':listBlogs,
      'app-header': header
  },
  data () {
      return {

      }
  },
  methods: {

  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>