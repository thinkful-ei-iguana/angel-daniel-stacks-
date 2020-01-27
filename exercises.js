const Stack = require('./stack');
const starTrek = new Stack;

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('Scotty');
starTrek.push('McCoy');
starTrek.pop();

function peek(stack) {
  return stack.top.val
}

function isEmpty(stack) {
  let top = stack.top;
  if( top === null ) {
    return true;
  }
  return false;
}

function display(stack) {
  let currNode = stack.top;
  while(currNode != null) {
    console.log(currNode.val);
    currNode = currNode.next;
  }  
}