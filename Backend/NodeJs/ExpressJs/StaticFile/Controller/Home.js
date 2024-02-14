import {join} from 'path'
 const home =(req,res)=>{
   // console.log(join(process.cwd(),'views','index.html'))
    res.sendFile(join(process.cwd(),'views','index.html'))
   //C:\Users\Sam\Desktop\Web dev\Backend\NodeJs\ExpressJs\StaticFile\views\index.html
 }
 export{home}