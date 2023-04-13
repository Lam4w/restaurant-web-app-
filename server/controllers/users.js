import { getDb } from '../index.js';
import { ObjectId } from 'mongodb';

const getUsersColelction = () => {
    return getDb().collection('users');
}

//READ
export const getUser = async (req, res) => {
    if (req.user.isAdmin || req.user._id === req.params.id) {
        try {
            const user = await getUsersColelction().findOne(
                {
                    _id: new ObjectId(req.params.id)
                }
            )
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};
//UPDATE
export const updateUser = async (req, res) => {
    try {
        await getUsersColelction().updateOne(
            {
                _id: new ObjectId(req.params.id)
            },
            {
                $set: req.body
            }
        );
        res.status(200).json({ msg: "Updated successfully"});
    } catch (err) {
        res.status(500).json(err);
    }
};

//READ ALL
export const getAllUsers = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const users = await getUsersColelction().find().toArray();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};

//GET TOTAL USERS
export const getTotalUsers = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const data = await getUsersColelction().countDocuments();

            res.status(200).json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};
