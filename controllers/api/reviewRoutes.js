const router = require('express').Router();
const { Company, Review, User } = require('../../models');

// GET ALL REVIEWS BY COMPANY ID - Works
router.get('/company/:id', async (req, res) => {
    try {
        const companyReviews = await Company.findByPk(req.params.id, { include: [{ model: Review }] });
        res.status(200).json(companyReviews);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// CREATE NEW REVIEW BY COMPANY ID - WORKIN
router.post('/:id', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.status(400).json("User is not logged in");
            return;
        }
        req.body.user_id = req.session.user_id;
        const newReview = await Review.create(req.body);
        res.status(200).json(newReview);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// UPDATE REVIEW BY REVIEW ID
router.put('/:id', async (req, res) => {
    try {
        const updatedReview = await Review.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        console.log(updatedReview);
        if (updatedReview[0]===0){
            res.status(404).json("Review not found or review content unchanged.")
        }
        res.status(200).json(updatedReview);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//DELETE REVIEW BY REVIEW ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedReview = await Review.destroy({
            where: { 
                id: req.params.id 
            }
        });
        res.status(200).json(deletedReview);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;