<template>

<section>
   <div class="container-fluid">
    <h1>Mes compétences</h1>
     
      <div class="jumbotron">
        <h2>Front end</h2>
        <div class="row">
          <div class="col-sm-4">

            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/vue_sass.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Vue avec Sass</p>
          </div>
           <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/bootstrap.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Bootstrap</p>
          </div>
           <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/javascript.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Javascript</p>
          </div>
         
        </div>
      </div>
      <div class="jumbotron">
        <h2>Back end</h2>
        <div class="row">
          <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/javascript.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Javascript</p>
          </div>
           <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/node_js.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Node.js</p>
          </div>
          
         
        </div>
      </div>

      <div class="jumbotron">
        <h2>Databases</h2>
        <div class="row">
          <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/mysql.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Mysql</p>
          </div>
           <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/mongo_db.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Mongo DB</p>
          </div>
           
         
        </div>
      </div>

     <div class="jumbotron-fluid">
        <div id="link" class="row">
          <div class="col">
            <router-link to="/aboutme"
              ><i class="fas fa-question"></i
            ></router-link>
          </div>
          <div class="col">
            <router-link to="/formation"
              ><i class="fas fa-info-circle"></i
            ></router-link>
          </div>
          <div class="col">
            <router-link to="/skills"
              ><i class="fas fa-code-branch"></i
            ></router-link>
          </div>
          <div class="col">
            <router-link to="/projects"
              ><i class="fas fa-briefcase"></i
            ></router-link>
          </div>
          <div class="col">
            <router-link to="/contact"
              ><i class="fas fa-user-circle"></i
            ></router-link>
          </div>
          <div class="col">
            <router-link to="/"><i class="fas fa-home"></i></router-link>
          </div>
        </div>
      </div>
      </div>
</section>











</template>

<script>

export default {
  name: "Tech",
  components: {
   
  },
};
</script>

<style lang="scss" scoped>
  section{
    background-image: url('../assets/tech.jpg');
    align-items: center;
  justify-content: center;
  display: flex;
  }
 img{
   box-shadow: 0 2px 10px white;
   &:hover{
     box-shadow: 0 2px 10px rgba(0,0,0,3.5);
   }
 }
 .jumbotron{
   background: transparent;
 }
 h1{
   color: white;
   font-size: 5vmax;
   font-family: Georgia, 'Times New Roman', Times, serif;
 }
 h2{
   color: white;
   font-family: monospace;
 }
 p{
    color: white;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
 }
#link{
  display: flex;
  justify-content: space-around;
  font-size: 5vmax;
  a {
    color: rgb(255, 255, 255);
    &:hover{
      color: rgb(255, 2, 2);
    }
  }
  
}

</style>