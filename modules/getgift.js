/**
 * 推广应用市场活动领取许愿币
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');

module.exports = (req, res)=> {
    let type = req.query.action_type;
    let token = req.query.token;
    let resArray = {};
    if (!!type && !!token) {
        let id = Mock.mock({"number|-9-0": 100}).number;
        let errMsg = {
            '0': '领取成功~',
            '-1': '网络繁忙，太多人领取了，请您刷新一下再领取',
            '-2': '不存在该活动',
            '-3': '活动暂时关闭',
            '-4': '领取失败，您没有在活动时间内领取',
            '-5': '领取失败，您已经领取过啦，别贪心哦',
            '-6': '领取失败，下载渠道与活动中的不一致',
            '-7': '来晚了，已经领取完了',
            '-8': '请在注册后48小时内充值或购买达到活动金额，即可赠送',
            '-9': '领取失败，服务异常，请联系工作人员'
        };
        resArray.c = id;
        resArray.d = [];
        resArray.err = errMsg[id];
    } else {
        resArray.c = 1;
        resArray.d = {};
    }
    res.jsonp(resArray);
};
