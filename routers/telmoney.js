/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/phonebill/list', require('../modules/phonebill'));
router.get('/esurfing/baesinfo', require('../modules/esurfing'));

module.exports = router;
