// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.1;
// round
console.log(Math.round(area)); //round of to whole number
// if its >=7.5 it will show 8
// if its <=7.4 it will show 7

// floor
console.log(Math.floor(area)); //it will show previous whole number
// eg. 7.8 it will shows as 7
//     7.1 it will shows as 7

// ceil
console.log(Math.ceil(area)); //it will show next whole number
// eg. 7.8 it will shows as 8
//     7.1 it will shows as 8

// trunc
console.log(Math.trunc(area)); // it will truncs decimal value and shows whole number.

// random number

const random = Math.random();
console.log(random);

console.log(Math.round(random * 100));
