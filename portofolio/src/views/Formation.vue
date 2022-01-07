
<template>
  <section  v-scrollanimation>
    <div class="container-fluid  m-0 p-0">
      <h1>Mes formations</h1>
     
        <OC />
        <Cned />
    </div>
    <div class="container-fluid m-0 p-0">
      <Footer />
    </div>
  </section>
</template>

<script>
import OC from "@/components/Openclassrooms.vue";
import Cned from "@/components/Cned.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Formations",
  data() {
    return {
      toggle1: true,
      toggle2: false,
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
  },
  components: {
    OC,
    Cned,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2? family= Raleway:ital@1 & display=swap");
@import url("https://fonts.googleapis.com/css2? family= Raleway:ital@1 & display=swap");
@import url("https://fonts.googleapis.com/css2? family= Raleway:ital@1 & display=swap");
section {
  min-height: 100vh;

  display: grid;

 
  @media (orientation: landscape) {
    max-height: 300vh;
  }
}

.jumbotron {
  margin: 0px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    background: rgba(38, 78, 163, 0.363);
    transition: 1.5s;
  }
}
img {
  border-radius: 22px;
}
h1 {
  font-size: 5vmax;
  font-family: "Raleway", sans-serif;
  margin: 50px;
}
h2 {
  font-size: 2vmax;
  font-family: "Raleway", sans-serif;
}
p {
  font-size: 2vmax;
}

#link {
  display: flex;
  justify-content: space-around;
  font-size: 5vmax;
  a {
    color: black;
    &:hover {
      color: rgb(255, 2, 2);
    }
  }
}
//animation
.before-enter{
  opacity: 0;
  transform: translateX(100px);
  transition: all 2s ease-out;
 
}

.enter{
  opacity: 1;
  transform: translateX(0px);
}
@media screen and (min-width: 768px) {
  .home {
    background-image: url("../assets/keyboard_medium-min.jpg");
  }
}

@media screen and (min-width: 1000px) {
  .home {
    background-image: url("../assets/keyboard_very_big-min.jpg");
  }
}
@media screen and (min-width: 1440px) {
  .home {
    background-image: url("../assets/keyboard_very_big-min.jpg");
  }
}
@media screen and (min-width: 2560px) {
  .home {
    background-image: url("../assets/keyboard_big-min.jpg");
  }
}
</style>