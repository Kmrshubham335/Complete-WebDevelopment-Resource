import mongoose from 'mongoose'

//defining the schema for the student

const studentSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:mongoose.Decimal128,required:true,min:18,max:50},
    fees:{type:mongoose.Decimal128,required:true,validate:v=>v>=98000},
    hobbies:{type:Array},
    isactive:{type:Boolean},
    Comment:[{value:{type:String},publish:{type:Date,default:Date.now}}],
    join:{type:Date,default:Date.now}
})

//Compiling Schema
const studentModel = mongoose.model('students',studentSchema)

//creating the document
const createDoc = async () =>{
    try{
        const studentDoc = new studentModel({
            name:'Xavier',
            age:24,
            fees:100500,
            hobbies:['gaming'],
            isactive:true,
            Comment:[{value:'Fifth Comment'}]
        })
        const result = await studentDoc.save()
        console.log(result)
    }
    catch(error){
        console.log(error) 
    }
}


/*
Passing the value as a parameter:
const createDoc = async (nm, ag, fe, hob, isact, comt) => {
 try {
  // Creating New Document
  const studentDoc = new studentModel({
   name: nm,
   age: ag,
   fees: fe,
   hobbies: hob,
   isactive: isact,
   comments: comt
  })
  // Saving Document
  const result = await studentDoc.save()
  console.log(result)
 } catch (error) {
  console.log(error)
 }
}
*/
//-----------------------------------------------------------------------------------------------------------
/*
Creating the multiple Doc and inserting into the database
const createMultiDoc = async () => {
    try {
     // Creating New Document
     const ShubhamDoc = new studentModel({
      name: 'Shubham',
      age: 25,
      fees: 8500.40,
      hobbies: ['dancing', 'racing'],
      isactive: true,
      comments: [{ value: 'This is good' }]
     })
     const KabirDoc = new studentModel({
      name: 'Kabir',
      age: 21,
      fees: 8700.40,
      hobbies: ['dancing', 'racing'],
      isactive: true,
      comments: [{ value: 'This is good' }]
     })
     const jayDoc = new studentModel({
      name: 'Jay',
      age: 27,
      fees: 8400.40,
      hobbies: ['dancing', 'racing'],
      isactive: true,
      comments: [{ value: 'This is good' }]
     })
     // Saving Document
     const result = await studentModel.insertMany([ShubhamDoc, kabirDoc, jayDoc])
     console.log(result)
    } catch (error) {
     console.log(error)
    }
   }
   export { createDoc, createMultiDoc }
   */

export default createDoc