//booleans & Comparisons
console.log(true, false, "true","false");

// methods can return booleans
let email = 'iam@hey.co.in';

let result = email.includes('@');

console.log(result);

result = email.includes('!');
console.log(result);

result = email.includes('hey');
console.log(result);

// Compariosion operators

let age = 25;
// Equal to
console.log(age == 25);
console.log(age == 30);

// Not equal to
console.log(age != 30);

// less than 
console.log(age < 30);

// greater than 
console.log(age > 30);
 
// less than equal to
console.log(age <= 30);

// greater than equal to
console.log(age >= 25);

let fname = 'jack';
console.log(fname == 'jack');
console.log(fname == 'Jack');
console.log('shaun' > 'crystal');
console.log('shaun' > 'Shaun');
console.log('Shaun' > 'shaun');

//  Strict Comparision ( different types cannot be equal)

console.log(age == 25);
console.log(age == '25'); //showing true due to same value

console.log(age != 25);
console.log(age != '25');

// === needs to use for comparing data type
console.log(age === 25);
console.log(age === '25'); //strict omparison checking data type as well 

