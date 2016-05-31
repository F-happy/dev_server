/**
 * 商品图文详情
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');

module.exports = (req, res)=> {
    let gid = req.query.gid;
    let resArray = {};
    if (!!gid) {
        let imgArray = [];
        let has = Mock.mock({"number|0-1": 100}).number;
        for (let i = 0; i < 10; i++) {
            imgArray.push(Mock.Random.image('200x100'))
        }
        resArray.c = 0;
        /**
         * 若has_div ＝1 detail的格式为<img src="http://xxxx"> 的html标签格式 ，has_div = 0  detail为逗号分隔的字符串 "http://xxxx,http://xxxx"
         * @type {{has_div: (string|number|string), detail: string}}
         */
        resArray.d = {
            "has_div": has,// 是否包含div标签
            "detail": imgArray.join(',')
        };
    } else {
        resArray.c = 1;
        resArray.d = {};
    }
    res.jsonp(resArray);
};
