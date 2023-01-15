// 1) querySelector

// const para = document.querySelector('p');

// console.log(para);

// const errorPara = document.querySelector('.error');

// console.log(errorPara);

// const specificError = document.querySelector('div.error');

// console.log(specificError);

//  2) querySelectorAll

// const paras = document.querySelectorAll('p');

// console.log(paras);
// console.log(paras[0]);

// paras.forEach(para =>{
//     console.log(para);
// })

// const errors = document.querySelectorAll('.error');

// console.log(errors);

// 3) get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// 4) get elements by their class name

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// console.log(errors[1]);

// 5) get element by TagName

// const para = document.getElementsByTagName('p');
// console.log(para);

// 6) adding and changing page content
// const para = document.querySelector('p');

// console.log(para.innerText); // innerText = we can get test inside of this tag
// para.innerText = 'ninjas are awesome!'; // we can assign new text in it

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is new h2</h2>';

// const people = ['mario','luigi','yoshi'];

// people.forEach(person =>{
//     content.innerHTML += `<p>${person}</p>`;
// })

// 7) Getting & Setting attribute

/*
const link = document.querySelector('a');
console.log(link.getAttribute('href')); // getAttribute('attribute name')

link.setAttribute('href','https.//www/google2.com');
console.log(link.getAttribute('href'));

link.innerText = 'Website for Google2';

const mssg = document.querySelector('p.error');
console.log(mssg)
console.log(mssg.getAttribute('class'));

mssg.setAttribute('class','success');
console.log(mssg.getAttribute('class'));

mssg.setAttribute('style','color:green');
*/

// 8) Changing CSS Styles

const title = document.querySelector('h1');

// title.setAttribute('style','margin:50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';


