import authService from "../services/auth.service.js";
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
    }
}

export default authController;