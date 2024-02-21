import UserModel from '../models/user.js'
import bcrypt from "bcrypt";
class UserController {
    static home = (req,res)=>{
        res.render('index')
    }
    static registration = (req,res)=>{
        res.render('registration')
    }
    static createUserDoc = async (req, res) => {
        const hashPassword =await bcrypt.hash(req.body.password,10)
            try {
                //destructuring
                const { name, email, password } = req.body;    //schema names
                const newUser = new UserModel({
                    name,
                    email,
                    password:hashPassword
                    // these are field  in form {name="email"}
                });
                //saving the user
                await newUser.save();
                res.redirect('/login')
                // res.status(200).send('creating user done');
            } catch (error) {
                console.error('Error creating user:', error);
                res.status(500).send('Error creating user');
            }
        }
    // static createUserDoc = async (req, res) => {
    //         try {
    //             //destructuring
    //             const { name, email, password } = req.body;    //schema names
    //             const newUser = new UserModel({
    //                 name,
    //                 email,
    //                 password
    //                 // these are field  in form {name="email"}
    //             });
    //             //saving the user
    //             await newUser.save();
    //             res.redirect('/login')
    //             // res.status(200).send('creating user done');
    //         } catch (error) {
    //             console.error('Error creating user:', error);
    //             res.status(500).send('Error creating user');
    //         }
    //     } without decrypt code
    
    static verifyLogin = async (req,res) =>{
        try {
            const {email,password} =req.body  //this email and password are of user enter in the login form 
            console.log(email)
            const result = await UserModel.findOne({ email: email })   //checking the email from the database
            if(result!=null){
                const isMatch = await UserModel.findOne(password,result.password)
               if(result.email==email && isMatch){
                    res.send(`<h1>Dashboard</h1>`)
                }else{
                    res.send("<h1>Email or password is not Valid</h1>")
                }
            }
            else{
                res.send("<h1>not Valid User</h1>")
            }
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Error creating user');
        }
    }

    static login = (req,res)=>{
        res.render('login')
    }
}
export default UserController