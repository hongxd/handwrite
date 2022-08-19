function throttle(fn, interval = 0, { leading = true, trailing = false } = {}) {
  if (typeof fn !== "function") {
    throw new TypeError("fn must be a function");
  }
  // 双指针法
  return function FN(...args) {
    let startTime = 0;
    let timer = null;
    return new Promise((resolve) => {
      const currentTime = Date.now();
      const waitTime = interval - (currentTime - startTime);

      if (!leading && startTime === 0) {
        startTime = currentTime;
      }
      if (waitTime <= 0) {
        resolve(fn.apply(this, args));
        if (timer) clearTimeout(timer);
        timer = null;
        startTime = currentTime;
        return;
      }
      if (trailing && !timer) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          resolve(fn.apply(this, args));
          startTime = Date.now();
          timer = null;
        }, waitTime);
      }
      FN.cancel = () => {
        clearTimeout(timer);
        timer = null;
        startTime = 0;
      };
    });
  };
}

let i = 0;
const myThrottle = throttle(() => {
  i++;
  console.log("111");
}, 300);

setInterval(() => {
  myThrottle();
  console.log(i);
}, 100);
