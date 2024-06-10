// this reffers current object 
// this is dicrable i n function
// const user ={
//     name : 'kushal',
//     price :99,
    
//     wlecomeMessage : function(){

//         console.log( ` ${this.name} welcome to the website`);
//     }
// }

// user.wlecomeMessage()
// user.name= "raj0"
// user.wlecomeMessage()


const chai = () => {
    let username = "kushal"
    console.log(this.username);
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1+num2

// }
// console.log(addTwo(3 ,4));


const addTwo2 = (num1,num2) => (num1+num2)
console.log(addTwo2(9,9));


