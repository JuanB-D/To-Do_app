import express from 'express'
const publicRoutes = express.Router();

publicRoutes
    .get('/register', (req, res) =>{
        res.redirect('/pages/reg.html')
    })

export default publicRoutes;