const sequelize = require('../config/connection');
const { User, Review, Company, Image } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const companyData = require('./companyData.json');
const imageData = require('./imageData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Company.bulkCreate(companyData, {
        individualHooks: true,
        returning: true,
    });

    await Review.bulkCreate(reviewData, {
        individualHooks: true,
        returning: true,
    });

    await Image.bulkCreate(imageData, {
        individualHooks: true,
        returning: true
    })
    process.exit(0);
};

seedDatabase();
