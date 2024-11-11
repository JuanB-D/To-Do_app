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
    },
    Login: async(email, password) =>{
        try{
            const user = await User.findOne({email});
            const isMatch = bcrypt.compare(password, user.password);

            if(!isMatch){
                throw new Error('incorrect password')
            }
            const dataAd = {
                email,
                id:user._id
            }
            const token = jwt.sign(dataAd, process.env.JWT_SECRET_KEY)
            return {data: user, token: token}
        }
        catch(error){
            throw new Error(`error: ${error}`)
        }
    }
}

export default authService;