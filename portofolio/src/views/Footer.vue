<template>
  <footer class="text-center text-lg-start bg-light text-muted">
    <hr />
    <!-- Section: Social media -->
    <section id="social" class="jumbotron-center">
      
    </section>
    <hr />
    <!-- Section: Links  -->
    <section class="links">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col">
            <h2 class="text-uppercase fw-bold mb-4">Products</h2>
            <h3>Javascript</h3>
            <h3>Sass</h3>
            <h3>Vue</h3>
            <h3>Bootstrap</h3>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h4 class="text-uppercase fw-bold mb-4">Contact</h4>
              <h4 >
                <i class="fas fa-envelope me-3"></i>
                jimmy.farescourt@gmail.com
              </h4>
              <div class="i">
        <a href="https://twitter.com/Farescourt1" class="me-4 text-reset">
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jimmy-farescourt-500556205/"
          class="me-4 text-reset"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/jimmyf8" class="me-4 text-reset">
          <i class="fab fa-github"></i>
        </a>
      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style>
     footer{
        
         background: rgba(0,0,0,0.8);
     }
    
     a{ 
         color: rgb(255, 255, 255);
         
         
     }
     h3,h2,h4{
         color: rgb(0, 0, 0);
     }
     .i{
         max-width: 1600px;
         display: flex;
         justify-content: space-around;
         font-size: 30px;
         padding: 20px;
     }

     .i :hover{
         color: rgb(0, 0, 0);
     }
     
     
</style>