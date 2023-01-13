// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const para = document.querySelectorAll('p');

para.forEach(p => {
    if (p.textContent.includes('error')){
        p.classList.add('error');
    }
    if (p.textContent.includes('success')){
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test'); // adding test class
title.classList.toggle('test'); // removing titile class