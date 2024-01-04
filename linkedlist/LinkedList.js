class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insertAtFirst(lnode) {
    if (!this.head) {
      this.head = lnode;
      this.length++;
      return;
    }
    lnode.next = this.head;
    this.head = lnode;
    this.length++;
    return this;
  }
  insertAtLast(lnode) {
    let current = this.head;
    let temp = null;
    while (current != null) {
      temp = current;
      current = current.next;
    }
    temp.next = lnode;
    this.length++;
  }
  insertAtGivenPosition(lnode, pos) {
    let prev = null;
    if (!this.head) {
      this.head = lnode;
      this.length++;
      return;
    }
    let current = this.head;
    for (let i = 1; i < pos && current != null; i++) {
      prev = current;
      current = current.next;
    }
    // console.log("prev", prev);
    lnode.next = current.next;
    current.next = lnode;
    this.length++;
  }
  deleteAtEnd() {
    let current = this.head;
    if (current == null) {
      return;
    }
    let next = current.next;
    if ((next = null || this.length == 1)) {
      this.head = null;
      return;
    }
    let prev = null;
    while (current.next != null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    // console.log("\n****\n", "prev", prev, "\n****\n");
    // console.log("\n****\n", "current", current, "\n****\n");
  }
}

const ls = new LinkedList();
ls.insertAtFirst(new ListNode(2));
ls.insertAtFirst(new ListNode(3));
ls.insertAtFirst(new ListNode(4));
ls.insertAtLast(new ListNode(9));
ls.insertAtGivenPosition(new ListNode(10), 2);
console.log("*****\n", JSON.stringify(ls.head), "\n*****\n");
console.log("--this.length--", ls.length);
// ls.deleteAtEnd();
// console.log("*****\n", JSON.stringify(ls.head), "\n*****\n");
