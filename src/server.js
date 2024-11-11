import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import authRouters from './routes/auth.routes.js';
dotenv.config()

const app = express();process.env.PORT || 3000;
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use('/api/auth', authRouters)

app.listen(PORT, () =>{
    console.log(`server running in port: ${PORT}`)
})


