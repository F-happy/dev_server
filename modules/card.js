/**
 * 卡密查询
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let session = req.query.session;
    let page = req.query.page;
    let limit = parseInt(req.query.limit);
    let cardList = [];
    let resArray = {};
    if (!!session && !!page && !!limit) {
        for (let i = 0; i < limit; i++) {
            let resTemp = {};
            // 充值状态码 0:等待充值，1:正在充值，2:充值成功, 3: 充值失败， 4: 不可充值,5: 重新充值( 0,1,5 充值中 2充值成功, 3,4 充值失败)
            resTemp.period = Mock.mock({"number|1-1000000": 100}).number;
            resTemp.cardno = Mock.mock('@integer(13)').toString();
            resTemp.cardpw = Mock.mock('@word(13)');
            resTemp.title = Mock.mock('@csentence(15)');
            resTemp.username = Mock.mock({'regexp': /\d{11,11}/}).regexp;
            resTemp.icon = Random.image('200x200');
            resTemp.prize_time = Mock.mock('@datetime');
            cardList.push(resTemp);
        }
        resArray.c = 0;
        resArray.d = { "card_list": cardList};
    } else {
        resArray.c = 1;
        resArray.d = {};
    }
    res.jsonp(resArray);
};
