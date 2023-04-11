const tree = {
  val: 2345,
  children: [
    {
      val: 3456,
      children: [
        {
          val: 23456,
          children: [],
        },
        {
          val: 6777,
          children: [
            {
              val: 66,
              children: [],
            },
          ],
        },
      ],
    },
    {
      val: 4545,
      children: [
        {
          val: 44,
          children: [],
        },
        {
          val: 5,
          children: [],
        },
      ],
    },
  ],
};
const res = [];
function dfs(tree) {
  const { val, children } = tree;
  res.push(val);
  for (let i = 0; i < children.length; i++) {
    dfs(children[i]);
  }
}
// dfs(tree);
// console.log(res)
function bfs(tree) {
  const queue = [tree];
  while (queue.length !== 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      queue.push(...node.children);
      res.push(node.val);
    }
  }
}
bfs(tree);
console.log(res);
