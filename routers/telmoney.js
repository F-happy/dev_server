/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/phonebill/list', require('../modules/phonebill'));

module.exports = router;
