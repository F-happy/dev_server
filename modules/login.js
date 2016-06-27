/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

module.exports = (req, res)=>{
    console.log(req.query);
    let resArray = {};
    resArray.c = 0;
    resArray.d = {
        'session': 'rkKEBqJh7+sYOusi4EEacVQ216xYKUt8tE6BDWIbF1Tv+ut2o0oyt8JBClciE5qY/n/9jCfcQVs4OB/ecDGfTgT68NqVaF9IKcgjGjD8KLGVlb7jt3qDe'
    };
    res.jsonp(resArray);
};
