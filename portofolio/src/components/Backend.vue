<template>
   <div class="jumbotron">
        <h2>Back end</h2>
        <div class="row">
          <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/javascript-min.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Javascript</p>
          </div>
           <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/node_js-min.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Node.js</p>
          </div>
          
         
        </div>
      </div>
</template>

<script>
export default {
    name:"back"
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