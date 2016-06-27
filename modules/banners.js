/**
 * Created by fuhuixiang on 16/5/31.
 */
'use strict';

let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = (req, res)=> {
    let resArray = {};
    let imgList = [];
    for (let i = 0; i < 6; i++) {
        // imgList.push(Random.image('640x280', '#FF6600'));
        imgList.push({
            img: Random.image('640x280', '#4A7BF7'),
            url: Mock.mock({"number|1-10000000": 100}).number
        });
    }
    resArray.c = 0;
    resArray.d = {
        images: imgList
    };
    res.jsonp(resArray);
};
