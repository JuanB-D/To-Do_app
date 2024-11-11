import dotenv from 'dotenv';
dotenv.config();

const apiKeyValidation = (req, res, next) =>{
    const origin = req.get('Host') || req.get('Origin')
    if(origin === 'localhost:3000'){
        return next()
    }

    const apiKey =  req.headers['x-api-key'];
    if(!apiKey){
        return res.status(403).send('Authentication error')
    }
    if(apiKey !== process.env.API_KEY){
        return res.status('Authentication error')
    }
    next()
}

export default apiKeyValidation;