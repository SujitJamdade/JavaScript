// template string
const title = 'Best reads of 2019';
const author = 'mario';
const likes = 30;

// concatation way

let result = 'The blog called '+ title + ' by ' + author + ' has ' + likes +' likes';
console.log(result);

// template string  way 
let temp_result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(temp_result);

//  creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);

