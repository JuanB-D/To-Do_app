import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/userShema.js'
import connectDB from '../db/connectDB.js'

connectDB();
const authService = {
    Register: async(name, email, password) =>{
        try{
            const passwordHashed = await bcrypt.hash(password, 10);
    
            const newUser = new User({name, email, password: passwordHashed, tasks: []});
            await newUser.save();
        }
        catch(error){
            throw new Error(`there was an error during Login ${error}`)
        }
    }
}

export default authService;