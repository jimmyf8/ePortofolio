<template>
   <section >
    <h1>Qui suis je?</h1>
   
    <div class="box-timeline">
      <div  class="ligne"></div>

      <div class="rond r1" data-anim="1"><i class="fab fa-vuejs"></i></div>
      <div class="rond r2" data-anim="2"><i class="far fa-smile"></i></div>
      <div class="rond r3" data-anim="3"><i class="fas fa-laptop"></i></div>
      <div class="rond r4" data-anim="4"><i class="fas fa-fire-alt"></i></div>

      <div class="box b1" data-anim="1">
        <h2  v-scrollanimation >Je suis un développeur web Javascript!</h2>
        
        
    
      </div>
      <div  class="box b2" data-anim="2">
        <img v-scaleanimation src="@/assets/jimmyfarescourt-min.png" alt="">
        
       
     
      </div>
      <div class="box b3" data-anim="3">
         <p  v-scrollanimation>J'ai toujours été
              passionné par l'informatique ayant une expérience de webmaster
              dans la vie associative.<br><br>
           
        </p>
        <p v-scrollanimation>
          Puis grâce à une <strong> formation  de développeur web</strong> organisé par
              Openclassrooms, j'ai perfectionné toutes mes compétences
              informatiques à travers de nombreux <strong>projets professionnels</strong>.
        </p>
     
      </div>
      <div class="box b4" data-anim="4">
       
        <p  v-scrollanimation >
          Désormais je suis à la recherche d'une entreprise pour entamer ma
              carrière professionnelle."
        </p>
      
      </div>
      

    </div>
  
   
     <Footer/>
  </section>
</template>

<script>
import Footer from '@/components/Footer.vue' 
export default {
    name:"AboutMe",
    components:{
        Footer
    }
}
</script>

<style lang="scss" scoped>
section {
  background: #333;
  height: 110vh;
   @media  (orientation:landscape) {
   height: 100vh;
  }
}
i{
  color: white;
  &:hover{
     color:rgb(224, 248, 88);
  }
}

h1 {
  text-align: center;
  padding: 240px 0;
  color: #f1f1f1;
  -webkit-animation: swing-in-top-fwd 0.5s
  cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  height: 100vh;
}
img{
  width: 85%;
  
}
h2{
  padding: 20px;
}

div.box-timeline {
  width: 100%;
  height: 1500px;
  background: #f1f1f1;
  position: relative;
 

 
}


/**
 * ----------------------------------------
 * animation swing-in-top-fwd
 * ----------------------------------------
 */
@-webkit-keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}
@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}

.ligne {
  height: 1000px;
  width: 8px;
  margin: 0 auto;
  background: #333;
}

.rond {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #333;
  position: absolute;
  border: 1px solid #000;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}
/* 1000 - 160 + 80 / 3 =~ 306 */
.r1 {
  top: 80px;
}
.r2 {
  top: 386px;
}
.r3 {
  top: 692px;
}
.r4 {
  top: 1000px;
}

.box {
  color: #333;
  width: 400px;
  min-height: 150px;
  padding: 20px;
  border-radius: 3px;
  height: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  &:hover{
      box-shadow: 0 10px 15px rgba(218, 126, 6, 0.5);
  }
  
}

.b1 {
  top: 80px;
  left: calc(50% - 270px);
  
}
.b2 {
  top: 386px;
  left: calc(50% + 270px);
}
.b3 {
  top: 692px;
  left: calc(50% - 270px);
 
}
.b4 {
  top: 1000px;
  left: calc(50% + 270px);
}

.box p {
  line-height: 20px;
  font-size: 18px;
  margin: 10px 0 20px 0;
  
}

.before-enter{
  opacity: 0;
  transform: translateX(100px);
  transition: all 2s ease-out;
 
}

.enter{
  opacity: 1;
  transform: translateX(0px);
}
.before-enters{
  opacity: 0;
  transform: translateX(100px) rotate(45deg);
  transition: all 1s ease-out;
 
}

.enters{
  opacity: 1;
  transform: translateX(0px) rotate(0deg);
  
 
}




@media screen and (max-width: 1000px) {
  .ligne {
    position: relative;
    left: 200px;
  }
  .rond {
    left: calc(50% + 200px);
  }
  .box {
    left: calc(50% - 50px);
  }
 
}
@media screen and (max-width: 768px) {
  .ligne {
   display: none;
  }
  .rond {
    display: none;
  }
  .box {
    width: 80%;
  
    margin: 50px 50px 50px 50px;
  }
  .b1 {
   width: 90%;
  
}
.b2 {
 width: 90%;
}
.b3 {
  width: 90%;
  margin:  20px  0px  0px  50px;
}
.b4 {
 width: 90%;
}
   img{
    width: 50%;
  }
}
@media screen and (max-width: 400px) {
  .ligne {
   display: none;
  }
  .rond {
    display: none;
  }
  .box {
    width: 95%;

   padding: 8px;
  
  }
   img{
    width: 70%;
  }
  
}
</style>