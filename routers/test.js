/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/', require('../modules/test'));

module.exports = router;
