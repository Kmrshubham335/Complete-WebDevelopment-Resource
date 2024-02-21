import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    rollno: { type: Number, required: true },
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 30 },
    fees: { type: Number, required: true, validate: value => value >= 1000000 },
    address: { type: String, required: true },
    parent:{ type: String, required: true }
});

const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;
