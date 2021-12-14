<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
       <router-link to="/aboutme">Qui suis je?</router-link> |
      <router-link to="/formation">Ma formation</router-link> |
      <router-link to="/skills">Mes compétences</router-link> |
      <router-link to="/projects">Mes projets</router-link> |
      <router-link to="/contact">Me contacter</router-link> |
      

     
      <router-view/>
    </div>

    
   
    
    
    <div>
  
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

<style scoped>
@import url("./style/reset.css");
#app {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
