<template>
  <div id="app">
    <div class="jumbotron">
     
        
       
         

      <router-view />
       
  </div>
  </div>
</template>

<script>



export default {
  name: "App",
  components: {

     
    
  },
};
</script>

<style lang="scss" scoped>
#app {
   
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  height: 100vh;

}
.jumbotron{
  padding: 0px;
}




  



</style>
