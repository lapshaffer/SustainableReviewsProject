const router = require('express').Router();
const userRoutes = require('./userRoutes');
const companyRoutes = require('./companyRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/user', userRoutes);
router.use('/company', companyRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
