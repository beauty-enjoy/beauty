<template  >
    <div class='wrap_card'> 
        <div v-for=" (v,i) in new Array(Math.ceil(items.length/3))" class="columns">
            <div  v-for="(item,index) in items.slice(i*3,(i+1) * 3)"  class="card column is-one-third wrap_card_column">
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
</template>

<script>
import { doubleBase64 } from '../filters'
export default {
  name: 'CardList',
  props: {
    items: Array
  },
  methods: {
    doubleBase64
  }
}
</script>

<style lang="scss">
@import '../scss/variable.scss';
.wrap_card {
    padding-top: 1.2rem;
}
.wrap_card_column {
    margin: 10px 10px 10px 10px;
}
</style>
