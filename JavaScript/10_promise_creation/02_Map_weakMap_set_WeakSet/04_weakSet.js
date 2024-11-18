/**
 * Weakset: it also takes only object as keys
 * add
 * delete
 * has
*/

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited
visitedSet.add(pete); // Then pete
visitedSet.add(mary); // John again

// visitedSet has 2 users now
john = null;
// check if john visited?
console.log(visitedSet.has(john)); // false

// check if Mary visited?
console.log(visitedSet.has(mary)); // true
// visitedSet.delete(pete)
console.log(visitedSet.has(pete)); // true

