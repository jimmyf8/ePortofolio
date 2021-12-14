<template>
  <div class="home">
 
    
    <HelloWorld msg="Bienvenue sur mon  ePortofolio"/>
    
    
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'




export default {
  name: 'Home',
  components: {
    HelloWorld,
  
    
  }
}
</script>

<style scoped>
  .home{
    padding: 80px;
    height: 100hv;
    
  }
  @media screen and (max-width:758px) {
    .home{
    padding: 0px;
    height: 100hv;
    
  }
  }
</style>
