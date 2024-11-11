import authService from "../services/auth.service.js";
import cookieParser from "cookie-parser";
const authController = {
    Register: async(req, res) =>{
        try{
            const {name, email, password} = req.body;
            if(
                !name ||
                !email ||
                !password
            ){
                throw new Error('all params required');
            }

            await authService.Register(name, email, password);
            res.status(201).send('User created succesfully');
        }
        catch(error){
            res.status(400).send(`error: ${error.message}`);
        }
    },
    Login: async(req, res) =>{
        try{
            const {email, password} = req.body;
            if(
                !email ||
                !password
            ){
                throw new Error('all params required')
            }

            const response = await authService.Login(email, password);
            res.cookie('token', response.token, {httpOnly: true})
            res.cookie('email', response.data.email, {httpOnly: true})
            res.cookie('name', response.data.name, {httpOnly: true})
            res.status(200).send('register succesfully')
        }
        catch(error){
            res.status(400).send(`error: ${error}`)
        }
    }
}

export default authController;