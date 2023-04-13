import { getDb } from '../index.js';
import { ObjectId } from 'mongodb';

const getReservationsColelction = () => {
    return getDb().collection('reservations');
}

//CREATE 
export const createReservation = async (req, res) => {
    const {
        firstName,
        lastName,
        phone,
        email,
        numberOfGuests,
        day,
        eta
    } = req.body;
    try {
        await getReservationsColelction().insertOne(
            {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                numberOfGuests: numberOfGuests,
                day: day,
                eta: eta,
                status: false
            }
        );
        res.status(201).json({ msg: 'Created successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
};

//READ
export const getReservation = async (req, res) => {
    if (req.user.isAdmin) {
        try {   
            const reservation = await getReservationsColelction().findOne(
                {
                    _id: new ObjectId(req.params.id)
                }
            );
            res.status(200).json(reservation);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' })
    }
};

//READ ALL
export const getAllReservations = async (req, res) => {
    if (req.user.isAdmin) {
        try {   
            const reservations = await getReservationsColelction().find().toArray();
            res.status(200).json(reservations);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' })
    }
};

//UPDATE 
export const updateReservation = async (req, res) => {
    if (req.user.isAdmin) {
        const {
            firstName,
            lastName,
            phone,
            email,
            numberOfGuests,
            day,
            eta,
            status
        } = req.body;
        try {
            await getReservationsColelction().updateOne(
                {
                    _id: new ObjectId(req.params.id)
                },
                {
                    $set: {
                        firstName: firstName,
                        lastName: lastName,
                        phone: phone,
                        email: email,
                        day: day,
                        eta: eta,
                        status: status,
                    }
                }
            );
            res.status(200).json({ msg: 'Updated successfully' });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};

//DELETE
export const deleteReservation = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await getReservationsColelction().deleteOne(
                {
                    _id: new ObjectId(req.params.id)
                }
            );
            res.status(200).json({ msg: 'Deleted successfully' });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};