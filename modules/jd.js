/**
 * 京东物流信息查询
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');

module.exports = (req, res)=> {
    let jd = req.query.jd_ordernum;
    let resArray = {};
    if (!!jd) {
        let jdArray = [];
        for (let i = 0; i < 10; i++) {
            jdArray.push({
                "content": Mock.mock('@csentence(20)'),
                "operator": Mock.mock('@csentence(2)'),
                "msgTime": Mock.mock('@datetime()')
            })
        }
        resArray.c = 0;
        resArray.d = jdArray;
    } else {
        resArray.c = 1;
        resArray.d = {};
    }
    res.jsonp(resArray);
};
