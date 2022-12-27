// if statements
const age = 25;

if(age > 20){
    console.log('you are over 20 years old');
}

const ninjas = ['shaun','ryu','chun-li','yoshi'];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}

/*
let password = 'p@ssword';

if(password.length >= 8){
    console.log('that password is long enough!');
}
*/

// else statement
/*
password = 'p@ss';
if(password.length >= 8){
    console.log('that password is long enough!');
}else{
    console.log('password is not long enough')
}
*/

// else if statement
const password = 'p@ssword';

if(password.length >= 12){
    console.log('that password is might strong');
}else if (password.length >= 8){
    console.log('taht password is long enough!');
}else{
    console.log('password is not long enough');
}