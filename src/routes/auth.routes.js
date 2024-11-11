import express from 'express';
import apiKeyValidation from '../middlewares/API_KEY.js';
import authController from '../controllers/auth.controller.js';
const authRouters = express.Router();

authRouters
    .post('/register', apiKeyValidation, authController.Register)

export default authRouters;