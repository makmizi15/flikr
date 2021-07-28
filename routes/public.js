const express = require('express');
const router = express.Router();
const publicCtrl = require('../controllers/public');

router.get('/', publicCtrl.public);

module.exports = router;