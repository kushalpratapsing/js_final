const myNum =[1,2,3,4,5,6,7,8,9,1,0]

//   let ram =myNum.map( (num)=>num+10 )

//   console.log(ram);


 const ram =myNum.map((num)=> num *10 ).map( (num)=> num+3).filter( (num)=> num>45)
 console.log(ram);
