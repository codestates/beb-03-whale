const { test } = require('../controller/testController');
const express = require('express');
const router = express.Router();

router.get('/', test);

module.exports = router;