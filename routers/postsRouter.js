const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.index);

router.get('/:id', postController.show);

router.get('/', postController.store);

router.get('/:id', postController.update);

router.get('/:id', postController.modify);

router.get('/:id', postController.destroy);

module.exports = router;

