// Pushes data from routes to the server.js file

const router = require('express').Router();

router.use('/api', require('./apiRoutes'));
router.use('/',require('./homeRoutes'));

module.exports = router;