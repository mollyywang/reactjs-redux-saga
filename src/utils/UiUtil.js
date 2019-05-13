export function debounce(fn, wait, options) {
  wait = wait || 0
  let timerId
  function debounced() {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }
    timerId = setTimeout(() => {
      fn(options)
    }, wait)
  }
  return debounced
}

export default ''
