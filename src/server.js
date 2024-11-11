import express from 'express';
import cors from 'cors';
import connectDB from './db/connectDB.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();process.env.PORT || 3000;
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

connectDB()

app.listen(PORT, () =>{
    console.log(`server running in port: ${PORT}`)
})


