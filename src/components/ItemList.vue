<template>
  <div >
    <Spinner :loading='loading' />            
    <div class='container' v-if='!loading'>
        <div class='wrap_page'>
            <div class='wrap_inner'>
                <pagination :urlPrefix='cidtype' :currentPage=currentPage :pageLength='Math.ceil( keys.length / pageSize)'/>
            </div>
        </div>
        <div class='wrap_items container'> 
            <CardList :items="items"/>
        </div>        
    </div>  
    
  </div>  
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Spinner from './Spinner.vue'
import CardList from './CardList.vue'
import Pagination from './Pagination.vue'

export default {
  name: 'Itemlist',
  props: {
    cid: Number
  },
  created () {
    this.loadData()
  },

  methods: {
    loadData (to = this.currentPage, from = -1) {
      this.$store.dispatch('GET_ITEM_DATA', {
        cid: this.cid,
        currentPage: Number(this.$store.state.route.params.page) || 1
      })
    }
  },
  computed: Object.assign({
    currentPage () {
      return Number(this.$store.state.route.params.page) || 1
    }
  },
    mapState(['loading', 'items', 'pageSize', 'keys']),
    mapGetters(['cidtype', 'itemLength'])
  ),
  watch: {
    currentPage (to, from) {
      this.loadData(to, from)
    }
  },
  components: {
    Spinner,
    CardList,
    Pagination
  }
}
</script>

<style lang="scss">
@import '../scss/variable.scss';
.section1 {
    background-color: $gray;
    box-shadow: 0 1px 2px $gray;    
 }
.wrap_page {
    padding: 15px 30px;
    position: fixed;
    text-align: center;
    top: 55px;
    left: 0;
    right: 0;
    z-index: 998;
    background-color: #fff;
    box-shadow: 0 1px 2px hsla(0, 8%, 76%, 0.29);
    .wrap_inner {
        max-width: 800px;
        margin: 0 auto;
    }
}    
.wrap_items {
    // position: absolute;
    
    margin: 50px 0;
    width: 100%;
    background-color: #fff;
    border-radius: 2px;
    transition: all .5s cubic-bezier(.55,0,.1,1);
}
.wrapper {
    text-align:center;
    display: table;
    width: 100%;
    .cell {
        display: table-cell;
        vertical-align: middle;
  }


.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
  }

.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
  }

.fade2-enter-active, .fade2-leave-active {
  transition: all .2s ease
}
.fade2-enter, .fade2-leave-active {
  opacity: 0
  }
}
</style>
