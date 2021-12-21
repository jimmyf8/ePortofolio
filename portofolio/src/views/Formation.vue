
<template>
<section>
   <div class="container-fluid">
    <h1>Mes formations</h1>
     <div class="jumbotron">
        <div class="row">
          <div class="col-sm-8">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/oc_logo.png"
                alt="Card image cap" style="width:30%"
            /></a>
          </div>
          <div class="col-sm-4">
            <h2>Développeur Web, chez OpenClassrooms</h2>
            <p class="card-text">
              RNCP Développeur web niveau bac +2 Paris (7 mois)
            </p>
           
          </div>
        </div>
      </div>

      <div class="jumbotron">
        <div class="row">
          <div class="col-sm-8">
            <a class="nav-link" href="#"
              ><img
          class="img-responsive"
          src="../assets/CNED_Logo.jpg"
          alt="Card image cap" style="width:30%"
        /></a>
          </div>
          <div class="col-sm-4">
            <h2>BTS Assistant de Gestion de PME-PMI, CNED</h2>
            <p class="card-text">niveau 2ème année</p>
            
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
  name: "Formations",
  components: {},
};
</script>

<style lang="scss" scoped>
section{
  height: 150vh;
  align-items: center;
  justify-content: center;
  display: flex;
  
}

.container-fluid {
  

  
  -webkit-animation: bounce-in-top 1.1s both;
  animation: bounce-in-top 1.1s both;
}
.jumbotron{
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  &:hover{
    background: rgba(38, 78, 163, 0.363);
    transition: 1.5s;
  }
}
img{
  border-radius: 22px;
}
h1{
  font-size: 11vmax;
}
h2{
  font-size: 2vmax;
}
p{
  font-size: 2vmax;
}
/*animation*/
@-webkit-keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
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
@media screen and (min-width:768px) {
   .home{
    

   
    background-image: url('../assets/keyboard_medium.jpg');
   
  }
}

 @media screen and (min-width:1000px) {
   .home{
    

   
    background-image: url('../assets/keyboard_very_big.jpg');
   
  }
}
@media screen and (min-width:1440px) {
   .home{
    
  
   
    background-image: url('../assets/keyboard_very_big.jpg');
    
   
  }
}
 @media screen and (min-width:2560px) {
   .home{
    

   
    background-image: url('../assets/keyboard_big.jpg');
   
  }
}
</style>