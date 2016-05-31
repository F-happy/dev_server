/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/delivery/jd', require('../modules/jd'));

module.exports = router;
