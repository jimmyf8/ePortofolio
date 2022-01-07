<template>
  <section v-scrollanimation>
    <div class="container-fluid ">
      <h1>Mes compétences</h1>

      <div class="btn btn-outline-warning mr-2" v-on:click="toggleOng1">
        Front end
      </div>
      <div class="btn btn-outline-warning mr-2" v-on:click="toggleOng2">
        Back end
      </div>
      <div class="btn btn-outline-warning mr-2" v-on:click="toggleOng3">
        Data bases
      </div>

      <div class="onglets card mb-5" v-if="toggle1">
        <Front />
      </div>
      <div class="onglets card mb-5" v-if="toggle2">
        <Back />
      </div>
      <div class="onglets card mb-5" v-if="toggle3">
        <Base />
      </div>

    </div>
    
      <div class="container-fluid m-0 p-0">
    <Footer />

      </div>
  </section>
</template>

<script>
import Front from "@/components/Frontend.vue";
import Base from "@/components/Base.vue";
import Back from "@/components/Backend.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Tech",
  data() {
    return {
      toggle1: true,
      toggle2: false,
      toggle3: false,
    };
  },
  methods: {
    toggleOng1: function () {
      this.toggle1 = true;
      this.toggle2 = false;
      this.toggle3 = false;
    },
    toggleOng2: function () {
      this.toggle1 = false;
      this.toggle2 = true;
      this.toggle3 = false;
    },
    toggleOng3: function () {
      this.toggle1 = false;
      this.toggle2 = false;
      this.toggle3 = true;
    },
  },
  components: {
    Front,
    Base,
    Back,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 110vh;
  background: linear-gradient(#7a7878, #8f91aa);
  display: grid;
 
  
  @media (orientation: landscape) {
    max-height: 120vh;
  }
}

h1 {
  color: white;
  font-size: 5vmax;
  font-family: Georgia, "Times New Roman", Times, serif;
}
h2 {
  color: white;
  font-family: monospace;
}
p {
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
</style>