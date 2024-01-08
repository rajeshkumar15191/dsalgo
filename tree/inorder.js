const tree = require("./tree");
const Stack = require("./../linkedlist/stack");
// 4 -> 2 -> 5 -> 1 -> 3 -> 6.

const inOrderTraversal = (root) => {
  if (root === null) return;
  const stack = [];
  let current = root;

  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    const last = stack.pop();
    console.log("stack::", last.data);

    current = last.right;
  }
};
inOrderTraversal(tree.root);
