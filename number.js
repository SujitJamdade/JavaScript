let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators ( +, -, *, /, **, %)

console.log(10/2);
let result = radius%3;
console.log(result)

let area = pi * radius**2;
console.log(area);

// Order of operation - B I D M A S
let exp = 5 * (10-3)**2;
console.log(exp);

let likes = 10;
likes = likes +1;
console.log(likes);

// short hand operation 
likes++;
console.log(likes);

likes--;
console.log(likes);

likes += 10;
console.log(likes);

likes--;

likes*=2;
console.log(likes);

likes /=2;
console.log(likes);

// Nan - not a number

console.log(5 / 'hello');  // NaN
console.log(5 * 'hello');  // NaN

let concat = 'the blog has ' + likes + ' likes';
console.log(concat);


 
