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
            <a href="mailto:jimmy.farescourt@gmail.com"><i class="fas fa-envelope-open-text"></i></a>
          </div>
          <div class="col">
            <a href="https://www.linkedin.com/in/jimmy-farescourt-500556205/"><i class="fab fa-linkedin"></i></a>
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
  name: "Me",
  components: {},
};
</script>

<style lang="scss" scoped>
.container-fluid {
  height: 100vh;
  background-image: url('../assets/keyboard_medium.jpg');

  .jumbotron {
    background-color: transparent;
    align-items: center;
    justify-content: center;
    display: flex;
    
  }
}
h1 {
   padding: 50px;
  font-size: 8vmax;
}
 a {
    color: black;
     font-size: 3.5vmax;
     &:hover{
       
    color: rgb(51, 45, 136);
    transform: 2s;
     }
  }

#link {
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