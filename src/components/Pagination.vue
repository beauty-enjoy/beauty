<template>
<nav class="pagination">
    <router-link :class="getPreClassName()" :to="'/'+urlPrefix+'/'+(formatCurrentPage-1)" >Prev</router-link>
    <router-link :class="getNextClassName()" :to="'/'+urlPrefix+'/'+(formatCurrentPage+1)">Next</router-link>
    <ul class="pagination-list" >
        <li v-for="item in pagingList" >
        <router-link v-if="item !== '...'" :class=" getPagingClassName(item) " :to="'/'+urlPrefix+'/'+item">{{item}}</router-link>
        <span v-else class="pagination-ellipsis">...</span>
        </li>                
    </ul>
</nav>  
</template>
<script>
import paging from './paging.js'
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageLength: Number,
    urlPrefix: String
  },
  methods: {
    getPagingClassName (item) {
      return this.currentPage !== item ? 'pagination-link' : 'pagination-link is-current'
    },
    getPreClassName () {
      return this.currentPage !== 1 ? 'pagination-previous' : 'pagination-previous is-disabled'
    },
    getNextClassName () {
      return this.currentPage < this.pageLength ? 'pagination-next' : 'pagination-next is-disabled'
    }
  },

  computed: Object.assign({
    pagingList () {
      return paging(this.currentPage, this.pageLength, 4)
    },
    formatCurrentPage () {
      const currentPage = Number(this.currentPage)
      return currentPage > 0 ? currentPage : 1
    }
  }
  )

}
</script>

<style lang="scss">
.pagination-list {
    list-style : none ;
    li {
        list-style : none ;
    }
}
</style>
