// 解析URL，实现一个函数parseUrl使，
// parseUrl('https://www.meituan.com/index.html?a=test&b=2.1')
// 返回 {a:'test', b: 2.1}

/**
 *
 * @param {string} url
 * @returns
 */
function parseUrl(url) {
  const index = url.indexOf("?");
  const strs = url.slice(index + 1).split("&");
  const obj = {};
  for (let i = 0; i < strs.length; i++) {
    const [key,value] = strs[i].split("=");
    obj[key] = value;
  }
  return obj;
}
let str = "https://www.meituan.com/index.html?a=test&b=666v";
console.log("res ", parseUrl(str));
