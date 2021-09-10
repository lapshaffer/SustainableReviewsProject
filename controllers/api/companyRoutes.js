const router = require('express').Router();
const {User, Company, Review} = require('../../models');

// CREATE NEW COMPANY
router.post('/', async (req, res) => {
    console.log("*****************************");
    try {
        if (!req.session.logged_in) {
            res.status(400).json("User is not logged in");
            return
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

module.exports = router;
