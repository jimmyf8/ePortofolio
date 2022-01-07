<template>
  <section>
    <div class="container-fluid">
      <h1>Contactez moi</h1>
      <h2>Suivez moi</h2>
      <div class="jumbotron">
        
        <div class="row">
          <div class="col">
            <a href="https://github.com/jimmyf8"><i class="fab fa-github-square"></i></a>
          </div>
          <div class="col">
            <a href="mailto:jimmy.farescourt@gmail.com"><i id="mail" class="fas fa-envelope-open-text"></i></a>
          </div>
          <div class="col">
            <a href="https://www.linkedin.com/in/jimmy-farescourt-500556205/"><i  class="fab fa-linkedin"></i></a>
          </div>
          <div class="col">
            <a href="https://www.youtube.com/channel/UC4cKfv-3phntTQH4fprxnsg"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
     
 
    </div>
    <Footer/>
    
  </section>
</template>

<script>
import Footer from '@/components/Footer.vue' 
export default {
  name: "Me",
  components: {
  Footer
    
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  min-height: 100vh;
  background: linear-gradient(217deg, rgba(180, 178, 178, 0.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(180, 184, 180, 0.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(68, 68, 161, 0.8), rgba(0,0,255,0) 70.71%);
   @media  (orientation:landscape) {
   max-height: 300vh;
  }
  .jumbotron {
    background-color: transparent;
    align-items: center;
    justify-content: center;
    display: flex;
    
  }
}
h1 {
  color: rgb(0, 0, 0);
   padding: 50px;
  font-size: 5vmax;
  -webkit-animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
/**
 * ----------------------------------------
 * animation tracking-in-expand-fwd
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
            transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px);
            transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
h2 {
  color: rgb(0, 0, 0);
   padding: 50px;
  font-size: 3vmax;
}
 a {
    color: rgb(255, 255, 255);
     font-size: 3.5vmax;
     &:hover{
       
    color: rgb(224, 248, 88);
    transform: 2s;
     }
  }

#mail{
  -webkit-animation: wobble-ver-right 0.8s both;
	animation: wobble-ver-right 0.8s both;
}
/**
 * ----------------------------------------
 * animation wobble-ver-right
 * ----------------------------------------
 */
@-webkit-keyframes wobble-ver-right {
  0%,
  100% {
    -webkit-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateY(-30px) rotate(6deg);
            transform: translateY(-30px) rotate(6deg);
  }
  30% {
    -webkit-transform: translateY(15px) rotate(-6deg);
            transform: translateY(15px) rotate(-6deg);
  }
  45% {
    -webkit-transform: translateY(-15px) rotate(3.6deg);
            transform: translateY(-15px) rotate(3.6deg);
  }
  60% {
    -webkit-transform: translateY(9px) rotate(-2.4deg);
            transform: translateY(9px) rotate(-2.4deg);
  }
  75% {
    -webkit-transform: translateY(-6px) rotate(1.2deg);
            transform: translateY(-6px) rotate(1.2deg);
  }
}
@keyframes wobble-ver-right {
  0%,
  100% {
    -webkit-transform: translateY(0) rotate(0);
            transform: translateY(0) rotate(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateY(-30px) rotate(6deg);
            transform: translateY(-30px) rotate(6deg);
  }
  30% {
    -webkit-transform: translateY(15px) rotate(-6deg);
            transform: translateY(15px) rotate(-6deg);
  }
  45% {
    -webkit-transform: translateY(-15px) rotate(3.6deg);
            transform: translateY(-15px) rotate(3.6deg);
  }
  60% {
    -webkit-transform: translateY(9px) rotate(-2.4deg);
            transform: translateY(9px) rotate(-2.4deg);
  }
  75% {
    -webkit-transform: translateY(-6px) rotate(1.2deg);
            transform: translateY(-6px) rotate(1.2deg);
  }
}

</style>