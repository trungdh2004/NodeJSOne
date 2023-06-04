const express = require('express');
const router = express.Router();
const CoursesController = require('../app/controllers/CoursesController');

// newsController.index

router.get('/create', CoursesController.create);
router.put('/:id', CoursesController.update);
router.post('/store', CoursesController.store);
router.get('/:id/edit', CoursesController.edit);
router.get('/:slug', CoursesController.show);

module.exports = router;
