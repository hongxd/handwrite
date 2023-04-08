function throttle(func, wait, options = {}) {
  let timeout, args;
  let previous = 0;
  const { leading, trailing } = options;

  const throttled = function() {
    const _now = Date.now();
    if (previous === 0 && !leading) previous = _now;
    const remaining = wait - (_now - previous);
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      func.apply(this, args);
    } else if (!timeout && trailing) {
      timeout = setTimeout(() => {
        previous = leading ? Date.now() : 0;
        func.apply(this, args);
        timeout = null;
      }, remaining);
    }
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = args = null;
  };

  return throttled;
}
const fn = throttle((i) => console.log(i),200,{trailing:true});
for(let i = 0; i < 2**23; i++) fn(i)
setTimeout(() => {
  for(let i = 0; i < 2**23; i++) fn(i)
}, 1000);
