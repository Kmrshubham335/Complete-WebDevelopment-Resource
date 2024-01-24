let b = document.getElementById("btn")
b.addEventListener('click',()=>{
    alert("I was double click")
})

let bb =document.getElementById("btn1")
bb.addEventListener('dblclick',()=>{
    document.querySelector(".box").innerHTML="I am changed"
})

document.addEventListener('keydown',(e)=>{
    console.log(e.key)
})