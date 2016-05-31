/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
'use strict';
let express = require('express');
let router = express.Router();

router.get('/goods/info', require('../modules/info'));
router.get('/goods/detail', require('../modules/detail'));
router.get('/goodsinfo/newlysid', require('../modules/newlysid'));

module.exports = router;
