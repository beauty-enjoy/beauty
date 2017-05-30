<template>
    <div>
        <div v-if="!loading" class ='wrap_posts'>  
            <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="title">{{post.title}}</p>
                        <p class='desc'>
                            <router-link :to="'/location/'+doubleBase64(formatLocation(post.location))" >
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
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
            <hr>
            <div class='content has-text-centered'>
                <p>
                    {{post.content}}
                </p>

                <img v-for="url in post.images" :src="url | http2https" />
                <hr>
                <div class='wrap_disqus'>
                    <div  id="disqus_thread"></div>
                </div>
            </div>        
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
  mounted: function () {
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
  },
  watch: {
    loading (l) {
      if (!l) {
        (function () { // DON'T EDIT BELOW THIS LINE
          let d = document
          let s = d.createElement('script')
          s.src = 'https://beauty-1.disqus.com/embed.js'
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s)
        })()
      }
    }
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
.wrap_disqus {
    width:80%;
    margin:0 auto
}
</style>
