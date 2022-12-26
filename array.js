let ninjas = ['shaun','ryu','chun-li'];

console.log(ninjas);
console.log(ninjas[1]);

ninjas[1]='ken';
console.log(ninjas);
console.log(ninjas[1]);

let ages = [20,25,30,35]
console.log(ages[2]);

let random = ['shaun', 'crystal',30,20];
console.log(random);

console.log(random.length);

let join_array = ninjas.join(',');
console.log(join_array);
console.log(typeof(join_array));

join_array = ninjas.join(' ');
console.log(join_array);

let index = ninjas.indexOf('chun-li');
console.log(index);

let concation = ninjas.concat(['ken','crystal']);
console.log(concation);

let array_push = ninjas.push('sujit');
console.log(array_push);

console.log(ninjas);

let array_pop = ninjas.pop();
console.log(array_pop);
console.log(ninjas);