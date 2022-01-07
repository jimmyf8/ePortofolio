<template>
  <div class="jumbotron">
        <h2>Front end</h2>
        <div class="row">
          <div class="col-sm-4">

            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/vue_sass-min.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Vue avec Sass</p>
          </div>
           <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/bootstrap-min.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Bootstrap</p>
          </div>
           <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/javascript-min.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Javascript</p>
          </div>
         
        </div>
      </div>
</template>

<script>
export default {
    name:"front"
}
</script>

<style lang='scss' scoped>
     img{
   box-shadow: 0 2px 10px white;
   &:hover{
     box-shadow: 0 2px 10px rgba(0,0,0,3.5);
   }
 }
 .jumbotron{
   
   margin: 0px;
 }
</style>