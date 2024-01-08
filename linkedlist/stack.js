class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(data) {
    if (this.top == null) {
      this.top = new ListNode(data);
      this.length++;
      return;
    }
    let temp = new ListNode(data);
    temp.next = this.top;
    this.top = temp;
    this.length++;
  }
  pop() {
    if (this.top == null) {
      return;
    }
    let temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp;
  }
  isEmpty() {
    return this.length == 0 ? true : false;
  }
  peek() {
    return this.isEmpty() ? null : this.top.data;
  }
  size() {
    return this.length;
  }
}

module.exports = Stack;
