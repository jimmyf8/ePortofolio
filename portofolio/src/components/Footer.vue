<template>
  <footer class="text-center text-lg-start bg-light text-muted">
    <hr />
    <!-- Section: Social media -->
    <section id="social" class="jumbotron-center">
      <div>
        <a href="https://twitter.com/Farescourt1" class="me-4 m-5  text-reset">
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jimmy-farescourt-500556205/"
          class="me-4 m-2 text-reset"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/jimmyf8" class="me-4 m-5 text-reset">
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC4cKfv-3phntTQH4fprxnsg"
          class="me-4 m-4 text-reset"
          ><i class="fab fa-youtube"></i
        ></a>
      </div>
    </section>
    <hr />
    <!-- Section: Links  -->
    <section>
      <div class="container text-center text-md-start mt-5">
        <div id="content" class="row mt-3">
          <div class="col">
            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            <p>Vue.js <i class="fab fa-vuejs"></i></p>
            <p>Sass, Bootstrap, Javascript</p>
          </div>
          <div class="col">
            <h6 class="text-uppercase fw-bold mb-4">Hébergement</h6>
              <p>
                Hostinger International Ltd. 61 Lordou Vironos Street 6023
                Larnaca, Cyprus
              </p>
          </div>
            <div class="col">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <a href="mailto:jimmy.farescourt@gmail.com">
              <i class="fas fa-envelope me-3 m-2"></i>
                
                <strong>jimmy.farescourt@gmail.com</strong>
              </a>
              <p class="col p-2">{{ copyright }}</p>
              <!--copyright-->
            </div>
         
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `copyright    ` + currentYear;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: gray;
}
i {
  font-size: 2vmax;
  &:hover {
    color: yellow;
  }
}
hr {
  margin: 0px;
}
#social{
  padding: 20px;
}
</style>