let [a, b] = [1, 2, 4];
// console.log(a,b)
//Output:-1,2

//array destructuring
let [c, d, ...rest] = [50, 40, 3, 4, 5, 6, 7, 8, 9, 9, 8, 10, 87];
// console.log(c,d,rest)
/*50 40 [
    3, 4, 5, 6,  7,
    8, 9, 9, 8, 10,
   87
 ]*/

//Object Destructuring

/*let obj = {
    x: 1,
    e: 2,
    c: 3
};

let { x, e } = obj;

console.log(x, e);*/
//1,2

//Spread

function sum(a, b, c) {
  return a + b + c;
}
let arr = [1, 2, 4];
// console.log(sum(...arr))

//Scope in Js
const ss = 13;
let se = 14;
var ee = 12;
//global Scope
if (true) {
  // ss=14
  // se=20
  ee = 15;
  //Local Scope
}
// console.log(ss)
// console.log(se)
console.log(ee);
