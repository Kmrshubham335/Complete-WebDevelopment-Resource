let age = 1;
// let grace = 2;
//Operator 
// age += grace
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)
//Unary Operator
let s = 8;
let t = 8;
console.log("s= ", s, "t= ", t)
s = s - 1;
console.log(s)
t = t + 1;
console.log(t);


//Ternary Operators
a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

//Comparison Operator

let o = 5;
let l = 3;
let q = "Hello";

if (o == l) {
    console.log("Both values are same")
}
else if (o === l) {
    console.log("Data Type and Values are not Same")
}
else {
    console.log("For === both number and dataType Should be Same")
}