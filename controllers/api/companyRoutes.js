const router = require('express').Router();
const { User, Company, Review } = require('../../models');
const Sequelize = require('sequelize');

// CREATE NEW COMPANY
router.post('/', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.status(400).json("User is not logged in");
            return;
        }
        req.body.user_id = req.session.user_id;
        const newCompany = await Company.create(req.body);
        res.status(200).json(newCompany);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// GET ONE COMPANY BY ID WITH REVIEWS & GET AVERAGE RATING
router.get('/:id', async (req, res) => {
    try {
        const companyData = await Company.findByPk(req.params.id, {
            attributes: {
                include: [
                    [
                        Sequelize.literal(`
                            (SELECT AVG(review.rating)
                            FROM review
                            WHERE review.company_id=company.id)
                        `),
                        "avg_rating"
                    ]
                ]
            },
            include: [
                { model: Review }
            ]
        });
        if (!companyData) {
            res.status(404).json({ message: 'No company found with this id!' });
            return;
        }
        res.status(200).json(companyData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// GET ALL COMPANIES
router.get('/', async (req, res) => {
    try {
        const companyData = await Company.findAll({   attributes: {
            include: [
                [
                    Sequelize.literal(`
                        (SELECT AVG(review.rating)
                        FROM review
                        WHERE review.company_id=company.id)
                    `),
                    "avg_rating"
                ]
            ]
        }});
        res.status(200).json(companyData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
