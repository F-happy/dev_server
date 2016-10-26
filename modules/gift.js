/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports.newly = (req, res)=> {
    console.log(req.body);
    let resArray = [];
    for (let i = 0; i < req.body.limit; i++) {
        resArray.push({
            "grid": 10,
            "uid": 1, //获奖uid
            "headimg": Random.image('200x200'), //用户头像
            "icon": Random.image('200x200'), //商品链接
            "title": Mock.mock('@csentence(20)'), //商品名称
            "description": Mock.mock('@csentence(20)'), //商品描述
            "gift_reason": Mock.mock('@csentence(20)'), //获赠原因
            "redirect_url": 'http://www.baidu.com', //原因跳转链接
            "create_time": 142240000, // 获赠时间戳
            "gdid": 0, //发货订单ID号，0表示未确认地址
        });
    }
    res.jsonp({
        c: 0,
        d: resArray
    });
};

module.exports.record = (req, res)=> {
    console.log(req.body);
    let resArray = [];
    for (let i = 0; i < req.body.limit; i++) {
        resArray.push(
            {
                "grid": 10, // 记录ID
                "uid": 1, //获奖uid
                "icon": Random.image('200x200'), //商品链接
                "title": Mock.mock('@csentence(20)'), //商品名称
                "description": Mock.mock('@csentence(20)'), //商品描述
                "gift_reason": Mock.mock('@csentence(20)'), //获赠原因
                "redirect_url": 'http://www.baidu.com', //原因跳转链接
                "create_time": 142240000, // 获赠时间戳
                "gdid": 0, //发货订单ID号，0表示未确认地址
                "send_status": Mock.mock({"number|0-2": 1}).number, //发货状态(0: 未确认地址; 1:确认地址; 2:发货)
                "send_info": { // send_status ＝1 or 2 时返回
                    "company": "京东",
                    "delivery_num": "9665679947",
                    "delivery_url": "http://kuaidi100.com/xxxxx",  //跳转快递100 物流查询的链接
                    "receiver": {
                        "province": "广东",
                        "city": "广州市",
                        "name": "温*广",
                        "district": "广州大学城",
                        "phone": "156*****004",
                        "town": "",
                        "street": "大学城数字家庭基地东区B110"
                    }
                }
            }
        );
    }
    res.jsonp({
        c: 0,
        d: resArray
    });
};

module.exports.getAddress = (req, res)=>{
    console.log(req.body);
    let resArray = [];
    for (let i = 0; i < 3; i++) {
        resArray.push({
            "aid": i+1, //地址编号id，
            "username": "老大",
            "phone": "13570362123",
            "province": "广东省",
            "city": "广州市",
            "district": "番禺区",
            "street": "大学城国家数字家庭基地",
            "ecode": "510640",
            "town": '大学城国家数字家庭基地',// 镇
            "is_default": 0 //是否默认， 1:是；0:否
        });
    }
    res.jsonp({
        c: 0,
        d: resArray
    });
};

module.exports.confirm = (req, res)=>{
    console.log(req.body);
    res.jsonp({
        c: 0,
        d: []
    });
};
