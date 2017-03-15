<template>
    <div class='wrap_posts' v-if="!loading">
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="title">
                        <figure class="image is-96x96 avatar">
                            <img :src="authorItems[0].avatar"/>
                        </figure>  
                    </p>
                    <p class='desc'>
                        <router-link :to="'/location/'+doubleBase64(formatLocation(authorItems[0].location))" >
                            <i class="fa fa-map-marker" aria-hidden="true"/>
                            {{ authorItems[0].location | formatLocation}}
                        </router-link>
                        <a>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            @{{ authorItems[0].authorname}} 
                        </a>
                    </p>
                </div>                
            </div>        
        </nav>
        <hr/>   
        <div class='content has-text-centered'>
            <CardList :items="authorItems" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { doubleBase64, formatLocation } from '../filters'
import Spinner from '../components/Spinner'
import CardList from '../components/CardList'
import GoHistory from '../components/GoHistory'
function preFetch (store) {
  return store.dispatch('GET_AUTHOR_ITEM_DATA', { author: store.state.route.params.author })
}
export default {
  name: 'authorItems',
  computed: Object.assign({},
    mapState(['authorItems', 'loading'])
  ),
  preFetch: preFetch,
  beforeMount: function () {
    if (this.$root._isMounted) {
      preFetch(this.$store)
    }
  },
  components: {
    Spinner,
    CardList,
    GoHistory
  },
  methods: {
    doubleBase64,
    formatLocation
  }
}
</script>

<style lang="scss" >
@import '../scss/variable.scss';
</style>
