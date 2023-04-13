import express from 'express';
import { register, login, loginAdmin } from '../controllers/auth.js';

const router = express.Router();

//REGISTER
router.post('/register', register);

//LOGIN
router.post('/login/admin', loginAdmin);
router.post('/login', login);

export default router;