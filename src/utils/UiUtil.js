
export function debounce(fn, wait, options) {
  wait = wait || 0;
  var timerId;
  function debounced() {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
    timerId = setTimeout(function () {
      fn(options);
    }, wait);
  }
  return debounced;
}
