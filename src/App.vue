<template>

  <div>
    <header class = "header">
      <nav class="nav has-shadow">
        <div class="container">
          <div class="nav-left">
            <router-link  class="nav-item" to="/all">              
              <img class='logo' src="https://olxvlcccu.qnssl.com/blog/1vk1g.jpg?imageslim" alt="Bulma logo">
            </router-link>                        
          </div>
            <div class="nav-center">
              <router-link class="nav-item is-tab is-hidden-mobile" to="/all">all</router-link>
              <router-link class="nav-item is-tab is-hidden-mobile" to="/breast" >breast</router-link>
              <router-link class="nav-item is-tab is-hidden-mobile" to="/buttocks" >Buttocks</router-link>
              <router-link class="nav-item is-tab is-hidden-mobile" to="/leg" >leg</router-link>
              <router-link class="nav-item is-tab is-hidden-mobile" to="/face" >face</router-link>
              <router-link class="nav-item is-tab is-hidden-mobile" to="/stockings" >Stockings</router-link>
              <router-link class="nav-item is-tab is-hidden-mobile" to="/others" >others</router-link>
            </div>
          <span class="nav-toggle" v-on:click="toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu" v-on:click="toggle">
            <router-link  class="nav-item is-tab is-hidden-tablet" to="/all">all</router-link>
            <router-link  class="nav-item is-tab is-hidden-tablet" to="/breast" >breast</router-link>
            <router-link  class="nav-item is-tab is-hidden-tablet" to="/buttocks" >Buttocks</router-link>
            <router-link  class="nav-item is-tab is-hidden-tablet" to="/leg" >leg</router-link>
            <router-link  class="nav-item is-tab is-hidden-tablet" to="/face" >face</router-link>
            <router-link  class="nav-item is-tab is-hidden-tablet" to="/stockings" >Stockings</router-link>
            <router-link  class="nav-item is-tab is-hidden-tablet" to="/others" >others</router-link>
          </div>
        </div>
      </nav>
    </header>  
    <transition name="fade" mode="out-in"> 
        <router-view class="view container"></router-view>      
    </transition>
    <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Beauty </strong> by <a href="http://github.com/netpi">Netpi Chen</a>.  
           source code is <a href="https://github.com/beauty-enjoy/beauty">beauty</a>. 
           beauty data from <a href="https://github.com/beauty-enjoy/dbmeinv-firebase-api">dbmeinv-firebase-api</a>.
        </p>
        <p>
          <a class="icon" href="https://github.com/beauty-enjoy/beauty">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  computed: Object.assign({},
    mapState(['toggleClassName'])
  ),
  methods: {
    toggle: () => {
      const toggle = document.querySelector('.nav-toggle')
      const menu = document.querySelector('.nav-menu')
      toggle.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    }
  }
}
</script>

<style lang="scss" >
$gray: #dbdbdb;
$turquoise : rgba(255, 56, 96, 0.58);
@import "./scss/global" ;
@import "node_modules/bulma/bulma" ;

body {
  padding-top: 55px
}
.fade-enter-active, .fade-leave-active{
  transition: all .2s ease
}
.fade-enter, .fade-leave-active{
  opacity: 0
  }
.nav-item img {
    max-height: 2.55rem;
}
.header {
    position: fixed;
    z-index: 999;
    height: 55px;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    background-color: white;
}
.view {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding: 45px 10px;
}
.footer {
  background-color: white ;
  box-shadow: 0px 0px 2px rgba(255, 56, 96, 0.2);
}


</style>
