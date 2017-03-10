import Vue from 'vue'
import Vuex from 'vuex'
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
  authorItems: [
    {
      avatar: '',
      location: '',
      authorname: ''
    }
  ],
  location: {
    keys: [],
    items: [],
    currentPage: 1,
    pageSize: 9
  },
  progress: 0
}
const getters = {
  itemLength: (state) => state.items.length,
  cidtype: (state) => {
    return {
      '0': 'all',
      '2': 'breast',
      '3': 'leg',
      '4': 'face',
      '5': 'others',
      '6': 'buttocks',
      '7': 'stockings'
    }[String(state.cid)]
  }
}
const actions = {
  GET_ITEM_DATA: ({ commit, dispatch, state }, { cid, currentPage = 1 }) => {
    commit('SET_LOADING', { loading: true })
    commit('SET_PAGE', { currentPage })
    commit('SET_PROGRESS', {progress: 0.1})
    getKeys(cid).then(keys => keys)
      .then(keys => commit('SET_KEYS', { keys }))
      .then(keys => commit('SET_CID', { cid }))
      .then(() => dispatch('GET_ITEMS'))
      .then(() => commit('SET_PROGRESS', {progress: 0.7}))
  },
  GET_ITEMS: ({ commit, dispatch, state }) => {
    const { currentPage, pageSize, keys } = state
    const _start = keys.length - currentPage * pageSize
    const start = _start > 0 ? _start : 0
    const end = _start + pageSize
    getItemsbyKeys(keys.slice(start, end))
      .then(items => commit('SET_ITEMS', { items }))
      .then(() => commit('SET_LOADING', { loading: false }))
      .then(() => commit('SET_PROGRESS', { progress: 1 }))
  },
  GET_POST: ({ commit, dispatch, state }, { key }) => {
    commit('SET_LOADING', { loading: true })
    commit('SET_PROGRESS', {progress: 0.5})
    getItembyKey(key)
      .then(post => commit('SET_POST', { post }))
      .then(() => commit('SET_LOADING', { loading: false }))
      .then(() => commit('SET_PROGRESS', {progress: 1}))
  },
  GET_AUTHOR_ITEM_DATA: ({ commit }, { author }) => {
    commit('SET_PROGRESS', {progress: 0.1})
    commit('SET_LOADING', { loading: true })
    getKeysbyAuthor(author)
      .then(keys => {
        commit('SET_PROGRESS', {progress: 0.7})
        return getItemsbyKeys(keys)
      })
      .then(authorItems => commit('SET_AUTHOR_ITEM_DATA', { authorItems }))
      .then(() => commit('SET_LOADING', { loading: false }))
      .then(() => commit('SET_PROGRESS', {progress: 1}))
  },
  GET_LOCATION_ITEM_DATA: ({ commit, dispatch }, { location, currentPage }) => {
    commit('SET_LOADING', { loading: true })
    commit('SET_LOCATION_PAGE', { currentPage })
    getKeysbyLocation(location)
      .then(keys => commit('SET_LOCATION_KEYS', { keys }))
      .then(() => dispatch('GET_LOCATION_ITEMS'))
      .then(() => commit('SET_PROGRESS', {progress: 0.4}))
  },
  GET_LOCATION_ITEMS: ({ commit, dispatch, state }) => {
    const { currentPage, pageSize, keys } = state.location
    const _start = keys.length - currentPage * pageSize
    const start = _start > 0 ? _start : 0
    const end = _start + pageSize
    getItemsbyKeys(keys.slice(start, end))
      .then(items => commit('SET_LOCATION_ITEM_DATA', { items }))
      .then(() => commit('SET_LOADING', { loading: false }))
      .then(() => commit('SET_PROGRESS', {progress: 1}))
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
