function debounce(fn, delay = 0, immediate = false) {
  let timer = null;
  let isInvoke = false;
  return function FN(...args) {
    return new Promise((resolve) => {
      FN.cancel = () => {
        clearTimeout(timer);
        timer = null;
        isInvoke = false
      };

      if (immediate && !isInvoke) {
        resolve(fn.apply(this, args));
        isInvoke = true;
        return
      }
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        resolve(fn.apply(this, args));
        timer = null;
        isInvoke = false;
      }, delay);
    });
  };
}

let j = 0;
const myDebounce = debounce(() => {
  console.log("myDebounce" + j);
  return "return";
}, 300);

setInterval(() => {
  myDebounce();
  j++;
}, 350);
setInterval(() => {
  console.log(j);
}, 200);
