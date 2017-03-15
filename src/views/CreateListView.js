import ItemList from '../components/ItemList'

export function createListView (cid) {
  return {
    name: `cid${cid}-stories-view`,
    preFetch (store) {
      return store.dispatch('GET_ITEM_DATA', { cid })
    },
    render (h) {
      return h(ItemList, { props: { cid } })
    }
  }
}
