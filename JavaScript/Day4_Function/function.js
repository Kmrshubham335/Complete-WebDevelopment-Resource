// function na(name) {
//     console.log("Hii"+name)
// }
// na("Shubham")
// na("Cutie")

// function add(a,b,c) {
//     // console.log(a + b + c)  C=7 output 14
//     console.log(a + b + c)  // 11
// }
// add(3,4 , 4)
 //invoking the function

//Arrow Function
// const function1 = (x) =>
// {
//     console.log("Value of the X is :"+x)
// }
// function1(21)

// r and y are the local variable of the function are scope are within the function not outside the function
// const func = (r,y) =>
// {
//     let sub = r-y
//     return sub
// }
// let s = func(12,2)
// console.log(s)

// multiply

// const mul = (x,y,c=12) =>
// {
//     let m = x*y*c
//     return m
// }
// let mm = mul(1,2)
// console.log(mm)

                                            //For-Each

// let arr =[1,2,4,5,6]
// arr.forEach((val , idx ,arr) =>
// {
//     console.log(val,idx,arr)
// })


                                                // Question

// let arr =[2,4,6]
// arr.forEach((arr) =>
// {
//     console.log(arr*arr)

// })
// ___________________________question end_________________________________________________________

// Map  can  be use to create the new array

// let newarr =[2,4,6]
// newarr.map((newarr) =>
// {
//     return newarr*newarr
    
// })
// console.log(newarr)

//Filter

let arrr= [23,2,4,8,6,10]
let even_array =arrr.filter((val) =>
{
    // return arrr%2==0
    return val>2
})
console.log(even_array)  //[ 2, 4, 8, 6, 10 ]




