const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');

router.get('/create', postCtrl.create);
router.get(`/new`, postCtrl.new);


module.exports = router;