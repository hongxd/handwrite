/**
 *
 * @param {Iterable<T | PromiseLike<T>>} value
 */
Promise.myAll = async function (value) {
  const res = [];
  for (let i = 0; i < value.length; i++) {
    const promise = value[i];
    try {
      res.push(await promise);
    } catch {
      return Promise.reject(promise);
    }
  }
  return res;
};
const p = [
  Promise.resolve(1),
  Promise.reject(2),
  Promise.resolve(3),
  Promise.resolve(4),
  Promise.resolve(5),
];
Promise.myAll(p)
  .then((reason) => {
    console.log(reason);
  }, (reason) => {
    console.log(reason);
  })
  .catch((e) => console.log(e));
