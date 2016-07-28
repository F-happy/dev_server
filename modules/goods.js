/**
 * 获取推荐商品信息
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let gids = req.query.gids;
    let resArray = {};
    let goodArray = [];
    if (!!gids) {
        gids = gids.split('_');
        gids.forEach((v, index)=> {
            let resTemp = {};
            resTemp.gid = v;
            resTemp.sid = Mock.mock({"number|1-10000000": 100}).number;
            resTemp.title = Mock.mock('@csentence(20)');
            resTemp.description = Mock.mock('@csentence(30)');
            resTemp.period = Mock.mock({"number|1-10000000": 100}).number;
            resTemp.icon = Random.image('200x200');
            resTemp.total = Mock.mock({"number|1-1000": 100}).number;
            resTemp.remain = Mock.mock({"number|1-1000": 100}).number;
            goodArray.push(resTemp);
        });
        resArray.c = 0;
        resArray.d = goodArray;
    } else {
        for (let i=0;i<10;i++){
            goodArray.push({
                'gid': Mock.mock({"number|1-1000": 100}).number,
                'sid': Mock.mock({"number|1-10000000": 100}).number,
                'title': Mock.mock('@csentence(20)'),
                'description': Mock.mock('@csentence(30)'),
                'period': Mock.mock({"number|1-10000000": 100}).number,
                'icon': Random.image('200x200', '#4A7BF7'),
                'total': Mock.mock({"number|1-1000": 100}).number,
                'remain': Mock.mock({"number|1-1000": 100}).number
            });
        }
        resArray.c = 0;
        resArray.d = goodArray;
    }
    res.jsonp(resArray);
};
