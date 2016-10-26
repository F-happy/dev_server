/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let express = require('express');
let router = express.Router();

router.post('/gift/goods/newly', (req, res)=>{
    require('../modules/gift').newly(req, res);
});

router.post('/gift/goods/myrecord', (req, res)=>{
    require('../modules/gift').record(req, res);
});

router.post('/gift/goods/user/address', (req, res)=>{
    require('../modules/gift').getAddress(req, res);
});

router.post('/gift/goods/confirm', (req, res)=>{
    require('../modules/gift').confirm(req, res);
});

module.exports = router;
