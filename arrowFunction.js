// regular function 
// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// };

// const area = calcArea(10);
// console.log(area);

// arrow function
const calcArea = (radius) => {
    return 3.14 * radius**2;
};

const area = calcArea(10);
console.log(area);

const greet = () => 'hello, world';

console.log(greet());

const bill = (products,tax) =>{
    let total = 0;
    for(let i =0; i<products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

let products_price = [10,20,30,40,50];
const total = bill(products_price,0.1);
console.log(total);

//  get a refernce to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario','luigi','ryu','shaun','chun-li'];

let html = ``;

people.forEach(person => {
    // create html template
    html += `<li style="color:purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;