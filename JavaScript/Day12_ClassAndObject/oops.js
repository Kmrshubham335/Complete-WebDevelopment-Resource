const user =
{
    username:"shubham",
    fullName:"ShubhamKumar",
    loginCount:23,
    getDetail:function(){
        // console.log(`username: ${this.username}`)  
        //use of the this keyword
        // console.log(this)
        // username: 'shubham',
        // fullName: 'ShubhamKumar',
        // loginCount: 23,
        // getDetail: [Function: getDetail]
    }
}
// console.log(user)
// console.log(user.fullName)

function user(username,fullName,loginCount)
{
    this.username=username
    this.fullName=fullName
    this.loginCount=loginCount
}
const userOne = user("Rahul","Kumar",21)
console.log(userOne)