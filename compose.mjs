/**
 * 合并多个函数并统一传参执行
 * @param  {...()=>any} fns
 */
function compose(...fns) {
  /**
   * @param {unknown} props
   */
  return function (props) {
    return fns.reduce((prev, curr) => curr(prev), props);
  };
}
// demo
function fn1(props) {
  console.log("fn1");
  props.b = 2;
  return props;
}

function fn2(props) {
  console.log("fn2");
  props.c = 3;
  return props;
}

function fn3(props) {
  console.log("fn3");
  console.log(props);
}

compose(fn1, fn2, fn3)({ a: 1 });

