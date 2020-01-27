const HashMap = require('./hashclass');
const ChainMap = require('./chainMap');

function main() {
  let lor = new HashMap ();
  lor.MAX_LOAD_RATIO = 0.5;
  lor.SIZE_RATIO = 3;
  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragorn');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');
  console.log(lor);
}

main();

///// Q3
/*
1) 
  0 : 22
  1 : 31
  2 : 4
  3 : 15
  4 : 28
  5 : 17
  6 : 88
  7 : 59
  10 : 10

2)
  1 : 28 -> 19 -> 10
  2 : 20
  5 : 5
  4 : 12
  6 : 15 -> 33
  8 : 17
*/


function containsPalidrome (str) {
  const hmPalidrome = new HashMap()
  hmPalidrome.MAX_LOAD_RATIO = 0.5;
  hmPalidrome.SIZE_RATIO = 3;
  for (let i = 0; i < str.length; i++) {
    if (hmPalidrome.get(str[i]) === undefined) {
      hmPalidrome.set(str[i], 1)
    } else {
      hmPalidrome.set(str[i], hmPalidrome.get(str[i]) + 1)
    }
  }
  let odds = 0 ;
  for(let j = 0; j < str.length; j++ ) {
    if (hmPalidrome.get(str[j]) % 2 === 1) {
      odds++
    }
  }
  if(odds > 1 ) {
    return false;
  } else {
    return true;
  }
}

console.log(containsPalidrome('north'));

////////
function princtChain(map) {
  
}


const chainLOTR = new ChainMap();

chainLOTR.set('Hobbit', 'Bilbo');
chainLOTR.set('Hobbit', 'Frodo');
chainLOTR.set('Wizard', 'Gandalf');
chainLOTR.set('Human', 'Aragorn');
chainLOTR.set('Elf', 'Legolas');
chainLOTR.set('Maiar', 'The Necromancer');
chainLOTR.set('Maiar', 'Sauron');
chainLOTR.set('RingBearer', 'Gollum');
chainLOTR.set('LadyofLight', 'Galadriel');
chainLOTR.set('HalfElven', 'Arwen');
chainLOTR.set('Ent', 'Treebeard');

console.log(chainLOTR);
console.log(chainLOTR.get('Hobbit'));
console.log(chainLOTR.get('Maiar'));