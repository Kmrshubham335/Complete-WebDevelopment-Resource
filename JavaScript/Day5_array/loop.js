// let arr =[1,2,4,5,6]

// arr.forEach((value,index,arr)=>{
//     console.log(value)
// })

let arr = [1, 2, 4, 5, 6]
const red = (a, b) => {
    return a * b
}
console.log(arr.reduce(red))             //240

console.log(Array.from("Shubham"))
//  'S', 'h', 'u','b', 'h', 'a', 'm'


//                                                   Factorial of the number


// const fact =(a)=>{
//     let f=1
//     for(let i=1;i<a;i++)
//     {
//         f = f*i;
//     }
//     return f
// }
// let ff=fact(5)
// console.log("factorial of the number are ",ff)

                                                        //Avg of the array

let marks = [85, 97, 35, 44, 76, 60]
let sum = 0
for (const i of marks) {
    sum += i
}
let avg = sum + marks.length
console.log(avg)
