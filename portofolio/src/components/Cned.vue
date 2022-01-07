<template>
     <div class="container-fluid col  p-5 ">
        <div class="container ">
        <img
          class="img-responsive"
          src="../assets/CNED_Logo-min.jpg"
          alt="Card image cap" style="width:50%"
        />

        </div><br>
        <div class="container">
        <h2>BTS Assistant de Gestion de PME-PMI, CNED niveau 2ème année</h2><br>
           
            <p v-scrollanimation>Gestion des plannings</p>
            <p v-scrollanimation>Gestion du courrier </p>
            <p v-scrollanimation>Préparation et archivage des dossiers </p>
            <p v-scrollanimation>Gestion administrative</p>
            <p v-scrollanimation>Gestion des stocks</p>
            <p v-scrollanimation>Relation clients</p>
            <p v-scrollanimation>Participation à la stratégie commerciale </p>
        </div>
      </div>

</template>

<script>
export default {
    name:"Cned"
}
</script>

<style lang="scss" scoped>
.container-fluid{
  max-height: 200vh;
  
  display: flex;
  flex-wrap: wrap;
  background: rgb(255, 255, 255);
}
.before-enter{
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
 
}

.enter{
  opacity: 1;
  transform: translateY(0px);
}
</style>