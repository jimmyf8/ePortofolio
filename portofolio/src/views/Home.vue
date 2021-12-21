<template>
  <div class="home">
 
    
    <HelloWorld msg="Bienvenue sur mon  ePortofolio*"/>
  
   
    
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

<style lang="scss" scoped>
  .home{
    
    height: 100vh;
    background-repeat: no-repeat;
    background-image: url('../assets/apps.jpg');
    position: fixed;
    top: 0;
    left: 0;
     align-items: center;
  justify-content: center;
  display: flex;
  }
  
  #link{
  display: flex;
  justify-content: space-around;
  font-size: 5vmax;
  a{
    color: black;
  }
  
}


</style>
