//singleton

//object literals

const mysum = Symbol("key 1")
const jsUser ={

    name :"kushal",
    //importent  [mysum]: 'key1',
    age : 15,
    email: "kidjuifcj@gmail.com",
    lastLogin : ["monday","tuesday"]
}

// console.log(jsUser.lastLogin);
// console.log(jsUser["age"]);

//to freeze a object 
//Object.freeze(jsUser) 

jsUser.greeting = function () {

   // console.log("hello heloooo");
}
//console.log( jsUser.greeting());

jsUser.jsfunction =function () {
    console.log(`hello js user  ${this.lastLogin}`);
}

console.log(jsfunction());

