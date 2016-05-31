/**
 * 获取推荐商品信息
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.get('/actions/goods/recommand', require('../modules/goods'));
router.get('/actions/market/conf', require('../modules/market'));
router.get('/actions/market/getgift', require('../modules/getgift'));

module.exports = router;
