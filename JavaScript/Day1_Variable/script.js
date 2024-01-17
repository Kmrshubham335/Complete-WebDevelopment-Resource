console.log(" Variables, Data Types & Objects ");
// Creating the variable
console.log("declaring the variable using var");
var a = 99;
a=a+1;
var b = 1;
console.log(a + b); // 101

// String data type

var na = "John";
var age = 32;
var city = "New York";
console.log(`My Name is ${na} and I am ${age} years old living in ${city}.`);

//type  of variable
console.log(typeof na, typeof age);

// Declare and initialize variables with different data types(let)

let number1 = 83
let a1 = number1+1;
{
    let a1=69
    console.log(a1 + "\tInside the scope")
}
console.log(a1 + "\toutside the scope")

// Types of dataType primitive and non-primitive

let q =23;
let w = "hello"
let e =3.9
let r = true
let t = undefined
let y = null
console.log(typeof q,typeof w,typeof e,typeof r,typeof t,typeof y)

// Creating the object

let object ={
    name:"shubham",
    "college name":"kiit",
    city:"bbs"
}
console.log(object)
object.fee="8.8lac"
console.log(object)

let obj ={
    name:"shubham kumar",
    "course":"mca",
    fee:"8.8lac"
};
console.log(obj)