import dotenv from 'dotenv';
dotenv.config();

const apiKeyValidation = (req, res, next) =>{
    const apiKey =  req.headers['x-api-key'];
    if(!apiKey){
        return res.status(403).send('Authentication error')
    }
    if(apiKey === process.env.API_KEY){
        next()
    }else{
        return res.status('Authentication error')
    }
}

export default apiKeyValidation;