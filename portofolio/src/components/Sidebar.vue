<template>
  <div class="container" :class="{'show': showSidebar}">
    <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i>
    </div>
    <div class="navigation-icons">
        <router-link to="/"><i class="fas fa-home"></i></router-link>
        <router-link to="/aboutme"><i class="fas fa-question"></i></router-link> 
        <router-link to="/formation"><i class="fas fa-info-circle"></i></router-link>
        <router-link to="/skills"><i class="fas fa-code-branch"></i></router-link>
        <router-link to="/projects"><i class="fas fa-briefcase"></i></router-link> 
       <router-link to="/contact"><i class="fas fa-user-circle"></i></router-link> 
      
      
      
      
    </div>
    <div class="navigation-links">
      <transition-group name="fade"> 
        <div v-show="showLink"  key="1"><router-link to="/">Home</router-link></div>
        <div v-show="showLink" key="2"><router-link to="/aboutme">Qui suis je?</router-link> </div>
        <div v-show="showLink" key="3"><router-link to="/formation">Formations</router-link> </div>
        <div v-show="showLink" key="4"><router-link to="/skills">Compétences</router-link></div>
        <div v-show="showLink" key="5"><router-link to="/projects">Projets</router-link></div>
        <div v-show="showLink" key="6"><router-link to="/contact">Contact</router-link></div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  export default {
      name:"Sidebar",
    data: () => {
      return {
        showSidebar: false,
        showLink: false
      }
    },
    methods: {
      showNav() {
        if(this.showSidebar) {
          this.showLink = false;
          setTimeout(() => {
            this.showSidebar = false;
          }, 500);
        }
        else {
          this.showSidebar = true;
          setTimeout(() => {
            this.showLink = true;
          }, 500);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    padding: 20px;
    min-height: calc(100vh - 20px);
    background-color: rgba(41, 118, 219, 0.212);
    border: solid #fff;
    border-width: 0 1px 0 0;
    z-index: 999;
    transition: all .5s ease-in-out;
    .control {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      margin-bottom: 10px;
      i {
        font-size: 2rem;
        cursor: pointer;
        transition: all .5s ease-in-out;
      }
    }
    &.show {
      width: 200px;
      .control > i {
        color: #fff;
        transform: rotateZ(-180deg);
      }
      .navigation-icons {
        color: #fff;
      }
    }
    .navigation-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50px;
      
      float: left;
      i {
        font-size: 1.8rem;
        padding: 10px 0;
        cursor: pointer;
        color: rgb(0, 0, 0);
        transition: all .5s ease-in-out;
        &:hover {
          color: #fff;
        }
      }
    }
    .navigation-links {
      padding-top: 10px;
     
      div {
        font-size: 1.1rem;
        padding-left: 10px;
        margin-bottom: 22px;
        color: rgb(0, 0, 0);
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  a{
     text-decoration: none;
     color: black;
     &:hover{
          color: #fff;
     }
  }
  @mixin nav-childs($values...) {
    @each $var in $values {
      &:nth-child(#{$var}) {
        transition: transform linear calc(.1s * #{$var}), display .5s;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    @include nav-childs(1,2,3,4,5);
  }
  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }
  


</style>