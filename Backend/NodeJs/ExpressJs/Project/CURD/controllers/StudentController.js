import studentModel from "../models/studentModels.js";
class StudentController 
{
    static createDoc = async (req,res)=>{
        try 
        {
            const {rollno,name,age,fees,address,parent} = req.body
            const doc = new studentModel ({             
                rollno:rollno,
                name:name,
                age:age,
                fees:fees,
                address:address,
                parent:parent
            })
            const result = await doc.save()
            console.log(result)        
             res.redirect('/Student');
         } catch (error) {
            
         }
        res.redirect('/Student');
    }
    static getDoc = async (req,res) =>{
        try {
            const result = await studentModel.find();
            console.log(result);
            res.render('index',{data:result});
        } catch (error) {
            console.log(error);
        }
    }

    static editDoc = async (req,res) =>{
        console.log(req.params.id)
        try{
            const result = await studentModel.findById(req.params.id)
            console.log(result)
            res.render('edit',{data:result});  
        }catch(error){
            console.log(error)
        }
    
    }
    static updateDoc = async (req,res) =>{
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id,req.body)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        res.redirect('/Student');  
    }
    static DeleteDoc =async (req,res) =>{
         try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.redirect('/Student'); 
         } catch (error) {
            console.log(error)
         }
    }
    static WelcomeDoc = (req,res)=>
    {
        res.render('welcome');
    }
    static explore = (req, res) => 
    {
        res.redirect('/Student');
    }
}
export default StudentController;
