/*
function addTwoNumber(number1,number2){
//    console.log(number1+number2)
    return number1+number2    
}
const result = addTwoNumber(12,2)   //14
//console.log(result)  
//undefined.Because 0undefined is the default value of the function

console.log(result) //14 
*/

/*
function UserName (name){
    return `Just a simple message for you ${name}`
}
const result = UserName()
//console.log(result)  
//Just a simple message for you Shubham
console.log(result) 
//Just a simple message for you undefined 
*/

function calculateCartPrice1(num1){
    return num1
}
// const result = calculateCartPrice(12)
// console.log(result)  
//12
function calculateCartPrice2(val1,val2,...num1){
    return num1
    
}
const result = calculateCartPrice2(12,2,3,4,5,6,7,8,9,10)   
console.log(result)

//Passing Object as a parameter in the function
/*
const product = {
    name : "Laptop",
    price : 1200,
    category : "Electronics"
}
function showProductDetails(product){
    console.log(`Product Name : ${product.name} and price is ${product.price} and category is ${product.category}`)
}
// showProductDetails(product)
showProductDetails({
    name : "Mobile"
    ,price : 1200,
    category : "Electronics"
})
*/

//Passing Array as a parameter in the function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


