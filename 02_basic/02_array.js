 let heros1 = ["s", 'a','p']
 let heros2 = ["jk", 'jk','phh']

 //const all_Hero = heros1.concat(heros2)
//  console.log(all_Hero);

//USING SPREAD METHOD

const all_Hero2 = [...heros1,...heros2]

//console.log(all_Hero2);



//**  flat = use to spread array in the given array */


let arrr35 = [0,1,[0,2],5, [2,2]]

const array3 = arrr35.flat(Infinity)
//console.log(array3);

/** arry .of */

let score1 = 100
let score2 =200
let score3 =400
console.log(Array.of(score1,score2,score3));
