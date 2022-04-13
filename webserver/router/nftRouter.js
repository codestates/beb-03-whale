const { findAll } = require('../controller/nftController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);

module.exports = router;