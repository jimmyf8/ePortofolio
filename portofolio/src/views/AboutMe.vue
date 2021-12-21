<template>

 <section>
    <div class="container-fluid">
      
      <div class="jumbotron">
         <h1>Qui suis je?</h1>
          <article>
            <h4>
              "Je suis un développeur web Javascript, qui a toujours été
              passionné par l'informatique ayant une expérience de webmaster
              dans la vie associative.
            </h4>
          </article>
          <br />
          <article>
            <h4>
              Puis grâce à une formation longue de développeur web organisée par
              Openclassrooms, j'ai perfectionné toutes mes compétences
              informatiques à travers de nombreux projets professionels.
            </h4>
          </article>
          <br />
          <article>
            <h4>
              Désormais je suis à la recherche d'une entreprise pour entamer ma
              carrière professionnelle."
            </h4>
          </article>
        
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
    </div>
  </section>










  
</template>

<script>
export default {
  name: "AboutMe",
  components: {},
};
</script>

<style lang="scss" scoped>
section {
  background-image: url("../assets/house.jpg");
  
  align-items: center;
  justify-content: center;
  display: flex;
  height: 170vh;
}
.jumbotron-fluid {
  background: transparent;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: flex;
}
.jumbotron{
   background: transparent;
}

h1 {
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 6.5vmax;
  font-family: serif;
  color: rgb(0, 0, 0);
}
h4 {
  width: 100%;
  margin: 0px;
  padding: 0px;
  font-size: 3.4vmax;
  color: rgb(0, 0, 0);
}
article{
  margin: 30px;
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