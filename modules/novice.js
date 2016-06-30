/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';
let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let resArray = {};
    let redbagInfo = [];
    let goodsInfo = [];
    let isGet = 0;
    if (req.query.redbag_id) {
        resArray.c = 0;
        resArray.d = {
            'price': 6
        };
    } else {
        if (!!req.query.token) {
            isGet = Mock.mock('@boolean') ? 1 : 0;
        } else {
            isGet = -1;
        }
        redbagInfo.push({
            'redbag_id': 30,
            'restrict_money': 120,
            'price': 30,
            'is_get': isGet
        });
        redbagInfo.push({
            'redbag_id': 18,
            'restrict_money': 120,
            'price': 18,
            'is_get': isGet
        });
        redbagInfo.push({
            'redbag_id': 12,
            'restrict_money': 120,
            'price': 12,
            'is_get': isGet
        });
        redbagInfo.push({
            'redbag_id': 6,
            'restrict_money': 120,
            'price': 6,
            'is_get': isGet
        });
        redbagInfo.push({
            'redbag_id': 3,
            'restrict_money': 120,
            'price': 3,
            'is_get': isGet
        });
        for (let i = 0; i < 5; i++) {
            goodsInfo.push({
                'sid': Mock.mock({"number|1-10000000": 100}).number,
                'gid': Mock.mock({"number|1-10000000": 100}).number,
                'title': Mock.mock('@csentence(20)'),
                'description': Mock.mock('@csentence(30)'),
                'period': Mock.mock({"number|1-10000000": 100}).number,
                'icon': Random.image('200x200', '#4A7BF7'),
                'total': Mock.mock({"number|1-1000": 100}).number,
                'remain': Mock.mock({"number|1-1000": 100}).number
            })
        }
        resArray.c = 0;
        resArray.d = {
            'redbag_info': redbagInfo,
            'goods_info': goodsInfo
        };
    }
    res.jsonp(resArray);
};
