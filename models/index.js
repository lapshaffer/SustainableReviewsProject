//IMPORT MODELS
const User = require('./User');
const Company = require('./Company');
const Review = require('./Review');
const Image = require('./Image');

Review.belongsTo(User);
Review.belongsTo(Company);

User.hasMany(Review);
Company.hasMany(Review);

module.exports = {
    User,
    Review,
    Company,
    Image
}
