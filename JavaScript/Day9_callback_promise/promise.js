// var ans = new  Promise((res,rej)=>{
//     if(true){
//         return res()
//     }
//     else
//     {
//         return rej()
//     }
// })
// ans
// .then(function(){
//     console.log("request has been solved")
// }).catch(function(){
//     console.log("Issue has not been resolved")
// })

//write a promise code where a user has input the number and check weather the number is below the 5 between 0-9

// var number= (prompt("Enter the number "))
// console.log(number)
// var check = new Promise((res,rej)=>{
//     if(number<=5)
//     {
//         return res()
//     }
//     else
//     {
//         return rej()
//     }
// })
// check
// .then(function(){
//     console.log("Number is below 5")
// }).catch(function(){
//     console.log("number is not below 5")
// })

//Create a promise program where we have to take a number from the user and check its greater than 5 or not and check its even or odd.

// Promise chaining:-

// var number2 = (prompt("Enter the number"))
// var check2= new Promise((res,rej)=>{
//     if(number2<=10)
//     {
//         return res()
//     }
//     else
//     {
//         return rej()
//     }
// })
// var pro=check2.then(function(data){
//     console.log(data)
//     return new Promise((res,rej)=>{
//         if(number2%2==0)
//         {
//             return res()
//         }
//         else
//         {
//             return rej()
//         }
//     })
// })
// check2
// .then(function(){
//     console.log("Number is not  greater than 10")
// }).catch(function(){
//     console.log("number is greater than 10")
// })
// pro.then(function(){
//     console.log("given number is the even number")
// }).catch(function(){
//     console.log("It is not the even number")
// })

// Write a promise code whether the number is palindrome or not and also find the sum of the digit of the  number which is given the user.

var number = (prompt("Enter the number"))
var palindrome = new Promise((res,rej)=>{
    let rem ,temp, sum
    temp=number
    while(number>=0)
    {
        rem = number%10
        sum=sum*10+rem
        number= number/10
    }
    if(temp==sum){
        return res()
    }
    else
    {
        return rej()
    }
})
var sum =palindrome.then(function(){
    return new Promise((res,rej)=>{
        let rem ,sum
        while(number>0)
        {
           rem = number%10
           sum= sum+rem
           number=number/10 
        }
        if(true)
        {
            return res()
        }
        else
        {
            return rej()
        }
    })
})
palindrome.then(function(){
    console.log("Number is Palindrome Number")
}).catch(function(){
    console.log("Number is not the Palindrome Number")
})
sum.then(function(){
    console.log("Sum of the digit=")
}).catch(function(){
    console.log("thank you ")
})
