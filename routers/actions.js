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
router.get('/actions/refund/coins/baseinfo', require('../modules/refund_base'));
router.get('/actions/refund/coins/get', require('../modules/refund_get'));
router.get('/actions/mk/rebate/coins', require('../modules/coins'));
router.get('/actions/mk/rebate/send', require('../modules/coins_send'));
router.get('/actions/tianyi/img/code', require('../modules/tianyi'));
router.get('/actions/tianyi/participate', require('../modules/tianyi'));
router.get('/actions/pay_rebate/pageinfo', require('../modules/pageinfo'));
router.get('/actions/single_day/baseinfo', require('../modules/pageinfo'));
router.get('/actions/win_rebate/user/reachtimes', require('../modules/pageinfo'));

module.exports = router;
