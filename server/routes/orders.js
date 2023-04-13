import express from 'express';
import { createOrder, getAllOrders, getOrder, getOrderByUserId, updateOrder, deleteOrder, getOrderStats, getTotalOrders, getRevenue } from '../controllers/orders.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

//CREATE
router.post('/', createOrder);
 
//READ 
router.get('/stats', verifyToken, getOrderStats);
router.get('/total', verifyToken, getTotalOrders);
router.get('/revenue', verifyToken, getRevenue);
router.get('/user/:id', verifyToken, getOrderByUserId);
router.get('/:id', verifyToken, getOrder);
router.get('/', verifyToken, getAllOrders);

//UPDATE
router.put('/:id',verifyToken, updateOrder);

//DELETE
router.delete('/:id',verifyToken, deleteOrder);

export default router;