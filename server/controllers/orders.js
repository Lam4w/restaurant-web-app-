import { getDb } from '../index.js';
import { ObjectId } from 'mongodb';

const getOrdersColelction = () => {
    return getDb().collection('orders');
}

//CREATE 
export const createOrder = async (req, res) => {
    const {
        userId,
        name,
        address,
        phone,
        note,
        products,
        total,
        date,
    } = req.body;
    try {
        await getFoodsColelction().insertOne({
            userId: userId,
            name: name,
            address: address,
            phone: phone,
            note: note,
            products: products,
            total: total,
            date: date,
            isDelivered: false
        });
        res.status(201).json({ msg: 'Created successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
};

//READ
export const getOrder = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const order = await getOrdersColelction().findOne(
                {
                    _id : new ObjectId(req.params.id)
                }
            )
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' })
    }
};

//READ ALL ORDERS
export const getAllOrders = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const orders = await getOrdersColelction().find().toArray();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' })
    }
};

//READ ORDER BY USER ID
export const getOrderByUserId = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const orders = await getOrdersColelction().find(
                {
                    user_id: req.params.id
                }
            ).toArray();
            res.status(200).json(orders);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' })
    }
};

//UPDATE
export const updateOrder = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await getOrdersColelction().updateOne(
                {
                    _id: new ObjectId(req.params.id)
                },
                {
                    $set: req.body
                }
            );
            res.status(200).json({ msg: "Updated successfully" });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' })
    }
};

//DELETE  
export const deleteOrder = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await getOrdersColelction().deleteOne(
                {
                    _id: new ObjectId(req.params.id)
                }
            );
            res.status(200).json({ msg: "Deleted successfully" })
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};

//GET ORDER STATS 
export const getOrderStats = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            let orderStats = [];
            const pipeline = [
                {
                    $project: {
                        month: { $month: "$date" },
                    },
                },
                {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 },
                    },
                },
            ];

            const data = await getOrdersColelction().aggregate(pipeline);

            for await (const doc of data) {
                orderStats.push(doc);
            }

            res.status(200).json(orderStats)
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};

//GET TOTAL ORDERS
export const getTotalOrders = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const data = await getOrdersColelction().countDocuments();

            res.status(200).json(data);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};

//GET REVENUE
export const getRevenue = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const orders = await getOrdersColelction().find().toArray();
            let totalRevenue = 0;

            orders.forEach(order => {
                totalRevenue = totalRevenue + order.total;
            });

            res.status(200).json(totalRevenue);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ msg: 'Access denied' });
    }
};