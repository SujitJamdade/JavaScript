const correctAnswer = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0;
    // checking answer 
    userAnswer.forEach((answer, index)=>{
        if (answer === correctAnswer[index]){
            score +=25;
        }
        
    });
    // Showing result on screen
    scrollTo(0,0);
    
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
    })
  
});

// Windoe object ( global object)

// console.log("Hello");
// window.console.log("Hello");

// console.log(document.querySelector('form'));
// window.console.log(document.querySelector('form'));

// alert("hello");
// window.alert("hello");

// setTimeout(()=>{
//     alert('hello, ninjas')
// },4000)

//  Demo example of setInterval method
// let i = 0;
// const timer = setInterval(()=>{
//     console.log("Hello");
//     i++;
//     if (i===5){
//         clearInterval(timer);
//     }
// },1000);
