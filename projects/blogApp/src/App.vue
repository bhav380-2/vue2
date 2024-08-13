<template>
  <div>
      <!-- <add-blog></add-blog> -->
      <show-blogs></show-blogs>
  </div>
</template>

<script>
// Imports
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue'

export default {
  components: {
      'add-blog': addBlog,
      'show-blogs': showBlog
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