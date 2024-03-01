const num = new Number(100)
console.log(num)
console.log(num.toString(),typeof num)
//Output:- 100 object
const num1=129.373
console.log(num1.toPrecision(4))
//Output:- 129.4

//-------------------------------------------Math Function--------------------------------


// console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10))+1)

const min =10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1))+min)

const f = 12.33453
console.log(Math.floor(f))
//12:-Output
console.log(Math.round(f))
//12

