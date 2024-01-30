const user = {
    username: "Shubham",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne =  User("shubham", 12, true)
// console.log(userOne)
/*  username: 'shubham',
loginCount: 12,
isLoggedIn: true,
greeting: [Function (anonymous)]
*/
// const userTwo =  User("Rahul", 11, false)
console.log(userTwo)
/*
username: 'Rahul',
loginCount: 11,
isLoggedIn: false,
greeting: [Function (anonymous)]

Note:Without the new keyword it will overRide the value to prevent OverRiding of the value we use the new keyword 
*/
const userOne = new  User("shubham", 12, true)
// const userTwo = new  User("Rahul", 11, false)
console.log(userOne);
// console.log(userOne.constructor);