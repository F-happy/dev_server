/**
 * 商品参与记录
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');

module.exports = (req, res)=> {
    let sid = req.query.sid;
    let limit = req.query.limit || 10;
    let resArray = {};
    if (!!sid) {
        let recordArray = [];
        for (let i = 0; i < limit; i++) {
            recordArray.push({
                "username": Mock.mock('@csentence(5)'),             //购买者昵称
                "headimg": Mock.Random.image('200x200'),            //购买者头像
                "buy": Mock.mock({"number|1-100": 100}).number,     //购买份数
                "ip": Mock.mock('@ip()'),                           //ip
                "ip_address": Mock.mock('@city(true)'),             //ip地址
                "buy_time": Mock.mock('@date("T")'),                //购买时间
                "buy_date": Mock.mock('@date()'),                   //购买日期
                "pid": Mock.mock({"number|1-1000000": 100}).number  //下单编号，可用于查询该笔订单的相关信息
            })
        }
        resArray.c = 0;
        resArray.d = recordArray;
    } else {
        resArray.c = 1;
        resArray.d = {};
    }
    res.jsonp(resArray);
};
