const Stack = require('./stack');
const Queue = require('./Queue');
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
  let str = '';
  let currNode = stack.top;
  while(currNode !== null) {
    str += currNode.val + ', ';
    currNode = currNode.next;
  } 
  console.log(str);
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
    while(!isEmpty(newStack) && (peek(newStack) > temp)) {
      originalStack.push(newStack.pop());
    }
    newStack.push(temp);
  }
  while(!isEmpty(newStack)) {
    originalStack.push(newStack.pop());
  }
}

let stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(2);
stack.push(8);
sortStack(stack);
display(stack);

/// Q 6
const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

function peekQ(q) {
  return q.first.val;
}

function isQEmpty(q) {
  return !!q.first;
}

function displayQ(q) {
  let str = '';
  let node = q.first;
  while (node !== null) {
    str += node.val + ', ';
    node = node.next;
  }
  console.log(str);
}

starTrekQ.dequeue();
starTrekQ.dequeue();
displayQ(starTrekQ);


const dancingTeam = new Queue();
dancingTeam.enqueue({gender: 'F', name : 'Jane'});
dancingTeam.enqueue({gender: 'M', name : 'Frank'});
dancingTeam.enqueue({gender: 'F', name : 'Madonna'});
dancingTeam.enqueue({gender: 'M', name : 'David'});
dancingTeam.enqueue({gender: 'F', name : 'Beyonce'});
dancingTeam.enqueue({gender: 'M', name : 'Chris'});
dancingTeam.enqueue({gender: 'M', name : 'Sherlock'});
dancingTeam.enqueue({gender: 'M', name : 'John'});

function  pairPartner (dancingTeam) {
  const maleQueue = new Queue();
  const femaleQueue = new Queue();
 
  while(dancingTeam.first !== null) {
    const next = dancingTeam.first.val;
    dancingTeam.dequeue();

    if(next.gender === 'F') {
      femaleQueue.enqueue(next.name)
    } else {
      maleQueue.enqueue(next.name)
    }
    if (femaleQueue.first !== null && maleQueue.first !== null){
      const pairs = 'The female dancer is ' + femaleQueue.first.val + ' and the male dancer is' + maleQueue.first.val + '.'
      console.log(pairs)
      maleQueue.dequeue()
      femaleQueue.dequeue()
    }
  }
}

pairPartner(dancingTeam)


const bank = new Queue;
function bankQ() {
  const paperwork = Math.random() > 0.25;
  bank.enqueue(paperwork);
  const front = bank.first;
  bank.dequeue();
  if (front.val === false) {
    bank.enqueue(Math.random() > 0.25);
  }
  displayQ(bank);
}

bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();
bankQ();