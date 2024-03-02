//Object literals

const Mysym = Symbol("Key1"); //creating the symbol

const User = {
  name: "Shubham",
  [Mysym]: "myKey1",
  "full name": "Shubham Kumar",
  age: 21,
  location: "Kolkata",
  isAvailable: true,
  email: "shubham@xyx.com",
  lastLoginDay: ["Monday", "Tuesday"],
};

//console.log(User.name)
console.log(User["full name"]);
// console.log(User[Mysym])
User.email = "s_kmr@xys.com"; //changing the email
console.log(User.email);
// Object.freeze(User)
// prevent any modification in object
User.email = "Hii@xyz.com";
console.log(User.email);
//s_kmr@xys.com

User.welcome = function () {
  console.log("Welcome All");
  console.log(`Welcome ${this.name}`)
  console.log(`Welcome ${User["full name"]}`)
};

console.log(User.welcome);
//[Function (anonymous)]
console.log(User.welcome());
//Welcome All
