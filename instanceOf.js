/**
 *
 * @param {object} variable
 * @param {*} instance
 * @returns
 */
const instanceOf_loop = (variable, instance) => {
  const prototype = instance.prototype;
  let proto = Object.getPrototypeOf(variable);
  while (true) {
    if (proto === prototype) return true;
    if (!proto) return false;
    proto = Object.getPrototypeOf(proto);
  }
};

/**
 *
 * @param {object} variable
 * @param {*} instance
 * @returns
 */
const instanceOf_recursion = (variable, instance) => {
  const prototype = instance.prototype;
  const proto = Object.getPrototypeOf(variable);
  if (!proto) return false;
  if (proto !== prototype) return instanceOf_recursion(proto, instance);
  return true;
};

class A {}
const a = new A();

const res1 = instanceOf_recursion(a, A);
console.log(res1);

const b = {};
const res2 = instanceOf_recursion(b, A);
console.log(res2);
