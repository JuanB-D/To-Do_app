import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import authRouters from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import publicRoutes from './routes/public.routes.js';
import { fileURLToPath } from 'url';
import path  from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.use('/api/auth', authRouters)
app.use('/pages', publicRoutes)

app.listen(PORT, () =>{
    console.log(`server running in port: ${PORT}`)
})


