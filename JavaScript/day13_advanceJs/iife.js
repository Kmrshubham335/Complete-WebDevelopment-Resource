async function sleep (){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(60)
        },1000)
    })
}
// let a = await sleep()
// let b = await sleep()
// SyntaxError: await is only valid in async functions and the top level bodies of modules.

( async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
});

(function (){
    console.log("hello")
})();

(()=>{
    console.log("An unnamed arrow function")
})

(function(arg1, arg2) {
    console.log("Argument 1:", arg1);
    console.log("Argument 2:", arg2);
})("Hello", 42);
