// 扁平数组转树形
let input = [
  { pid: 0, id: 1, name: "中国" },
  { pid: 1, id: 2, name: "广东" },
  { pid: 2, id: 3, name: "深圳" },
  { pid: 3, id: 6, name: "福田" },
  { pid: 1, id: 4, name: "香港" },
  { pid: 4, id: 5, name: "九龙" },
];

const map = {};
const res = []
for (let i = 0; i < input.length; i++) {
  map[input[i].id] = {
    ...input[i],
    children: []
  }
}
for (let i = 0; i < input.length; i++) {
  if (map[input[i].pid]) {
    const p = map[input[i].pid]
    p.children.push(map[input[i].id])
  } else {
    res.push(map[input[i].id])
  }
}
console.log(res)
