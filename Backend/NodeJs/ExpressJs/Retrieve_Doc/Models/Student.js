import mongoose from "mongoose";

//defining the schema for the student

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: mongoose.Decimal128, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 98000,
  },
  hobbies: { type: Array },
  isactive: { type: Boolean },
  Comment: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

//Compiling Schema
const studentModel = mongoose.model("students", studentSchema);

/*
//Retrieve All Document
const getAllDoc = async ()=>{
    const result = await studentModel.find()
    console.log(result)
    result.forEach((item)=>{
        // Retriving all the name from the db
        console.log(item.name)
        // Retriving all the age from the db
    })
}
*/
//Retriving all the document with Specific field
//
// const getAllDocsSpecificfield = async ()=>{
//     const result = await studentModel.find().select(['name','age'])
//     //Include and for excluding the specific field we will put (-) sign before that ot put name:0 and age:0
//     console.log(result)
//     result.forEach((item)=>{

//     })
// }

//Get get the single Doc
// const getSingleDoc = async ()=>{
//     const result = await studentModel.findById("65ce0ced7356bf21d46351e8")
//     console.log(result)
// }

//Retrieve Document by field
/*
const getDocByField = async () => {
  // const result = await studentModel.find({name:'shubhamKumar'})
  // const result = await studentModel.find({ name: 'ShubhamKumar' }).select('name age')
  //Retrieve Limited Data
  // const result = await studentModel.find().limit(1)
  // const result = await studentModel.find().countDocuments()
  const result = await studentModel.find().sort({age:1}) //sorting by the age
  console.log(result);
};
*/
const mixDoc = async () => {
  const result = await studentModel.find({}, { name: 1, age: 1 }, { limit: 0, skip: 0 })
  console.log(result)
}

// Comparison Query Operator
/*
   const compDoc = async () => {
    const result = await studentModel.find({ age: { $gt: 25 } }) // Greater Than
    // const result = await studentModel.find({ age: { $gte: 25 } }) // Greater Than Equal
    // const result = await studentModel.find({ age: { $lt: 25 } }) // Less Than
    // const result = await studentModel.find({ age: { $lte: 25 } }) // Less Than Equal
    // const result = await studentModel.find({ age: { $ne: 25 } }) // Not Equal
    // const result = await studentModel.find({ age: { $in: [21, 25] } }) // Value specified in Array
    // const result = await studentModel.find({ age: { $nin: [21, 25] } }) // Value not specified in Array
    console.log(result)
   }
   */

// Logical Query Operator
/*
const logDoc = async () => {
 const result = await studentModel.find({ $and: [{ age: 27 }, { fees: 16500.4 }] })
 // const result = await studentModel.find({ $or: [{ age: 26 }, { fees: 8400.4 }] })
 // const result = await studentModel.find({ $and: [{ age: { $gt: 25 } }, { fees: 8400.4 }] })
 // const result = await studentModel.find({ $or: [{ age: { $gt: 25 } }, { fees: 8400.4 }] })
 // const result = await studentModel.find({ age: { $not: { $gt: 25 } } })
 // const result = await studentModel.find({ $nor: [{ age: 27 }, { fees: 6500.4 }] })
 console.log(result)
}
*/
export { mixDoc };
