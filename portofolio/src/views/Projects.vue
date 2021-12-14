<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="../assets/logo_oricono.png"
        alt="Card image cap"
      />
      <div class="card-body">
          <h2>Projet: Teddie </h2>
        <p class="card-text">E-commmerce</p>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="../assets/ohmyfood.png"
        alt="Card image cap"
      />
      <div class="card-body">
            <h2>Projet: Ohmyfood</h2>
        <p class="card-text">Restaurant</p>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="../assets/soleil.png"
        alt="Card image cap"
      />
      <div class="card-body">
            <h2>Projet: Weather</h2>
        <p class="card-text">API</p>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="../assets/flame.png"
        alt="Card image cap"
      />
      <div class="card-body">
            <h2>Projet: Piiquante</h2>
        <p class="card-text">CRUD + API</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
.container {
  margin: 50px;

  display: flex;
  justify-content: space-between;
}
.card{
    height: 500px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
}
img {
  width:100%;
  max-height: 300px;

}
.card-body{
    height: 20px;
}
</style>