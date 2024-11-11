import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const uri = process.env.MONGODB_URI

async function connectDB(){
    try{
        await mongoose.connect(uri, {
        })
        console.log('connectDb succesfully');
    }
    catch(error){
        throw new Error(`ther was an error during connectDB : ${error}`)
    }
}
export default connectDB;