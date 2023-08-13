const { Router } = require('express');

const router = Router();

const movie = require('./movie');
router.use('/movie', movie) 

const tag = require('./tag');
router.use('/tag', tag) 

const notice = require('./notice');
router.use('/notice', notice)

const inquiry = require('./inquiry');
router.use('/inquiry', inquiry)


module.exports = router;