import ItemList from '../components/ItemList'

export function createListView (cid) {
  return {
    name: `cid${cid}-stories-view`,
    render (h) {
      return h(ItemList, { props: { cid } })
    }
  }
}
