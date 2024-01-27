let istatus = document.querySelector("h5")
let btn = document.querySelector("#add")
// let re = document.querySelector("#remove")
let check = 0
document.title="Adding friend feature with same button"

btn.addEventListener("click", () => {
    if (check == 0) {
        istatus.innerText = "hello"
        istatus.style.color = "Green"
        btn.innerHTML="undo"
        check = 1
    }
    else {
        istatus.innerText = "world"
        istatus.style.color = "red"
        btn.innerHTML="redo"
        check = 0
    }
})

// re.addEventListener("click",()=>{
//     istatus.innerText="GirlFriend"
//     istatus.style.color="red"
// })