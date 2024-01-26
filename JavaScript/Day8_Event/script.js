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

document.body.onmouseover=(e)=>{
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.ClientX,e.ClientY)
    
}
let b_mode = document.querySelector("#id");
let mode = "light";
let body = document.querySelector("body");

b_mode.addEventListener('click', () => {
    if (mode === "light") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        mode = "dark";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        mode = "light";
    }
});
