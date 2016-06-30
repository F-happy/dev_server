/**
 * Created by fuhuixiang on 16-6-30.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/h5/goods', require('../modules/h5/goods'));

module.exports = router;
