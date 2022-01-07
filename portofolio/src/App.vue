<template>
  <div id="app">
    <nav>
        <ul>
  
  <li><router-link to="/aboutme"
              ><i class="fas fa-question"></i
            ></router-link></li>
  <li> <router-link to="/formation"
              ><i class="fas fa-info-circle"></i
            ></router-link></li>
  <li> <router-link to="/skills"
              ><i class="fas fa-code-branch"></i
            ></router-link></li>
  <li><router-link to="/projects"
              ><i class="fas fa-briefcase"></i
            ></router-link></li>
 
  <li><router-link to="/contact"
              ><i class="fas fa-user-circle"></i
            ></router-link></li>
  <li><router-link to="/"><i class="fas fa-home"></i></router-link></li>
</ul>
    </nav>
 
  
         

      <router-view />
       
  
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
   
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  height: 100vh;

}
.jumbotron{
  padding: 0px;
}
nav{
  position: sticky;
  top: 0;
  background: rgb(0,0,0,0.9);
  padding: 20px;
  margin: 0px;
  z-index: 20;
  
  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  a{
    color: #ffffff;
    font-size: 2vmax;
    &:hover{
      color:rgb(224, 248, 88);
    }
  }
}
}



  



</style>
