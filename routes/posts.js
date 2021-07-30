const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');

router.get('/create', postCtrl.create);
router.get('/:id', postCtrl.show);

// router.post('/new/:id', postCtrl.create);



module.exports = router;