<template>
     <div class="jumbotron">
        <h2>Databases</h2>
        <div class="row">
          <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/mysql-min.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Mysql</p>
          </div>
           <div class="col-sm-4">
            <a class="nav-link" href="#"
              ><img
                
                class="img-responsive"
                src="../assets/mongo_db-min.png"
                alt="Card image cap" style="width:30%"
            /></a>
            <p>Mongo DB</p>
          </div>
           
         
        </div>
      </div>
</template>

<script>
export default {
    name:"base"
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