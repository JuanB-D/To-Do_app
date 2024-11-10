import express from 'express';
import cors from 'cors';

const app = express();process.env.PORT || 3000;
const PORT = 

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());

app.listen(PORT, () =>{
    console.log(`server running in port: ${PORT}`)
})


