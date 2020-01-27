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
    const node = this.top
    if(node) {
      this.top = this.top.next;
      return node.val;
    } else {
      return null;
    }
    
  }
}

module.exports = Stack;
