// async function getData()
// {
//     let fetchData= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let Wait = await fetchData.json()
//     console.log(Wait)
// }
// getData()

async function PostRequest() {
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json()
  console.log(data)
}
