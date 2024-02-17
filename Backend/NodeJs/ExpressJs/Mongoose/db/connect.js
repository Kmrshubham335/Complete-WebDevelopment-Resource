import mongoose from 'mongoose'
// const db =()=>{
//    return  mongoose.connect("mongodb://localhost:27017/students").then(()=>{
//     console.log("Db connected")
//     }).catch((err)=>{
//         console.log(err)
//     })
// }


//Connection Create
const db =async ()=>{
    try {


        await mongoose.connect("mongodb://localhost:27017/students")
        console.log("Db connected")
    } catch (err) {
        console.log(err)
    }
 }
export default db
