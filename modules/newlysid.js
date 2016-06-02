/**
 * 商品图文详情
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');

module.exports = (req, res)=> {
    let gid = req.query.gid;
    let sid = req.query.sid;
    let sids = req.query.sids;
    let gids = req.query.gids;
    let resArray = {};
    let sidArry = [];
    let len = 0;
    if (!!gid || !!sid || !!sids || !!gids) {
        if (!!sids){
            len = sids.split(',').length;
        } else if (!!gids){
            len = gids.split(',').length;
        }
        for (let i = 0; i < len; i++) {
            sidArry.push(Mock.mock({"number|1-10000000": 100}).number);
        }
        resArray.c = 0;
        resArray.d = {
            "sids": sidArry,
            "sid": Mock.mock({"number|1-10000000": 100}).number
        };
    } else {
        resArray.c = 1;
        resArray.d = {};
    }
    res.jsonp(resArray);
};
