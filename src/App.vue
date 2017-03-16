<template>
  <div id="app">
    <header class = "header">
      <nav class="nav has-shadow">
        <div class="container">
          <div class="nav-left">
            <router-link  class="nav-item" to="/all">              
               <img class='logo' src="https://olxvlcccu.qnssl.com/blog/rrnhu.png?imageslim" alt="Beauty logo" />
            </router-link>                        
          </div>
            <div class="nav-center wrap_nav">
              <router-link v-for = "menu,index in menusValues" :key="index" class="nav-item is-tab is-hidden-mobile" :to="'/'+menu">{{menu}}</router-link>
            </div>
          <span class="nav-toggle" v-on:click="toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu wrap_nav" v-on:click="toggle">
            <router-link v-for = "menu,index in menusValues" :key="index" class="nav-item is-tab is-hidden-tablet" :to="'/'+menu">{{menu}}</router-link>
          </div>
        </div>
      </nav>
    </header>  
    <div class="view container">
      <transition 
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear
        appear-active-class=null
        > 
          <router-view class="animated"></router-view>      
      </transition>
    </div>
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
  </div>
</template>

<script>
'use strict'

import { mapState, mapGetters } from 'vuex'
import NProgress from 'nprogress'
export default {
  name: 'app',
  computed: Object.assign({},
    mapState(['toggleClassName', 'progress', 'menus']),
    mapGetters(['menusValues'])
  ),
  methods: {
    toggle: () => {
      const toggle = document.querySelector('.nav-toggle')
      const menu = document.querySelector('.nav-menu')
      toggle.classList.toggle('is-active')
      menu.classList.toggle('is-active')
    }
  },
  watch: {
    progress (to) {
      NProgress.start()
      NProgress.set(to)
    }
  }
}
</script>

<style lang="scss" >
@import '~animate.css';
.animated {
  animation-duration: .377s;
}
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';
@import "./scss/variable";
@import "~bulma" ;
@import "./scss/global" ;
@import "./scss/nprogress" ;

body {
  padding-top: 55px;
  background-color: #f4f4f4;
}

.nav-item {
  color: #999;
  img {
    max-height: 2.4rem !important;
    margin-top: 0.5rem
  }
  &:hover {
    color: #fff !important;  
  }            
}
.nav-toggle  {
  &:hover {
    background-color: $headerbg !important;
  }
  span {
    background-color: #999999 !important;
  }
}
.is-tab {
  &:hover {
      border-bottom-color:#fff !important;
  }
}
.router-link-active {
  color: #fff !important;
}

.header {
    position: fixed;
    z-index: 999;
    height: 55px;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    background-color: $headerbg;
    nav {
      background-color: $headerbg;
    }
}
.nav-menu {
  background-color: $headerbg;
}
.view {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding: 45px 10px;
    min-height: 600px;
}
.footer {
  background-color: white ;
  // box-shadow: 0px 0px 2px rgba(255, 56, 96, 0.2);
  border-top: 1px solid #e5e5e5;
}
</style>
