<template>
  <div class="contact">
    
    <div class="container">
      <h1>Vous voulez me contacter et me suivre</h1>
      <div>
        <span
          ><p><i class="fab fa-github"></i></p>
        </span>
      </div>
      <div>
        <span>
          <p><i class="fab fa-linkedin"></i></p>
        </span>
      </div>
      <div>
        <span>
          <p><i class="far fa-envelope"></i></p>
        </span>
      </div>
      
    </div>
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="../assets/jimmyfarescourt.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">Bonjour, vous avez le choix!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Me",
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-animation: bounce-in-left 1.5s both;
  animation: bounce-in-left 1.5s both;
}
h1{
  width: 650px;
  font-size: 4vmax;
}
.contact {
  height: 100vh;
  padding: 60px;
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.card {
  
   
  -webkit-animation: slide-in-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
/**animation*/
/*image*/
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
/*icone*/
@-webkit-keyframes bounce-in-left {
  0% {
    -webkit-transform: translateX(-600px);
    transform: translateX(-600px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(-68px);
    transform: translateX(-68px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(-28px);
    transform: translateX(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-left {
  0% {
    -webkit-transform: translateX(-600px);
    transform: translateX(-600px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(-68px);
    transform: translateX(-68px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(-28px);
    transform: translateX(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
/*icone active*/
@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

/*icone*/
i {
  width: 20px;
  font-size: 70px;
  color: rgb(75, 75, 75);
}
span :active {
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
}
span :hover {
  transform: scale(1.1);
  color: rgb(21, 65, 122);
}


.card-body {
  display: flex;
  margin-left: 130px;
  width: 500px;
  font-size: 2vmax;
}
/**mobile */
@media screen and (max-width: 900px) {
  
    .container {
     display: flex;
     width: 100%;
   
     
    }
  .card{
      height: 200px;
      

    
  }
    .contact{
        padding-bottom: 50px;
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }
    img{
        width:400px;
        margin-top: 20px;
        margin-bottom: 10px;
       
    }
    .card-body {
     display: flex;
     margin-left: 130px;
      width: 200px;
      
}
i {
  width: 400px;
  font-size: 50px;
  color: rgb(75, 75, 75);
}
h1{
  position: relative;
  bottom: 410px;
  right: 140px;
}
}
</style>