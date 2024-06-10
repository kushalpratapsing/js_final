const collage = {};

collage.name = "cu";
collage.adddrs = "garuah";
collage.rank = 'a';

//console.log(collage);

// To modify the object instead of reassigning it, you can use the spread operator
Object.assign(collage, {
    subject: "cs",
    branch: {
        ait: 5,
        mit: 7
    }
});

//console.log(collage.branch.mit); // Accessing the 'branch' object

const obj1 ={1:"a" , 2: "a"}
const obj2 ={3:"a" , 4: "a"}
const obj3 ={5:"a" , 6: "a"}
const obj4 ={7:"a" , 8: "a"}

const objet_final = {...obj1,...obj2,...obj3,...obj4}

console.log(objet_final);

