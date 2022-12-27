//for loops

for(let i=0; i<5; i++){
    console.log('in loop ',i);
}
console.log('loop finished');

const names = ['shaun','mario','lungi'];

for(let i=0; i<names.length; i++){
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// While loop
let i = 0;
while(i<5){
    console.log('in loop',i);
    i++;
}

const player = ['sachin','dhoni','yuvraj','shikhar'];

let j = 0;

while(j<player.length){
    let html = `<div>${player[j]}</div>`;
    console.log(html);
    j++;
}

// do while loop

i = 5;
do{
    console.log('val of i is :',i);
    i++;
} while(i<5);