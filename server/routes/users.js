import express from 'express';
import { getUser, getAllUsers, updateUser, getTotalUsers } from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

//READ
router.get('/total', verifyToken, getTotalUsers);
router.get('/:id', verifyToken, getUser);
router.get('/', verifyToken, getAllUsers);
//UPDATE
router.patch('/:id', verifyToken, updateUser);

export default router;