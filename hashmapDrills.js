const HashMap = require('./hashclass');

function main() {
  let lor = new HashMap ();
  lor.MAX_LOAD_RATIO = 0.5;
  lor.SIZE_RATION = 3;
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
