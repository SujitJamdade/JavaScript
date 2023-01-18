
/*

//Type conversion 
// implicit and explicite 

// Implicit

var a = "2";

console.log(typeof(a)); // string
console.log(typeof(+a));  //number

var b = 4;

console.log(a + b);  // 24
// "2" + "4" = 24

console.log(b + 2 + a); // 62
// 4 + 2 + "2"
// 6 + "2"
// 62

console.log(false=='0')  // true

console.log(false==='0')  // false

console.log(false + 1);   // 1

console.log(false + '1'); // false1

console.log(6 + + "6");  // 12
// +"6" will convert to number 6
// so 6+6 will becomes 12

console.log(6 + - "6");  //0
// 6 + (-6) = 0

console.log(4+3+2+"1"); // 91

*/


// -----------------------------------


/* 
Object
Arrays
Functions
*/

// ---------------------------------------

/*

//1. arrays


// array declaration
var a = [];
var b = new Array();  // new word is using to create instance of class Array

var a = [1,2,"hello",function() {console.log
("Inside array")}];

console.log(a);

console.log(typeof(a));

// indexing in array start from 0
// array has a special property known as length
// 

console.log(a[2]);

// for loop to get whole element of array

for(var i = 0; i<a.length; i++){
    console.log(a[i]);
}

// forEach

a.forEach(function(element, index){
    console.log(element);
    // console.log(index);
})

// adding element at last with push method
a.push(4);
console.log(a);

// remove last element - pop method
a.pop();
console.log(a);

// unshift add element at start
// shift remove elemet from start

a.unshift(5);
console.log(a);

a.shift();
console.log(a);

// remove element middle element
// splice(fromindex, howmany_index)

a.splice(1,2);
console.log(a);

console.log("24"+10);  // 2410
console.log(+"abc"); // NaN  - Not a Number

console.log(+"abc" == +"def");  // False >> NaN never equals to itself, its an exception 

console.log(typeof(NaN));  //number >>  Ohh its type of number

console.log("24"-10)  // 14 >> again intresting thing its convert 24 as number and substracting by 10

// + makes concatetion 
// - makes type converion 

// Who made javascript?
// >> Brendan Eich 1995

*/



// -------------------------------

// 2. function()
/*

function abc(){
    console.log("I am abc");
}


// annonyms function >> it means creating a function without function name and assigning to variable
var a = function(){
    console.log("I am a");
}

abc();
a();  

var d;
var f=12;
if(true){
    d=function(){ console.log("do 1")};

} else{
    d=function(){ console.log("do 2")};
}

d();

*/

// ----------------------

// 3. Objects

// var a ={};
// var b = new Object();

/*


var a = {
    b:10,
    c:20
}
console.log(a);
console.log(a.b);

var dog = {
    name : "moti",
    breed : "desi",
    bark : function(){
        console.log("woof woof");
    },
    owner : {
        name : "Sujit",
        age : 30
    }
}

console.log(dog);

// access name from dog object
// 1. objectName.keyname
console.log(dog.name);

//2. objectName["keyname"]
console.log(dog["name"]);

// if you want to dynamically get the name of key
var nameOfKey = "name";
console.log(dog[nameOfKey]);
//dog["name"]

console.log(dog.bark());

// How to get the name of Owner?
console.log(dog.owner.name);
console.log(dog["owner"]["name"]);

// json >> Javascript object notation

console.log(typeof typeof null);
console.log(typeof undefined);

var a = [1,2,3];
console.log(a.length);

a.length = 1;
console.log(a);

var b = a;
console.log(b);

// assignment happens by reference

// a -> [1,2,3] <- b
// a -> [1] < - b
// not craeting a copy of a , so b is reference of a 
// if a changes then b reference will also change accordingly 

// --------------------
// a = [];
// console.log(a);   // []
// console.log(b);   // [1]

// why above output different 
//>> a -> [] here a is started to point empty array
//   b -> [1] here b is still pointing to previous a array

// --------------------
// if we want to make a and b both are empty 
// how we will create it empty

a.length = 0;   
console.log(a);  // []
console.log(b);  // []


*/

/*

// make copy of array
var a = [1,2,3,4,5,6];
var b = [...a];

console.log(a);
console.log(b);


//  ... called as Array/Object spread operator

*/


console.log(document.getElementById("app"));

// document.getElementById("app").innerHTML="Hi";

document.getElementById("app").innerHTML =
`<span>Hey I am a span</span>`;

// console.log(document.getElementsByClassName("test"));

// create element

var d = document.createElement("div");
d.innerText = "I am craeted a element";

document.body.appendChild(d);

var e = document.getElementsByClassName("test");
console.log(e);

var s = e[1].appendChild(d);
console.log(s);
