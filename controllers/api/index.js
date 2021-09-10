const router = require('express').Router();
const userRoutes = require('./userRoutes');
const companyRoutes = require('./companyRoutes');

router.use('/user', userRoutes);
router.use('/company', companyRoutes);

module.exports = router;
