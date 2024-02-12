const { error } = require("console")
const fs = require("fs")
console.log("Start")
fs.writeFile("first.txt","My first creation of file with fs",()=>{
    console.log("done")
    fs.readFile("first.txt",(error,data)=>{
        console.log(error,data.toString())
        console.log("inside the readfile Function")
    })
})
fs.appendFile("first.txt","Appending the text in first.txt",(e,d)=>{
    console.log(d)
})
console.log("ending")