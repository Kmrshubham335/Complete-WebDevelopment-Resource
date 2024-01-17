function adjective1() {
    return{
        name1:"Crazy",
        name2:"Amazing",
        name3:"fire"
    };
}
function shop() {
    return{
        name1:"Engine",
        name2:"Food",
        name3:"Garments",
    }
}
function another_word() {
    return{
        name1:"Bros",
        name2:"Limited",
        name3:"Hub",
    }
}
function generateBusinessName() {
    const adj = adjective1();
    const business = shop();
    const word = another_word();
    const randomName = `${adj.name2} ${business.name3} ${word.name2}`;
    return randomName;    
}
const business =generateBusinessName()
console.log("the name of the business is", business)
