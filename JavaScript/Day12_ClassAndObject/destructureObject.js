let [a, b] = [1, 2, 4];
// console.log(a,b)
//Output:-1,2

//array destructuring
let [c, d, ...rest] = [50, 40, 3, 4, 5, 6, 7, 8, 9, 9, 8, 10, 87];
// console.log(c,d,rest)
/*50 40 [
    3, 4, 5, 6,  7,
    8, 9, 9, 8, 10,
   87
 ]*/


//Object Destructuring

const User = {
  Name:"Shubham",
  RollNo:221221,
  Subject:"Computer Application"
}

// const {Name} = User
// console.log(Name)
//Shubham
const {Name,RollNo} = User
// console.log(Name,RollNo)

