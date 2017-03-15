<template>
    <div v-if="!loading" class ='wrap_posts'>  
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                    <p class="title">{{post.title}}</p>
                    <p class='desc'>
                        <router-link :to="'/location/'+doubleBase64(formatLocation(post.location))" >
                            <i class="fa fa-map-marker" aria-hidden="true"/>
                            {{ post.location | formatLocation}}
                        </router-link>
                        <router-link :to="'/author/' + doubleBase64(post.authorname)">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        @{{ post.authorname}} ;
                        </router-link>
                        <i class="fa fa-clock-o" aria-hidden="true"></i>  
                        {{ new Date(post.date)| formatDateTime}}
                    </p>
                </div>
            </div>
        </nav>
        <hr/>
        <div class='content has-text-centered'>
            <p>
                {{post.content}}
            <p/>

            <img v-for="url in post.images" :src="url | http2https" />
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { doubleBase64, formatLocation } from '../filters'
import Spinner from '../components/Spinner'
import GoHistory from '../components/GoHistory'
function preFetch (store) {
  return store.dispatch('GET_POST')
}
export default {
  name: 'post',
  computed: Object.assign({},
    mapState(['post', 'loading']),
    mapGetters(['location'])
  ),
  created: function () {
    preFetch(this.$store)
  },
  preFetch: preFetch,
  components: {
    Spinner,
    GoHistory
  },
  methods: {
    doubleBase64,
    formatLocation
  }
}
</script>

<style lang="scss">
@import '../scss/variable.scss';

.wrap_author {
    padding-left:10px
}
.desc {
    .fa {
    color: $gray;
    vertical-align: text-bottom;
    } 
}

</style>
