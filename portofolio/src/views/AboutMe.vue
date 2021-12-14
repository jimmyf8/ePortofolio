<template>
  <div class="container-fluid ">
  <h3>Qui suis je?</h3>
  <img src="../assets/create.jpg" alt="Bird">
  <h4>"Je suis un développeur web Javascript, qui a toujours été passionné par l'informatique ayant une expérience de webmaster dans la vie associative.
       Puis grâce à une formation longue de développeur web organisée par Openclassrooms, j'ai perfectionné toutes mes compétences informatiques à travers de nombreux projets professionels. Désormais je suis à la recherche d'une entreprise pour entamer ma carrière professionnelle."</h4>
</div>

</template>

<script>
export default {
    name:'AboutMe'

}
</script>

<style scoped>
.container-fluid{
    background: rgb(255, 255, 255);
    padding: 0px;
    height: 100vh;
    box-sizing:border-box;
    
}
img{
    width: 400px;
    height: 400px;
    border-radius: 50%;
    float: left;
    shape-outside: circle();
    background-size: 100% 100%;
    margin: 20px;
    
}
h3{ padding: 20px;
    font-size:4.2vmax ;
    color: rgb(13, 148, 172);
}
h4{ width: 80%;
    padding-left: 190px;
    font-size:2.9vmax ;
    color: rgb(0, 0, 0);
}

@media screen and (max-width:758px) {
    .container-fluid{
     padding: 0px;
     height: 100hv;
     width: 100%;
    }
    h3{
    padding-bottom: 10px;
    
    
    }
    h4{ width: 80%;
    padding-left:70px;
    font-size:1.5vmax ;
    color: rgb(0, 0, 0);
    font-size:2.5vmax ;
}
    img{
    max-width: 300px;
    max-height: 300px;
    float: none;
    
}
}
</style>