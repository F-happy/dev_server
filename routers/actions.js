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
router.get('/actions/rebate/baseinfo', require('../modules/rebate'));
router.get('/actions/rebate/get', require('../modules/rebate'));
router.get('/actions/novice/baseinfo', require('../modules/novice'));
router.get('/actions/novice/getredbag', require('../modules/novice'));

module.exports = router;
