const router = require('express').Router();

const DevOps = require('./devops');

router.use('/DevOps',DevOps);

module.exports = router;

