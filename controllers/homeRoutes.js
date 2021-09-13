const router = require('express').Router();
const { Company, User, Review, Image } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const CompanyData = await Company.findAll({});

    const companies = CompanyData.map((company) => company.get({ plain: true }));
    res.render('homepage', {
      companies,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  try {
    const imageData = await Image.findAll({});
    const image = imageData[0].get({ plain: true });
    console.log(image)
    res.render('signup', {
      image
    });

  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
