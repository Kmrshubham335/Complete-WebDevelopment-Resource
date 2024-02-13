
const allStudent = (req,res)=>{
    res.send("All Student")
}
const deleteStudent = (req,res)=>{
    console.log(req.params)
    const {id} = req.params
    console.log(id)
    if(id == 10)
    {
      return  res.send(`Shubham Id delete`)
    }
    else
    {
        return res.send(`Following  Id delete`)
    }
}
export {allStudent ,deleteStudent}