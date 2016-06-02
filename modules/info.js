/**
 * 商品信息
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');

module.exports = (req, res)=> {
    let sid = req.query.sid;
    let resArray = {};
    if (!!sid) {
        let status = Mock.mock({"number|0-2": 100}).number;
        let prize = {};
        if (status == 2) {
            prize = {
                "prize_time": Mock.mock('@date()'),     //开奖时间
                "basic_time": Mock.mock('@date("T")')   //服务器当前时间
            }
        } else if (status == 0) {
            prize = {                                               //status=0
                "uid": Mock.mock({"number|1-1000": 100}).number,    //中奖者uid
                "phone": Mock.mock({'regexp': /\d{11,11}/}).regexp, //中奖者电话
                "username": Mock.mock('@csentence(15)'),            //中奖者姓名
                "level": 1,
                "level_img": "http://static.iduobao.net/level/aos-level-icon/pic_lv1.png",
                "level_title": "夺宝小将",
                "headimg": Mock.Random.image('200x200'),            //头像
                "ip_address": Mock.mock('@ip()'),                   //中奖者ip归属地
                "buy": Mock.mock({"number|1-1000": 100}).number,    //中奖者购买份数
                "code": Mock.mock({"number|1-100000": 100}).number, //幸运码
                "prize_time": Mock.mock('@datetime'),               //开奖时间
                "pid": Mock.mock({"number|1-1000000": 100}).number  //中奖者本次晒单的编号
            }
        }
        resArray.c = 0;
        resArray.d = {
            "sid": Mock.mock({"number|1-10000000": 100}).number,
            "gid": Mock.mock({"number|1-10000000": 100}).number,
            "period": Mock.mock({"number|1-10000000": 100}).number, //期数
            "title": Mock.mock('@csentence(20)'),
            "description": Mock.mock('@csentence(30)'),
            "icon": Mock.Random.image('200x200'),
            "total": Mock.mock({"number|1-1000": 100}).number,      //总需购买份数
            "purchase": Mock.mock({"number|1-1000": 100}).number,   //已购买份数
            "status": status,                                       //0:已结束，1：正在进行，2：即将揭晓
            "prize": prize
        };
    } else {
        resArray.c = 1;
        resArray.d = {};
    }
    res.jsonp(resArray);
};
