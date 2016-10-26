/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.post('/login', require('../modules/login'));
router.get('/users/info', require('../modules/login'));

module.exports = router;
