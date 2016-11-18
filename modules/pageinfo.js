/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res) => {
    console.log(req.query);
    let rankList = [],
        userInfo = [];

    for (let i = 0; i < 5; i++) {
        rankList.push({
            "username": Mock.mock('@csentence(5)'),             // 购买者昵称
            "headimg": Mock.Random.image('200x200', '#4A7BF7'), // 购买者头像
            "rank": Mock.mock({"number|1-10": 10}).number,      // 名次
            "score": Mock.mock({"number|1-1000": 100}).number,  // 分数
            "uid": Mock.mock({"number|1-1000000": 100}).number  // 下单编号，可用于查询该笔订单的相关信息
        })
    }

    for (let i = 0; i < 5; i++) {
        userInfo.push({
            "charge_price": Mock.mock({"number|1-1000": 100}).number,      // 充值金额
            "rebate_price": Mock.mock({"number|1-1000": 100}).number       // 返利金额
        })
    }

    if (req.query.rebate_id && req.query.token) {
        res.jsonp({
            'c': 0,
            'd': {
                'user_win_times': {
                    663: 11,
                    664: 0
                }
            }
        });
    } else {
        res.jsonp({
            'c': 0,
            'd': {
                'ranklist': rankList,
                'user_info': userInfo
            }
        });
    }
};
