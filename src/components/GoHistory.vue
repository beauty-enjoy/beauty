<template  >
    <div class='history'>
        <i v-on:click='history(go)' class="fa fa-reply" aria-hidden="true"></i>
    </div>         
</template>

<script>

export default {
  name: 'GoHistory',
  props: {
    go: {
      type: Number,
      default: -1

    }
  },
  methods: {
    history (n) {
      window.history.go(n)
    }
  }
}
</script>

<style lang="scss" scope>
.history {
    width : 100%;
    background-color : rgba(255,255,255,0.99) ;
    position : fixed ; 
    z-index : 998 ;
}
</style>
