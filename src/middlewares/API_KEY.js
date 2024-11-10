import dotenv from 'dotenv';
dotenv.config();

const ApiKeyValidation = (req, res, next) =>{
    const apiKey =  req.header['x-api-key'];
    if(!apiKey){
        return res.status(403).send('Authentication error')
    }
    if(apiKey === process.env.API_KEY){
        next()
    }else{
        return res.status('Authentication error')
    }
}

export default ApiKeyValidation;