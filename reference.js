// Primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

// reference values

let userOne = {name: 'ryu',age:30};
let userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = 40;
console.log(userOne,userTwo);