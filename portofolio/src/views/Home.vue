<template>
  <div class="home">
   
     

   
	<div class="animation-area">
       <h1>Bienvenue sur mon ePortofolio <i class="fas fa-star-of-life"></i> </h1>
		<ul class="box-area">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
	<Footer/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";








export default {
  name: 'Home',
  components: {
    Footer

  
   
   
   
    
  
    
  }
}
</script>

<style lang="scss" scoped>
  .home{
    
    height: 100vh;
    
   
     align-items: center;
  justify-content: center;
  display: grid;
  }
  
  #link{
  display: flex;
  justify-content: space-around;
  font-size: 5vmax;
  a{
    color: black;
  }
  
}
h1 {
  color: #ffffff;
  font-size: 9vmax;
  -webkit-animation: tracking-in-expand 4.7s ;
	animation: tracking-in-expand 4.7s ;
  padding: 50px;
}
i{
   color: rgb(224, 248, 88);
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
* {
	margin: 0;
	padding: 0;
}
body {
	font-family: 'Baloo 2', cursive;
}
.banner-text {
	width: 100%;
	position: absolute;
	z-index: 1;
}



.animation-area {
	background-image: url("../assets/pc.jpg");
	width: 100%;
	height: 100vh;
}
.box-area {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.box-area li {
	position: absolute;
	display: block;
	list-style: none;
	width: 25px;
	height: 25px;
	background: rgba(255, 255, 255, 0.2);
	animation: animate 20s linear infinite;
	bottom: -150px;
  &:hover{
    background: rgb(224, 248, 88);
  }
}
.box-area li:nth-child(1) {
	left: 86%;
	width: 80px;
	height: 80px;
	animation-delay: 0s;
}
.box-area li:nth-child(2) {
	left: 12%;
	width: 30px;
	height: 30px;
	animation-delay: 1.5s;
	animation-duration: 10s;
}
.box-area li:nth-child(3) {
	left: 70%;
	width: 100px;
	height: 100px;
	animation-delay: 5.5s;
}
.box-area li:nth-child(4) {
	left: 42%;
	width: 150px;
	height: 150px;
	animation-delay: 0s;
	animation-duration: 15s;
}
.box-area li:nth-child(5) {
	left: 65%;
	width: 40px;
	height: 40px;
	animation-delay: 0s;
}
.box-area li:nth-child(6) {
	left: 15%;
	width: 110px;
	height: 110px;
	animation-delay: 3.5s;
}
@keyframes animate {
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
	}
	100% {
		transform: translateY(-800px) rotate(360deg);
		opacity: 0;
	}
}


</style>
