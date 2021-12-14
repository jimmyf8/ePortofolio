<template>
  <div class="container">
    <div class="msg">
      <div class="title">
        <h1>{{ msg }}</h1>

        <div class="button">
          <img src="../assets/web_logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
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
<style scoped>
.container {
  height: 90vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.title {
  display: flex;
  width: 100%;
}
img {
  width: 500px;
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
 * animation bounce-in-right
 * ----------------------------------------
 */
@-webkit-keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
    transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
    transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
    transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
    transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
    transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
    transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@-webkit-keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
button:hover {
  background-color: #8fc5fa; /* Green */
  color: white;
}

button:active {
  background-color: #ece9e9;
  box-shadow: 0 5px rgb(248, 231, 231);
  transform: translateY(4px);
}

.msg {
  width: 70%;
}

h1 {
  font-size: 14vmin;
}
h2 {
  font-size: 4vmax;
}

a {
  color: #8a9791;
}
/*media*/
@media screen and (max-width: 900px) {
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .title {
    display: grid;
    width: 100%;
  }

  img {
    width: 200px;
  }

  .msg {
    width: 100%;
  }

  h1 {
    padding: 50px;
    font-size: 11vmin;
  }
  .button {
    margin-left: 0px;
  }
}
</style>
