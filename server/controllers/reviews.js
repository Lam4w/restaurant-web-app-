import { getDb } from '../index.js';
import { ObjectId } from 'mongodb';

const getReviewsColelction = () => {
    return getDb().collection('reviews');
}

//CREATE
export const createReview = async (req, res) => {
    if (req.user.isAdmin) {
        const {
            name,
            desc
        } = req.body;
        try {
            await getReviewsColelction().insertOne(
                {
                    name: name,
                    desc: desc
                }
            )
            res.status(201).json({ msg: "Saved successfully" });
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access Denied')
    }
};

//READ 
export const getAllReviews = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const reviews = await getReviewsColelction().find().toArray();
            res.status(200).json(reviews);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access Denied')
    } 
};

//READ RANDOM REVIEWS
export const getRandomReviews = async (req, res) => {
    try {
        let reviews = [];
        const pipeline = [
            { $sample: { size: 5 }},
        ];
        const data = await getReviewsColelction().aggregate(pipeline);
        
        for await (const doc of data) {
            reviews.push(doc);
        }

        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
};

//UPDATE 
export const updateReview = async (req, res) => {
    if (req.user.isAdmin) {
        const {
            name,
            desc,
        } = req.body;
        try {
            await getFoodsColelction().updateOne(
                {
                    _id: new ObjectId(req.params.id)
                },
                {
                    $set: {
                        name: name,
                        desc: desc,
                    }
                }
            );
            res.status(200).json({ msg: "Updated successfully"});
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('Access Denied')
    }
};

//DELETE 
export const deleteReview = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await getReviewsColelction().deleteOne(
                {
                    _id: new ObjectId(req.params.id)
                }
            );
            res.status(200).json({ msg: "Delêtd successfully"});
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('Access denied');
    }
};