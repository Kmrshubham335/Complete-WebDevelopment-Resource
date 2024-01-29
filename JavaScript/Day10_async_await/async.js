console.log("hello")
async function getData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Hii i am async function")
            console.log("I wil wait for 3 sec to execute because i am in setTimeout function")
            res(2000)
        }, 5000)
    })
}
async function main() {
    console.log("Hii i am in the main function")
    console.log("We are the synchronous line")
    let data = await getData()
    console.log("I will wait for the data from the getData Function after that I will be executed", data)
    console.log("data has be retreive")
}
main()