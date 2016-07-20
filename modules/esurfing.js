/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let phone = req.query.phone;
    let resArray = {};
    if (!!phone) {
        resArray.d = {
            'msg': ''
        };
    } else {
        resArray.d = {
            "verification_code": 'https://github.com/F-happy/verification-code/blob/master/code.png'
        };
    }
    resArray.c = 0;
    res.jsonp(resArray);
};
