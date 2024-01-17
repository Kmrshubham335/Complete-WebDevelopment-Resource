                                        //Question1
// for (let i=0;i<100;i++) 
// {
//     if(i%2==0)
//     {
//         console.log(i)    
//     }
// }

                                        //Question2

// let gamenum=24
// let a=prompt("enter the number")
// while(a != gamenum){
//     let a=prompt("enter the number again")
// }
// console.log("you predict the right number")

// Palindrome number
let number = prompt("Enter the number")
let n=0
n=number
let sum
while(n>0)
{
    let rem = n%10
     sum = sum*10 +rem
     n=n/10
}
if(n==sum)
{
    console.log("it is a palindrome number")
}
else
{
    console.log(`${number}is the not a palindrome number`)
}



