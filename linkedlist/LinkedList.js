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
  }
  insertAtGivenPosition(lnode, pos) {
    let prev = null;
    if (!this.head) {
      this.head = lnode;
      return;
    }
    let current = this.head;
    for (let i = 1; i < pos; i++) {
      prev = current;
      current = current.next;
    }
    lnode.next = current.next;
    current.next = lnode;
  }
}

const ls = new LinkedList();
ls.insertAtFirst(new ListNode(2));
ls.insertAtFirst(new ListNode(3));
ls.insertAtFirst(new ListNode(4));
ls.insertAtLast(new ListNode(9));
console.log("*****\n", JSON.stringify(ls.head), "\n*****\n");
ls.insertAtGivenPosition(new ListNode(10), 4);
console.log(JSON.stringify(ls.head));
