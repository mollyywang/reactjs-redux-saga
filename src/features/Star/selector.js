
// selectors
export function isInStar(state, props) {
  const ids = state.star.items.map(item => item._id)
  return ids.indexOf(props._id) === -1 ? false : true
}

export function getProcessing(state) {
  return state.star.processing;
}

export function getItems(state) {
  return state.star.items;
}