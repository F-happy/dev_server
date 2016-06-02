/**
 * 推广应用市场活动页面配置信息
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');

module.exports = (req, res)=> {
    let type = req.query.action_type;
    let resArray = {};
    if (!!type) {
        resArray.c = 0;
        resArray.d = {
            "medium": Mock.mock('@csentence(5)'), //应用市场渠道
            "trigger_offset": Mock.mock('@natural(100, 200)'), //触发条件, 购买多少返利
            "get_coins": Mock.mock('@natural(50, 100)'), //赠送许愿币
            "time_conf": { //时间配置
                's_year': Mock.mock('@date("yyyy")'),
                's_month': Mock.mock('@date("MM")'),
                's_day': Mock.mock('@date("dd")'),
                's_time': Mock.mock('@time("HH:mm")'),
                'e_year': Mock.mock('@date("yyyy")'),
                'e_month': Mock.mock('@date("MM")'),
                'e_day': Mock.mock('@date("dd")'),
                'e_time': Mock.mock('@time("HH:mm:")')
            }
        };
    } else {
        resArray.c = 1;
        resArray.d = {};
    }
    res.jsonp(resArray);
};
