
// selectors
export function getItems(state) {
  return state.productlist.items
}
export function getAllNums(state) {
  return state.productlist.allNums
}
export function getCounts(state) {
  return state.productlist.counts
}
export function getIndex(state) {
  return state.productlist.index
}
export function getProcessing(state) {
  return state.productlist.processing
}
export function getProduct(state, props) {
  return state.productlist.find(item => item.id === props.id)
}

export default {}
