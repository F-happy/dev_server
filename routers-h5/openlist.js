/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/h5/openlist', require('../modules/h5/openlist'));

module.exports = router;
