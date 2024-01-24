let con = document.body.childNodes[1]
// console.log(con) 
/*<div class="container"> --childNode first of the body
        <div class="box">box1</div>
        <div class="box">box2</div>
        <div class="box">box3</div>
        <div class="box">box4</div>
        <div class="box">box5</div>
    </div>*/
console.log(con.firstChild)
/*text*/
console.log(con.lastChild)
// text

// console.log(con.firstElementChild)
//--Box1 why because the first element is div and  text is not a element
// console.log(con.lastElementChild)
// box5 
// console.log(con.firstElementChild.parentElement)
//container
console.log(con.firstElementChild.children)
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]0: div.box1: div.box2: div.box3: div.box4: div.boxlength: 5[[Prototype]]: HTMLCollection
