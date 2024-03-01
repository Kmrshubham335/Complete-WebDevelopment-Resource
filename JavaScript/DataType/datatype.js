//Primitive Datatype
/*
let x = "Shubham";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.table([typeof x, typeof y, typeof z, typeof p, typeof q, typeof r]);
*/
/*
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'number'    │
│ 2       │ 'number'    │
│ 3       │ 'boolean'   │
│ 4       │ 'undefined' │
│ 5       │ 'object'    │
└─────────┴─────────────┘ */

// ---------------------------------------------------------------------------
//Increment and Decrement Operator
// let inc_X  = 3
// console.log(inc_X) //3
// let y = inc_X++
// console.log(y) //3 Postfix will first print the value after that increment will be done.
// console.log(inc_X)//4

// let y_inc = 4
// console.log(y_inc)
// console.log(++y_inc) //5 prefix is opposite to the postfix

//-------------------------------------------------------
//Non primitive datatype:-Array, Object ,function.
//Their datatype is objectFunction

const myFunction = function(){
    console.log("hello world")
} 
myFunction() //calling the function
const array = ['Shubham', 'Raj']
console.log(array)
let object={
    name:"Raj",
    age:21
}
console.log(object)