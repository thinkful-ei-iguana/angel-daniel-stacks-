const Stack = require('./stack');
const starTrek = new Stack;

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('Scotty');
starTrek.push('McCoy');
starTrek.pop();

function peek(stack) {
  return stack.top.val;
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
  while(currNode !== null) {
    console.log(currNode.val);
    currNode = currNode.next;
  }  
}
display(starTrek);

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let reverse = '';
  const stack = new Stack;
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (stack.top !== null) {
    reverse += stack.top.val;
    stack.pop();
  }
  if (str === reverse) return true;
  return false;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));

//Drill 5
function sortStack(originalStack) {
  let newStack = new Stack ();
  while(!isEmpty(originalStack)) {
    let temp = originalStack.pop();
    console.log(`temp: ${temp}`)
    display(originalStack)
    while(!isEmpty(newStack) && (peek(newStack) > temp)) {
      originalStack.push(newStack.pop())
    }
    newStack.push(temp);
  }
  while(!isEmpty(newStack)) {
    originalStack.push(newStack.pop())
  }
}

let stack = new Stack();
stack.push(5)
stack.push(4)
stack.push(2)
stack.push(8)
sortStack(stack)
display(stack)