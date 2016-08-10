/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let resArray = {
        "c": 0,
        "d": {
            "rebate_coins": 11, //待领取返币
        }
    };
    res.jsonp(resArray);
};
