<template>
 <section><!--header-->
        <div class="container-fluid">
           
            <div class="jumbotron ">
                <div class="row">
                    <div class="col-sm-8 ">
                        <a class="nav-link" href="#"> <img class="img-responsive" src="../assets/logo_oricono.png" alt="Chania" style="width:100%"></a>
                    </div>
                    <div class="col-sm-4">
                        <h2 id="titre">Projet: Oricono</h2>
                        <p id="titre">API</p>
                        <a class="button" href="">démo</a>
                        <a class="button" href="https://github.com/jimmyf8/teddies"><i class="fas fa-laptop-code"></i></a>
                        
                    </div>
                </div>
            </div>    
            <div class="jumbotron ">
                <div class="row">
                    <div class="col-sm-8 ">
                        <a class="nav-link" href="#"> <img class="img-responsive" src="../assets/flame.png" alt="Chania" style="width:30%"></a>
                    </div>
                    <div class="col-sm-4">
                         <h2 id="titre">Projet: Piiquante</h2>
                        <p id="titre">API</p>
                        <a class="button" href="">démo</a>
                        <a class="button" href="https://github.com/jimmyf8/sauce_piquante"><i class="fas fa-laptop-code"></i></a>
                        
                    </div>
                </div>
            </div> 
            <div class="jumbotron ">
                <div class="row">
                    <div class="col-sm-8 ">
                        <a class="nav-link" href="#"> <img class="img-responsive" src="../assets/soleil.png" alt="Chania" style="width:80%"></a>
                    </div>
                    <div class="col-sm-4">
                         <h2 id="titre">Projet: AppliMétéo</h2>
                        <p id="titre">API</p>
                        <a class="button" href="">démo</a>
                        <a class="button" href="https://github.com/jimmyf8/weather_report"><i class="fas fa-laptop-code"></i></a>
                      
                </div>
                </div>
            </div> 
            <div class="jumbotron ">
                <div class="row">
                    <div class="col-sm-8 ">
                        <a class="nav-link" href="#"> <img class="img-responsive" src="../assets/ohmyfood.png" alt="Chania" style="width:80%"></a>
                    </div>
                    <div class="col-sm-4">
                         <h2 id="titre">Projet: Ohmyfood</h2>
                        <p id="titre">API</p>
                        <a class="button" href="">démo</a>
                        <a class="button" href="https://github.com/jimmyf8/restauration"><i class="fas fa-laptop-code"></i></a>
                        
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
  name: "myProjects",
  components: {
    
  },
};
</script>

<style lang="scss" scoped>
section {
  

  align-items: center;
  justify-content: center;
  display: flex;
 

  -webkit-animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}


/**
 * ----------------------------------------
 * animation flip-in-hor-top
 * ----------------------------------------
 */
@-webkit-keyframes flip-in-hor-top {
  0% {
    -webkit-transform: rotateX(-80deg);
    transform: rotateX(-80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
}
@keyframes flip-in-hor-top {
  0% {
    -webkit-transform: rotateX(-80deg);
    transform: rotateX(-80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 1;
  }
}

.jumbotron{
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
   font-size: 6vmax;
    &:hover{
    background: rgba(38, 78, 163, 0.363);
    transition: 1.5s;
  }
}

.button{
  
  color: black;
  font-size: 6vmax;
  padding: 15px;
  margin: 15px;
}

#link{
  display: flex;
  justify-content: space-around;
  font-size: 5vmax;
  a {
    color: black;
    &:hover{
      color: rgb(255, 2, 2);
    }
  }
  
}


</style>