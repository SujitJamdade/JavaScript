// type conversion

let score = '100';
console.log(score + 1);

score = Number(score); //converting from string into the number
console.log(score + 1);
console.log(typeof(score)); // checking data type of the score variable

let result = 'hello';
console.log(result);

result = Number(result);
console.log(result); // we will get as NaN because 'hello' is not an number

result = String(50);
console.log(result); 
console.log(result, typeof(result)); 

result = Boolean(50);
console.log(result); 
console.log(result, typeof(result)); 

result = Boolean(0);
console.log(result); 
console.log(result, typeof(result)); 

result = Boolean("0");
console.log(result); 
console.log(result, typeof(result)); 

result = Boolean("");
console.log(result); 
console.log(result, typeof(result)); 