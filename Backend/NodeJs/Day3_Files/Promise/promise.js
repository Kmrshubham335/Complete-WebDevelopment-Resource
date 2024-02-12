import fs from  "fs/promises"
let a = await fs.writeFile("promise.txt","Creating file with the help of promise writeFile")
// File has been created 
let b = await fs.readFile("promise.txt")
console.log(b.toString())
let c = await fs.appendFile("promise.txt","\nappending the file")
console.log(c)