// JavaScript program for linked-list implementation of queue
class QNode {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

let front = null,
  rear = null;
class Queue {
  enqueue(key) {
    // Create a new LL node
    let temp = new QNode(key);

    // If queue is empty, then new node is front and rear both
    if (rear == null) {
      front = rear = temp;
      return;
    }

    // Add the new node at the end of queue and change rear
    rear.next = temp;
    rear = temp;
  }

  dequeue() {
    // If queue is empty, return NULL.
    if (front == null) return;

    // Store previous front and move front one node ahead
    let temp = front;
    front = front.next;

    // If front becomes NULL, then change rear also as NULL
    if (front == null) rear = null;
  }
}
module.exports = Queue;
