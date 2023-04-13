import express from 'express';
import { createReservation, updateReservation, deleteReservation, getAllReservations, getReservation } from '../controllers/reservations.js';

const router = express.Router();

//CREATE
router.post('/', createReservation);

//READ
router.get('/:id', getReservation);
router.get('/', getAllReservations);

//UPDATE
router.put('/:id', updateReservation);

//DELETE
router.delete('/:id', deleteReservation);

export default router;