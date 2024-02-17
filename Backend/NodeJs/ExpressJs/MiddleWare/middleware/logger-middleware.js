var logger = (req,res,next)=>{
    console.log("Logged")
    next()
}
export default logger