// 1. to check the greatest of three numbers
// a=10 b=20 c=30

let a=10,b=20,c=30;
if(a>b && a>c){
    console.log(` number ${a} is greater then ${b} and ${c}`);
} else if(b>c && b>a){
    console.log(' number ' , b , ' is greater than ' , a , ' and ' , c); 
}else{
    console.log(c, 'is greater than' , a , 'and' , b);
}

/*2. Declare two variables: admin and name.
Assign the value "John" to fname.
Copy the value from fname to admin.
Show the value of admin using console.log.*/

let admin, name;
let fname = 'john';
console.log("name of fname is - ", fname )
let otherName = fname;
admin = otherName;
console.log("after assigning fname to admin, the name of admin is - " , admin)

// other Method
const name1 = {
    fName : "john",
    admin : ''
}
console.log(name1)

// 3 - Datatypes of each variable
let d,e,f,g,h;
d = 10;
e = 'hello';
f = true;
g = null;
h = undefined;
console.log(typeof d,e,f,g,h);

// 4. What will be the result for these expressions?
console.log( 5 > 4 );
console.log("apple" > "pineapple");
console.log("3" > "12")
console.log(undefined == null)
console.log(undefined === null)

