/**
 * 话费查询
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let token = req.query.token;
    let page = req.query.page;
    let limit = parseInt(req.query.limit);
    let billList = [];
    let resArray = {};
    if (!!token && !!page && !!limit) {
        for (let i = 0; i < limit; i++) {
            let resTemp = {};
            // 充值状态码 0:等待充值，1:正在充值，2:充值成功, 3: 充值失败， 4: 不可充值,5: 重新充值( 0,1,5 充值中 2充值成功, 3,4 充值失败)
            resTemp.status = Mock.mock({"number|1-5": 100}).number;
            resTemp.account = Mock.mock({"number|10000000000": 100}).number;
            resTemp.description = Mock.mock('@csentence(30)');
            resTemp.title = Mock.mock('@csentence(15)');
            resTemp.create_time = Mock.mock('@datetime');
            resTemp.user_name = Mock.mock('@csentence(15)');
            resTemp.icon = Random.image('200x200');
            resTemp.prize_time = Mock.mock('@datetime');
            resTemp.uid = Mock.mock({"number|1-1000": 100}).number;
            billList.push(resTemp);
        }
        resArray.c = 0;
        resArray.d = { "bill_list": billList};
    } else {
        resArray.c = 1;
        resArray.d = {};
    }
    res.jsonp(resArray);
};
