/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=>{
    console.log(req.query);
    res.send('hello');
};
