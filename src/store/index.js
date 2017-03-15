import Vue from 'vue'
import Vuex from 'vuex'
import menus from './menus'
import { getItembyKey, getItemsbyKeys, getKeys, getKeysbyAuthor, getKeysbyLocation } from './api'

Vue.use(Vuex)

const state = {
  keys: [],
  items: [],
  loading: true,
  currentPage: 1,
  pageSize: 9,
  cid: 0,
  post: {
    location: ''
  },
  authorItems: [],
  location: {
    keys: [],
    items: [],
    currentPage: 1,
    pageSize: 9
  },
  progress: 0,
  menus
}
const getters = {
  itemLength: (state) => state.items.length,
  cidtype: (state) => {
    return menus[String(state.cid)]
  },
  menusValues: (state) => {
    return Object.keys(state.menus).map(key => state.menus[key])
  },
  currentPage: (state) => Number(state.route.params.page) || 1,
  currentLocation: (state) => state.route.params.location,
  postKey: (state) => state.route.params.key
}

const actions = {
  START_LOADING: ({ commit }) => {
    commit('SET_LOADING', { loading: true })
    commit('SET_PROGRESS', { progress: 0.1 })
  },
  END_LOADING: ({ commit }) => {
    commit('SET_LOADING', { loading: false })
    commit('SET_PROGRESS', { progress: 1 })
  },
  GET_ITEM_DATA: ({ getters, commit, dispatch, state }, { cid }) => {
    dispatch('START_LOADING')
    commit('SET_PAGE', { currentPage: getters.currentPage })
    return getKeys(cid)
      .then(keys => commit('SET_KEYS', { keys }))
      .then(keys => commit('SET_CID', { cid }))
      .then(() => commit('SET_PROGRESS', { progress: 0.7 }))
      .then(() => dispatch('GET_ITEMS'))
  },
  GET_ITEMS: ({ commit, dispatch, state }) => {
    const { currentPage, pageSize, keys } = state
    const _start = keys.length - currentPage * pageSize
    const start = _start > 0 ? _start : 0
    const end = _start + pageSize
    return getItemsbyKeys(keys.slice(start, end))
      .then(items => commit('SET_ITEMS', { items }))
      .then(() => dispatch('END_LOADING'))
  },
  GET_POST: ({ getters, commit, dispatch, state }) => {
    commit('SET_LOADING', { loading: true })
    commit('SET_PROGRESS', { progress: 0.5 })
    return getItembyKey(getters.postKey)
      .then(post => commit('SET_POST', { post }))
      .then(() => dispatch('END_LOADING'))
  },
  GET_AUTHOR_ITEM_DATA: ({ commit, dispatch }, { author }) => {
    dispatch('START_LOADING')
    return getKeysbyAuthor(author)
      .then(keys => {
        commit('SET_PROGRESS', { progress: 0.7 })
        return getItemsbyKeys(keys)
      })
      .then(authorItems => commit('SET_AUTHOR_ITEM_DATA', { authorItems }))
      .then(() => dispatch('END_LOADING'))
  },
  GET_LOCATION_ITEM_DATA: ({ getters, commit, dispatch }) => {
    dispatch('START_LOADING')
    commit('SET_LOCATION_PAGE', { currentPage: getters.currentPage })
    return getKeysbyLocation(getters.currentLocation)
      .then(keys => commit('SET_LOCATION_KEYS', { keys }))
      .then(() => commit('SET_PROGRESS', { progress: 0.7 }))
      .then(() => dispatch('GET_LOCATION_ITEMS'))
  },
  GET_LOCATION_ITEMS: ({ commit, dispatch, state }) => {
    const { currentPage, pageSize, keys } = state.location
    const _start = keys.length - currentPage * pageSize
    const start = _start > 0 ? _start : 0
    const end = _start + pageSize
    return getItemsbyKeys(keys.slice(start, end))
      .then(items => commit('SET_LOCATION_ITEM_DATA', { items }))
      .then(() => dispatch('END_LOADING'))
  }
}

const mutations = {
  SET_KEYS: (state, { keys }) => {
    state.keys = keys
  },
  SET_ITEMS: (state, { items }) => {
    state.items = items
  },
  SET_CID: (state, { cid }) => {
    state.cid = cid
  },
  SET_LOADING: (state, { loading }) => {
    state.loading = loading
  },
  SET_PAGE: (state, { currentPage }) => {
    state.currentPage = currentPage
  },
  SET_POST: (state, { post }) => {
    state.post = post
  },
  SET_AUTHOR_ITEM_DATA: (state, { authorItems }) => {
    state.authorItems = authorItems
  },
  SET_LOCATION_PAGE: (state, { currentPage }) => {
    state.location.currentPage = currentPage
  },
  SET_LOCATION_KEYS: (state, { keys }) => {
    state.location.keys = keys
  },
  SET_LOCATION_ITEM_DATA: (state, { items }) => {
    state.location.items = items
  },
  SET_PROGRESS: (state, { progress }) => {
    state.progress = progress
  }
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
