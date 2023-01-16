///////////// 1. Event 

// const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

/*
form.addEventListener('submit',e=>{
    e.preventDefault();
    //console.log(username.value);
    console.log(form.username.value);
});
*/

/////////////// 2. testing RegEX
/*
const userName = 'demoName';
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(userName);
console.log(result);

if (result){
    console.log('regex test passed : )');
} else{
    console.log('regex test failed :(');
}
*/

/*
const userName = '123democheck';
const pattern = /[a-z]{6,}/;

let result = userName.search(pattern);
console.log(result);
*/
//////////////// 3. Validation ///////////////

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e =>{
    e.preventDefault();
    //validation
    const username = form.username.value;
    const usernamePattern = /[a-zA-Z]{6,12}/;

    //feedback info 
    if (usernamePattern.test(username)){
        
        feedback.textContent = 'that username is valid';
    } else{
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
    }
});


// /////////////// 4. Keyboard Event ( Live feedback)

// const form = document.querySelector('.signup-form');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.querySelector('#username');
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)){

        // console.log('passed');
        form.username.setAttribute('class','success');
    } else {
        // console.log('failed');
        form.username.setAttribute('class','failed');
    }
});   // Need to check this keyboard event code output is not matching // 17 Aug 


    