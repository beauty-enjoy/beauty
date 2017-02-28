<template>
<div>
    <Spinner :loading="loading" />
    <template v-if="!loading" >
        <div class='wrap_page'>
            <div class='wrap_inner'>
                <Pagination :urlPrefix="'location/' + currentLocation" :currentPage='currentPage' :pageLength='Math.ceil(location.keys.length/location.pageSize)'/>
           </div>        
        </div>        
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
            <CardList :items="location.items" />
        </div>
    </template>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Spinner from '../components/Spinner.vue'
import CardList from '../components/CardList.vue'
import GoHistory from '../components/GoHistory.vue'
import Pagination from '../components/Pagination.vue'
export default {
  name: 'location_items',
  computed: Object.assign({
    currentPage () {
      return Number(this.$store.state.route.params.page) || 1
    },
    currentLocation () {
      return this.$store.state.route.params.location
    }
  },
    mapState(['location', 'loading'])
  ),
  created: function () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$store.dispatch('GET_LOCATION_ITEM_DATA', {
        location: this.$store.state.route.params.location,
        currentPage: this.currentPage
      })
    }
  },
  watch: {
    currentPage () {
      this.loadData()
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
</style>
