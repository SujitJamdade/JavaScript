//  object literals
/*
let user = {
    name:"crystal",
    age:30,
    email:"abc@com.in",
    location:'berlin',
    blogs: ['why mac & chees rules','10 Things to make with marmite']
};
console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['name']);
console.log(user['email']);

user['name'] = 'chun-li';

console.log(user['name']);

*/

let user = {
    name:"crystal",
    age:30,
    email:"abc@com.in",
    location:'berlin',
    blogs: ['why mac & cheese rules','10 Things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        // console.log(this.blogs);
        console.log("This user has written the following blogs:");
        this.blogs.forEach(blog =>{
                console.log(blog);
        })
    }
};

user.login();
user.logout();

user.logBlogs();



// const names = 'mario';
// names.toUpperCase();
// console.log(this)