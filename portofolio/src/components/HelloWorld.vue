<template>
  <section>
    <div class="container-fluid">
      <div class="jumbotron">
        <h1>{{ msg }}</h1>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  color: #ece9e9;
  font-size: 8vmax;
  -webkit-animation: tracking-in-expand 4.7s ;
	animation: tracking-in-expand 4.7s ;
}
.button {
  padding: 20px;
  transition-duration: 0.4s;
  margin-left: 150px;
  -webkit-animation: bounce-in-right 1.1s both;
  animation: bounce-in-right 1.1s both;
}
/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
#link {
  display: flex;
  justify-content: space-around;
  font-size: 5vmax;
  a {
    color: rgb(255, 255, 255);
    &:hover{
       color: rgb(255, 0, 0);
    }
  }
}


.jumbotron {
  height: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
