const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');

router.get('/new', postCtrl.new);


module.exports = router;