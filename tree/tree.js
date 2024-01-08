const { format: prettyFormat } = require("pretty-format");
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Btree {
  constructor() {
    this.root = null;
  }
}

const btree = new Btree();
btree.root = new Node(1);
btree.root.left = new Node(2);
btree.root.left.left = new Node(4);
btree.root.left.right = new Node(5);
btree.root.right = new Node(3);
btree.root.right.right = new Node(6);

module.exports = btree;
