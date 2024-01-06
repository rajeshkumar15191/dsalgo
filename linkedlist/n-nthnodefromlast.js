const ls = require("./LinkedList");

function findnthNodeFromLast(ls, pos) {
  const ln = ls.length;
  pos = ln - pos + 1;
  let current = ls.head;
  for (i = 1; i < pos; i++) {
    current = current.next;
  }
  console.log(current);
}
console.log("******\n", JSON.stringify(ls.head), "******\n");
findnthNodeFromLast(ls, 5);
