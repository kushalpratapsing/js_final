//for

for(let i =0;i<10;i++ ){

    for (let j = 0; j < 10; j++) {
      
   // console.log(i + "*" + j + "=" + i*j);
    }
}

let myArray =["flash", 'suprman','spiderman']

for( let i = 0 ; i< myArray.length;i++){
    //const element = myArray[i]
    //console.log(myArray[i]);
}

// break and continue

// for( i =1; i<=20;i++){

//     if(i==5){
//         console.log(`dedcted 5`);
//         break
//     }
//     console.log(` value of i is ${i}`);


// }


//*** continue */
//break and continue

for( i =1; i<=20;i++){

    if(i==5){
        console.log(`dedcted 5`);
        continue
    }
    console.log(` value of i is ${i}`);
}