let a =Number(prompt("Enter the First Number"))
let b =Number(prompt("enter the Second number"))
let random = Math.random()

let add=a+b
let sub = a-b
let mul = a*b
let div = a/b
let expon= a**b

if(random<0.1)
{
    console.log("Addition of the number:" ,sub)
    console.log("Subtraction of the number:",add)
    console.log("multiplication of the number:",div)
    console.log("Division of the number",expon)
    console.log("Expo of the number", div)
}
else
{
    console.log("Addition Calculation : " , a+b) ;
    console.log("Subtraction Calculation : " , a-b) ;
    console.log("Multiplication Calculation : " , a*b);
    console.log("Division Calculation : " ,a**b) ;
}
