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

const updateOneDoc = async (id) => {
  try {
      const updatedDoc = await studentModel.findByIdAndUpdate(id, { name: 'Gourav' }, { new: true });
      
      if (!updatedDoc) {
          console.log("Document not found");
          return;
      }
      
      console.log("Updated User:", updatedDoc);
      // return updatedDoc;
  } catch (error) {
      console.log(error);
  }
};

export {updateOneDoc}