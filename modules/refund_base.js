/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let resArray = {};
    let goodArray = {};
    goodArray.gid = Mock.mock({"number|1-10000000": 100}).number;
    goodArray.sid = Mock.mock({"number|1-10000000": 100}).number;
    goodArray.title = Mock.mock('@csentence(20)');
    goodArray.description = Mock.mock('@csentence(30)');
    goodArray.period = Mock.mock({"number|1-10000000": 100}).number;
    goodArray.icon = Random.image('200x200');
    goodArray.total = Mock.mock({"number|1-1000": 100}).number;
    goodArray.remain = Mock.mock({"number|1-1000": 100}).number;
    resArray.c = 0;
    resArray.d = {
        "refund_coins": 3,
        'goods_info': goodArray
    };
    res.jsonp(resArray);
};
