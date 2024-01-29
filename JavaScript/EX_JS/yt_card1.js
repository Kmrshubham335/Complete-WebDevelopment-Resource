function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
let html = `<div class="card">
<div class="image">
    <img src=${thumbnail}alt="">
    <div class="capsule">${duration}</div>
</div>
<div class="text">
    <h1>${title}</h1>
    <p>${cName} . ${views} views . ${monthsOld} year ago</p>
</div>
</div>`
}
createCard("Build a Countdown Timer from Scratch - JavaScript Project","WsCube Tech",1350000,1,"36:4","https://i.ytimg.com/vi/swEsvQcIJW0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOLwokpZnLNMHETdJkewL8RdClaQ")