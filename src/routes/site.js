const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteController');

// newsController.index

router.use('/:slug', SiteController.search);
router.use('/', SiteController.index);

module.exports = router;
