const router = require('express').Router();
const { User } = require('../../models');

//SIGNUP NEW USER
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            //add new key-value pairs to req.session
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

//EXISTING USER LOGIN
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { name: req.body.name } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password. Please try again.' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password. Please try again.' });
            return;
        }

        req.session.save(() => {
            //add new key-value pairs to req.session
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json({ error: err, message: 'Something went wrong' });
        console.log(err);
    }
});

//LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;