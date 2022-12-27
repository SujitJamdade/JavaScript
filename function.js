// function decleration 

// function greet(){
//     console.log('hello there');
// }

// function expression
// const speak = function(){
//     console.log('good day!')
// };

// greet()
// greet()
// greet()

// speak()

///////////////////// argument & parameters

// const speak = function(name,time){
//     console.log(`good ${time}, ${name}`);
// };

// speak("mario",'morning');

// Default argument value

// const speak = function(name='mario',time='night'){
//     console.log(`good ${time}, ${name}`);
// };

// speak();

//  without reyurn

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     console.log(area);
// }

// calcArea(10);

// with return

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
};

const area = calcArea(10);
console.log(area);