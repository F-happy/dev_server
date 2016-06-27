/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

module.exports = (req, res)=> {
    let resArray = {};
    let reqs = req.query.rebate_coins;
    if (!!reqs) {
        resArray.d = {
            "get_coins": 6,
            "surplus_score": 6
        };
    } else {
        resArray.d = {
            "cur_get_coins": 6,
            "surplus_score": 6,
            "already_get_list": [5]
        };
    }
    resArray.c = 0;
    res.jsonp(resArray);
};
