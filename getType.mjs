/**
 * 获取类型
 * @param {*} arg 
 * @returns 
 */
function getType(arg) {
  const type = typeof arg;
  if(type === "number" && isNaN(arg)) return "NaN";
  if (type !== "object") return type;
  if (arg?.constructor) {
    return arg.constructor.name;
  }
  return Object.prototype.toString.call(arg).slice(8,-1).toLowerCase();
}
class A{}
console.log(getType(null))
console.log(getType(new A))
