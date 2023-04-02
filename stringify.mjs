/**
 * 
 * @param {object} obj 
 */
function stringify(obj) {
  if (typeof obj !== 'object') return "";
  const ans = ['{'];
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    key = `"${key}"`;
    if (value === null) ans.push(key + ':' + "null",",");
    else if (typeof value === 'object') ans.push(key+":"+stringify(value),",");
    else if (typeof value === 'string') ans.push(key+ ':'+ `"${value}"`, ',');
    else if (value===undefined) {}
    else ans.push(key+':'+ value,',');
  });
  ans.pop();
  ans.push("}");
  console.log(ans)
  return ans.join("");
}
const obj = {
  a: 555, b: "null", obj: {
    c: 888,
    d: 999,
    e: "99",
    d: {
      e:"ssae"
    }
},c:undefined };
console.log(JSON.stringify(obj),stringify(obj));
