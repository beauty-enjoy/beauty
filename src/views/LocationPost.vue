<template>
<div >
  <div class='wrap_page'>
      <div class='wrap_inner'>
          <pagination :urlPrefix="'/location/' + currentLocation" :currentPage='currentPage' :lastPage='Math.ceil(location.keys.length/location.pageSize)'/> 
      </div>        
  </div>
  <div class='wrap_posts' v-if="!loading" >        
    <nav class="level">
        <div class="level-item has-text-centered">
            <div>
                <p class="title">
                    <i class="fa fa-map-marker" aria-hidden="true"/>
                    {{ location.items[0].location | formatLocation}}
                </p>
            </div>                
        </div>        
    </nav>
    <hr/>   
    <div class='content has-text-centered'>
      <CardList :items="location.items" :loading='loading' :enterActiveClass='enterActiveClass' /> 
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Spinner from '../components/Spinner'
import CardList from '../components/CardList'
import GoHistory from '../components/GoHistory'
import Pagination from 'vue-bulma-pagination/src/Pagination'
function preFetch (store) {
  return store.dispatch('GET_LOCATION_ITEM_DATA')
}
export default {
  name: 'location_items',
  computed: Object.assign({},
    mapState(['location', 'loading']),
    mapGetters(['currentPage', 'currentLocation'])
  ),
  beforeMount: function () {
    if (this.$root._isMounted) {
      preFetch(this.$store)
    }
  },
  preFetch: preFetch,
  data () {
    return {
      enterActiveClass: 'fadeIn'
    }
  },
  watch: {
    currentPage (to, from) {
      this.enterActiveClass = from === -1
      ? 'fadeIn'
      : to < from ? 'fadeInLeft' : 'fadeInRight'
      preFetch(this.$store)
    }
  },
  components: {
    Spinner,
    CardList,
    GoHistory,
    Pagination
  }

}
</script>

<style lang="scss" scoped>
@import '../scss/variable.scss';
.level {
    padding-top:65px
}
.title .fa{
  color: $gray;
  display: inline;
}
.wrap_posts {
  margin-top: 5rem;;
}
</style>
