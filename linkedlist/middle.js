const ls = require("./LinkedList");

const findMiddle = function (ls) {
  let slow = ls.head;
  let fast = ls.head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log("slow", slow);
};
console.log("******\n", JSON.stringify(ls.head), "\n**********\n");
findMiddle(ls);
