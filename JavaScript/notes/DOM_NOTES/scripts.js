let butt =document.getElementById("changeBackground")
console.log(butt)
butt.addEventListener('click',()=>{
    document.body.style.backgroundColor="yellow"
})
let can=document.getElementById("cancel")
console.log(can)
can.addEventListener('click',()=>{
    document.body.style.backgroundColor="white"
    document.body.style.border='2px solid black'
})
let t =document.getElementsByTagName("article")
console.log(t)
for(let i=0;i<t.length;i++)
{
    t[i].style.border='5px solid red'
}
