<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!-- <p>{{ greeting() }}</p> -->
    <ninjas></ninjas>
  </div>

</template>

<script>
import Ninjas from './Ninjas.vue'

export default {
  components:{
    'ninjas':Ninjas
  },
  data(){
    return{

      title:"My App"

    }
  },
 

}
</script>

<style>

</style>
