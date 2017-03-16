<template  >
    <div class="wrap_card"> 
        <transition 
            mode="out-in"
            :enter-active-class="enterActiveClass"
            appear> 
            <div class='animated' v-if="!loading"> 
                <div v-for=" (v,i) in new Array(Math.ceil(items.length/3))" class="columns">
                    <div  v-for="(item,index) in items.slice(i*3,(i+1) * 3)" class="column is-one-third wrap_card_column " >
                        <div   class="card">
                            <div class="card-image">
                                <router-link  :to="'/post/'+item.key">
                                    <figure class="image " >
                                    <img  :src="item.imageUrl | http2https" alt="Image">
                                    </figure>
                                </router-link>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <router-link class="authorname" :to="'/author/'+doubleBase64(item.authorname)" >
                                            <figure class="image is-48x48" >
                                            <img :src="item.avatar | http2https" alt="Image">
                                            </figure>
                                        </router-link> 
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-5"> {{item.title}}  </p>
                                        <p class="subtitle is-6">
                                        </p>
                                    </div>
                                </div>
                                <div class="content">
                                    <router-link class="authorname" :to="'/author/'+doubleBase64(item.authorname)" >
                                    @{{item.authorname}}
                                    </router-link> 
                                    <br>  
                                    <small>{{new Date(item.date) | formatDateTime}}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </transition>      
    </div>
</template>

<script>
import { doubleBase64 } from '../filters'
export default {
  name: 'CardList',
  props: {
    items: Array,
    loading: Boolean,
    enterActiveClass: String
  },
  methods: {
    doubleBase64
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/variable.scss';
.wrap_card {
    padding-top: 1.2rem;
    padding-bottom: 0.1em;
    padding-right: 0.1em;
    padding-left: 0.1em;
    overflow: hidden;
    width: 100%
}
.wrap_card_column {
    padding: 10px 10px 10px 10px;
    
    .card {
        width:100%;
        height:100%;
        
    }
}
</style>
