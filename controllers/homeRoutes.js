const router = require('express').Router();
const { Company, User, Review, Image } = require('../models');
const Sequelize = require('sequelize');
const { parse } = require('dotenv');
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
/*   if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  } */
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

router.get('/company/:id', async (req, res) => {
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
        { model: Review, include: [User] }
      ]
    });
    if (!companyData) {
      alert('No company found with this id!');
      return;
    }
    const company = companyData.get({ plain: true });

    let reviews = company.reviews;

    reviews = reviews.map((review) => {
      console.log(review.date_created);
      let date = review.date_created;
      date = date.toString();
      console.log(typeof date);
      date = date.split('-');
      date = date[0].split(' ');
      console.log(date);
      review.date_created = `${date[1]} ${date[2]} ${date[3]}`;
      return review;
    });
    console.log(company);

    res.render('company', {
      company,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    });
  }
  catch (err) {
    console.log(err);
  }
});

router.get('/addcompany',(req,res)=>{
  res.render('addCompany',{
    logged_in: req.session.logged_in,
    user_id: req.session.user_id
  });
});

module.exports = router;
