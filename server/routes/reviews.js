import express from 'express';
import { getAllReviews, getRandomReviews, deleteReview, createReview, updateReview } from '../controllers/reviews.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

//CREATE 
router.post('/', verifyToken, createReview);

//READ
router.get('/all', getAllReviews);
router.get('/', getRandomReviews);

//UPDATE
router.put('/', verifyToken, updateReview);

//DELETE
router.delete('/', verifyToken, deleteReview);

export default router;