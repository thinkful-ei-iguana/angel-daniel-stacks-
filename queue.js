class _node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(val) {
    const node = new _node(val);
    if (!this.first) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    const node = this.first;
    if (node) {
      this.first = this.first.next;
      return node.val;
    }
    return null;
  }
}

module.exports = Queue;