let arr=[1,3,5,8,9,10]
// console.log(arr,typeof(arr))
// console.log(arr.length)
//--------------------------------------------------------ARRAYS METHODS---------------------------------

// console.log(arr.toString())                          //1,3,5,8,9,10

// console.log(arr.join(" and "))                       //1 and 3 and 5 and 8 and 9 and 10

// console.log(arr.pop(),"\n",arr)                       //1 [ 1, 3, 5, 8, 9 ] last element will be pop out

// console.log(arr.push("shubham"))
// console.log(arr)                           //  [ 1, 3, 5, 8, 9, 10, 'shubham' ] add one element at last

// console.log(arr.shift())                      // remove the first element
// console.log(arr)                               //[ 3, 5, 8, 9, 10 ]

// console.log(arr.unshift(143))
// console.log(arr)                       //  143, 1,  3, 5, 8, 9, 10

// let arr1=[90,101]
// let a = arr.concat(arr1)
// console.log(a)                      //  1,  3,  5,   8, 9, 10, 90, 101

let num =[1,2,4,5,6,7]
console.log(num.splice(1,2))
//remove the value form that particular index[ 1, 5, 6, 7 ] and it manipulate the operation on the original array.
console.log( "splice" ,num)


 let num1 =[1,2,3,4,5,6,7]
 console.log(num1.slice(1,3))
 console.log("slice", num1)

