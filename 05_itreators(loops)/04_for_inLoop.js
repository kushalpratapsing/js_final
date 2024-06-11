const myobject= {

    cpp : "c++",
    java : " java programing",
    rb : " ruby",
    py : "python"
}


for (const key in myobject) {
   
        console.log(`${key} shortcut of ${myobject[key]}`);
    }
