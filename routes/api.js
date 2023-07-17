const { Router } = require('express');

const router = Router();

const movie = require('./movie');
router.use('/movie', movie) 

const tag = require('./tag');
router.use('/tag', tag) 

module.exports = router;