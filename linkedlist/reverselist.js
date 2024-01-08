const ls = require("./LinkedList");

const reverseList = function (ls) {
  let current = ls.head;
  let prev = null;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
console.log("******\n", JSON.stringify(ls.head), "\n**********\n");
console.log(JSON.stringify(reverseList(ls)));
