class _node {
  constructor(val=null, next=null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.front = null;
  }

  push(val) {
    this.front = new _node(val, this.front);
  }

  pop() {
    this.front = this.front.next;
  }
}

module.exports = Stack;
