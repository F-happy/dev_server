/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let Mock = require('mockjs');

module.exports = (req, res)=>{
    let resArray = {};
    resArray.c = -4;
    resArray.d = {
        "refund_coins": 3,
        // 'valid_time': Mock.mock({"number|1-120": 100}).number
        'valid_time': 60
    };
    res.jsonp(resArray);
};
