import Vue from 'vue'
import Router from 'vue-router'
import { createListView } from '../views/CreateListView'
import Post from '../views/Post.vue'
import AuthorPost from '../views/AuthorPost.vue'
import LocationPost from '../views/LocationPost.vue'
import menus from '../store/menus'
Vue.use(Router)
const getRouters = () => {
  return Object.keys(menus).map(key => {
    return {
      path: `/${menus[key]}/:page(\\d+)?`,
      component: createListView(Number(key))
    }
  })
}
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  // linkActiveClass: 'is-active',
  routes: [
        { path: '/post/:key', component: Post },
        { path: '/author/:author', component: AuthorPost },
        { path: '/location/:location/:page(\\d+)?', component: LocationPost },
        { path: '/', redirect: '/all' },
    ...getRouters()
  ]
})
