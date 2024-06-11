//falsy values
/** 
 
false
0
-0
0n
""
null
undefined
Nan

*/

//truthy value

// "0"
// "false"
// "  "
// []
// {}
//function(){}

//nulles coalescing opreator (??): null /undefined

let val1;

val1 = 5??null;
console.log(val1);

//terniary operator

//condition ? true :false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 88");;