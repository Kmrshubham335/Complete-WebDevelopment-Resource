let str="hello"
console.log(str)
console.log(str.length) //5
console.log(str[2])   //L

let obj=
{
    name:"Shubham",
    college:"Kiit",
    
}
// Template Literals

let output =`the name is  ${obj.name} and college name is ${obj.college}`
console.log(output)
let add =`the add of 1 and two is: ${1+2}`
console.log(add)
console.log("Shubham\tKumar")
let len =("Shubham\nKumar")
console.log(len)

// Method In String

// let str1 = "  Shubham Kumar  "
// let str2 = str1.toUpperCase()
// let str3 = str1.toLowerCase ()
// console.log(str2)
// console.log(str3)
// remove whiteSpace From the Start and from the end
// let str4 =str1.trim() 
// console.log(str4)

let str5 = "12345745"
let str6 = str5.slice(2,6) 
console.log(str6)
let str7="Shubham"
let str9 ="kumar"
let str8= str7.concat(str9)
console.log(str8)

let imp = "Shubham"
//replace only one time
console.log(imp.replace("S", "A")) 
console.log(imp.charAt(0)) //S

