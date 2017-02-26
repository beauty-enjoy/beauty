import Vue from 'vue'
import Router from 'vue-router'
import { createListView } from '../views/CreateListView'
import Post from '../views/Post.vue'
import AuthorPost from '../views/AuthorPost.vue'
import LocationPost from '../views/LocationPost.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'is-active',
  routes: [
        { path: '/all/:page(\\d+)?', component: createListView(0) },
        { path: '/breast/:page(\\d+)?', component: createListView(2) },
        { path: '/leg/:page(\\d+)?', component: createListView(3) },
        { path: '/face/:page(\\d+)?', component: createListView(4) },
        { path: '/others/:page(\\d+)?', component: createListView(5) },
        { path: '/buttocks/:page(\\d+)?', component: createListView(6) },
        { path: '/stockings/:page(\\d+)?', component: createListView(7) },
        { path: '/post/:key', component: Post },
        { path: '/author/:author', component: AuthorPost },
        { path: '/location/:location/:page(\\d+)?', component: LocationPost },
        { path: '/', redirect: '/all' }
  ]
})
