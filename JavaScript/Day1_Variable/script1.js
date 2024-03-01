var a = 65;
// console.log(a)
var a = 45;
{
  var a = 678;
  console.log(a);
}
console.log(a);

//                                             let

let s = 45;
{
  let s = 90;
  console.log(s); //first block is executed
  //block scope
}
console.log(s);

let x = "Shubham";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.table([typeof x, typeof y, typeof z, typeof p, typeof q, typeof r]);