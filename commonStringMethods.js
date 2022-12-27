console.log("Common String Methods");

let email = 'mario@thenetninja.co.ukk';

let lastIndex = email.lastIndexOf('n');
console.log(lastIndex);

let slicing = email.slice(0,10);
console.log(slicing);

slicing = email.slice(0,5);
console.log(slicing);

// .slice(include start index, last index exclude)
slicing = email.slice(2,5);
console.log(slicing);

// .substr(include start index, length from including start index)
let subString = email.substr(4,10);
console.log(subString);

let replcing = email.replace('m','w');
console.log(replcing);

replcing = email.replace('n','w');
console.log(replcing);

