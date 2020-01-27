class _node {
  constructor(val=null, next=null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    this.top = new _node(val, this.top);
  }

  pop() {
    this.top = this.top.next;
  }
}

module.exports = Stack;
