const date = new Date()
/*
console.log(date)
//OutPut:-2024-03-01T14:34:50.904Z,type:-Object
console.log(date.getTime())
//1709303836466
console.log(date.toISOString())
//Output:2024-03-01T14:37:50.067Z
const n= date.toString()
console.log(n, typeof n)
//Fri Mar 01 2024 20:08:17 GMT+0530 (India Standard Time) ,Type:- string
console.log(date.toJSON())
//2024-03-01T14:40:56.512Z
console.log(date.toLocaleString())
//1/3/2024, 8:14:23 pm
console.log(date.toUTCString())
//Fri, 01 Mar 2024 14:45:50 GMT
*/

const createDate = new Date(2024,1,2)
// console.log(createDate.toDateString())
console.log(createDate.toLocaleDateString())
//2/2/2024

let myCreatedDate = new Date("01-03-2024")

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})