<template>
  <div class="container">
    <div class="front">
      <div class="title">
        <h3>Front end</h3>
      </div>
      <div class="card">
        <div class="image">
          <img
            class="card-img-top"
            src="../assets/logo.png"
            alt="Card image cap"
          />
          <p class="card-text">Vue</p>
        </div>

        <div class="image">
          <img
            class="card-img-top"
            src="../assets/bootstrap.png"
            alt="Card image cap"
          />
          <p class="card-text">Bootstrap</p>
        </div>

        <div class="image">
          <img
            class="card-img-top"
            src="../assets/sass.png"
            alt="Card image cap"
          />
          <p class="card-text">Sass</p>
        </div>

        <div class="image">
          <img
            class="card-img-top"
            src="../assets/javascript.png"
            alt="Card image cap"
          />
          <p class="card-text">Javascript</p>
        </div>
      </div>
    </div>
    <div class="back">
      <h3>Back end</h3>
      <div class="image">
        <img
          class="card-img-top"
          src="../assets/node_js.png"
          alt="Card image cap"
        />
        <p class="card-text">Node.js</p>
      </div>
      <div class="image">
          <img
            class="card-img-top"
            src="../assets/javascript.png"
            alt="Card image cap"
          />
          <p class="card-text">Javascript</p>
        </div>
    </div>
    <div class="db">
      <h3>Databases</h3>
      <div class="image">
        <img
          class="card-img-top"
          src="../assets/mysql.png"
          alt="Card image cap"
        />
        <p class="card-text">Mysql</p>
      </div>
      <div class="image">
        <img
          class="card-img-top"
          src="../assets/mongo_db.png"
          alt="Card image cap"
        />
        <p class="card-text">Mongo DB</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tech",
};
</script>

<style scoped>
.container {
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.card {
  padding: 0px;
  margin: 20px;
  width: 90%;
  justify-content: space-between;
}
.image {
  height: 300px;
  width: 200px;
}
img:hover {
  box-shadow: 0 2px 10px rgba(15, 41, 128, 0.5);
}
img {
  width: 200px;
  height: 300x;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
@media screen and (max-width: 900px) {
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
  .card {
    display: flex;
    flex-direction: column;
    padding: 50px;
  }
  .image {
    margin: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>