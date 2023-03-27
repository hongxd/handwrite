const transform = (obj) => {
  const ans = {};
  for (const key in obj) {
    const keys = key.split('.');
    const val = obj[key];
    let tempObj = ans;
    const len = keys.length;
    for (let i = 0; i < keys.length; i++) {
      if (i === len - 1) {
        tempObj[keys[i]] = val;
      } else {
        if (tempObj[keys[i]] === undefined) {
          tempObj[keys[i]] = {};
        }
        tempObj = tempObj[keys[i]];
      }
    }
  }
  return ans;
}
console.log(transform({'a':1,'b.c.d':2,'b.c.e':3,'b.d.f':4}))
