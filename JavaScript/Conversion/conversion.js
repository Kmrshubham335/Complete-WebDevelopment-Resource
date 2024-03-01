// let a = 34
// let b = Number(a)
// console.log(b,typeof b) 
//34 => Number

// let num = 34
// let str = String(num) 
// console.log(str,typeof str)
//34=>String
 
// let str = "Hello"
// let num = Number(str)
// console.log(num,typeof num )
//We cannot convert String to number. 
//NaN number =>Output

// let bool = true
// let num = Number(bool)
// let str = String(bool)
// console.log(num, typeof num)
//1=>true and 0 =>false
// console.log(str,typeof str)
//true and String

console.log("2" +2) //22
console.log(1+2 + "2") //32 
console.log(1+"2" +2) //122

//-----------------------------------------------------------------------------
//Conversion

console.log(null >= 0)
//true => Because js convert the null into a number. Here null is converted into 0.
console.log(null > 0)
// false
console.log(null >=1)
//false
