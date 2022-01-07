<template>
  <section>
    <!--header-->
    <div class="container-fluid">
      <h1>Mes projets</h1>
      <div class="btn btn-outline-warning mr-2" v-on:click="toggleOng4">
        Weather
      </div>
      <div class="btn btn-outline-warning mr-2" v-on:click="toggleOng2">
        Ohmyfood
      </div>
      <div class="btn btn-outline-warning mr-2" v-on:click="toggleOng3">
        Orinoco
      </div>
      <div class="btn btn-outline-warning mr-2" v-on:click="toggleOng1">
        Piiquante
      </div>
    <div class="onglets card mb-5" v-if="toggle4">
        <Weather />
    </div>

      
      <div class="onglets card mb-5" v-if="toggle2">
        <Ohmyfood />
      </div>
      
      <div class="onglets card mb-5" v-if="toggle3">
      <Orinoco />
      </div>
      <div class="onglets card mb-5" v-if="toggle1">
        <Piiquante />
      </div>
    </div>
    <Footer/>
    
     
        
 
  </section>
</template>

<script>
import Piiquante from "@/components/Piiquante.vue";
import Weather from "@/components/Weather.vue";
import Ohmyfood from "@/components/Ohmyfood.vue";
import Orinoco from "@/components/Orinoco.vue";
import Footer from '@/components/Footer.vue' 
export default {
  name: "myProjects",
  components: {
    Piiquante,
    Weather,
    Ohmyfood,
    Orinoco,
    Footer
  },
  data() {
    return {
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: true,
    };
  },
  methods: {
    toggleOng1: function () {
      this.toggle1 = true;
      this.toggle2 = false;
      this.toggle3 = false;
      this.toggle4 = false;
    },
    toggleOng2: function () {
      this.toggle1 = false;
      this.toggle2 = true;
      this.toggle3 = false;
      this.toggle4 = false;
    },
    toggleOng3: function () {
      this.toggle1 = false;
      this.toggle2 = false;
      this.toggle3 = true;
      this.toggle4 = false;
    },
    toggleOng4: function () {
      this.toggle1 = false;
      this.toggle2 = false;
      this.toggle3 = false;
      this.toggle4 = true;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  align-items: center;
  justify-content: center;
  background: linear-gradient(#929090, #9198e5);
  max-height: 200vh;
  -webkit-animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
   @media  (orientation:landscape) {
   max-height: 200vh;
  }
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

.jumbotron {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  font-size: 6vmax;
  &:hover {
    background: rgba(38, 78, 163, 0.363);
    transition: 1.5s;
  }
}
h1 {
  padding: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 6.5vmax;
  font-family: serif;
  color: rgb(0, 0, 0);
}
.button {
  color: black;
  font-size: 6vmax;
  padding: 15px;
  margin: 15px;
}


</style>