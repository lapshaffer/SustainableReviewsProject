const router = require('express').Router();
const { Company, User, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const CompanyData = await Company.findAll({
      include: [
        {
          model: Review,
          attributes: ['rating'],
        },
      ],
    });

    const companies = CompanyData.map((company) => company.get({ plain: true }));

    res.render('homepage', { 
      companies, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
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

module.exports = router;
