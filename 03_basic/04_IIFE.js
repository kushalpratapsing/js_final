// immediately invoked function expression

// used for removing global scope pollution 

(function chai () {
 console.log( ' db connected');
    
})();
// error remove krne k liye ; lgna

(( )=> {
    console.log(" db connected two");
})()

