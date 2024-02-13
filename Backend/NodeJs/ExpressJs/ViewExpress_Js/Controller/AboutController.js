import {join} from 'path'
const About = (res,req)=>
{
    // res.send('<h1>About Page</h1>')
    // res.sendFile("C:\\Users\KIIT\\Desktop\Web dev\\Backend\\NodeJs\\ExpressJs\\ViewExpress_Js\\Views\\index.html")
    console.log(join(process.cwd(),'view','index.html'))
    res.sendFile(join(process.cwd(),'view','index.html'))
}
export {About}