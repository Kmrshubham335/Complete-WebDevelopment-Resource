import mongoose from 'mongoose'
const connectDB = async (DATABASE_URL) =>{
    try {
        const DB_OPTIONS ={
            dbName: 'Login'
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log('DB Connected')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB