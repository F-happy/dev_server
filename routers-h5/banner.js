/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/h5/banner', require('../modules/h5/banners'));

module.exports = router;
