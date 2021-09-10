const router = require('express').Router();
const {User, Company, Review} = require('../../models');

// CREATE NEW COMPANY
router.post('/', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.status(400).json("User is not logged in");
            return
        }
        req.body.user_id = req.session.user_id;
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;
