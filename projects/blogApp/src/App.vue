<template>
  <div>
      <!-- <add-blog></add-blog> -->
      <show-blogs></show-blogs>
      <list-blogs></list-blogs>
  </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue'
import listBlogs from './components/listBlogs.vue'


export default {
  components: {
      'add-blog': addBlog,
      'show-blogs': showBlog,
      'list-blogs':listBlogs
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