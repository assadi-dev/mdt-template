/**
 *
 * @param {Function} func
 * @param {any} delay
 */
export function debounce(func, delay) {
  let timeout;
  timeout && clearTimeout(timeout);
  if (delay) {
    timeout = setTimeout(() => {
      func();
      clearTimeout(timeout);
    }, delay);
  }
}
