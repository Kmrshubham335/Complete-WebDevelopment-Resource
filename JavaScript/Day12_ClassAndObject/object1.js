//Singleton Object

const User = {}
User.id="123ada"
User.email="Hello@gmail.com"
User.Logout=false
// console.log(User)

const obj1={1:"a" ,2:"b"}
const obj2 ={3:"c" ,4:"d" }
const obj3 ={...obj1,...obj2}
// console.log(obj3) 
//create the new Object with the help of Spread Operator

//Iterating Over the Object after retriving from the DB

const data =[
    {
        id:22343,
        name:"shubham",
        roll:22321,
        branch:"CSE"
    },
    {
        id:22344,
        name:"Raj",
        roll:22324,
        branch:"CSE"
    },

    {
        id:22345,
        name:"Rajesh",
        roll:22325,
        branch:"CSE"
    }
]

//console.log(data[1].name)


console.log(Object.keys(User))
console.log(Object.values(User))
